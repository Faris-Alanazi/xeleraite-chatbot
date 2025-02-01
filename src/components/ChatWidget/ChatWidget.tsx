import React, { useState, useEffect } from 'react';
import { ChatConfig, Message } from './types';
import { defaultConfig } from './config';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatFooter from './ChatFooter';
import ChatToggle from './ChatToggle';
import { useToast } from "@/hooks/use-toast";

interface ChatWidgetProps {
  config?: Partial<ChatConfig>;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ config: userConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const { toast } = useToast();

  // Merge default config with user config
  const config: ChatConfig = {
    ...defaultConfig,
    ...userConfig,
    chatbot: { ...defaultConfig.chatbot, ...userConfig?.chatbot },
    messages: { ...defaultConfig.messages, ...userConfig?.messages },
    input: { ...defaultConfig.input, ...userConfig?.input },
    dimensions: { ...defaultConfig.dimensions, ...userConfig?.dimensions },
    animations: { ...defaultConfig.animations, ...userConfig?.animations },
  };

  useEffect(() => {
    if (!config.uuid) {
      console.error('UUID is required for chat initialization');
      return;
    }

    // Add pre-send messages
    if (config.preSendMessages.length > 0) {
      const preSendMessages: Message[] = config.preSendMessages.map((content, index) => ({
        id: `pre-${index}`,
        content,
        sender: 'bot',
        timestamp: Date.now() + index,
      }));
      setMessages(preSendMessages);
    }

    // Show popup message after delay if enabled
    if (config.popupMessage?.enabled) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, (config.popupMessage.delay || 5) * 1000);

      return () => clearTimeout(timer);
    }
  }, [config.uuid, config.preSendMessages, config.popupMessage]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await fetch(
        `https://n8n-automations-w0mh.onrender.com/webhook/chatbot-message?message=${encodeURIComponent(content)}&userId=${encodeURIComponent(config.uuid)}`,
        { method: 'POST' }
      );

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || data.output || 'Sorry, I could not process your request.',
        sender: 'bot',
        timestamp: Date.now() + 1,
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = config.language === 'rtl' 
        ? 'عذراً، حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.'
        : 'Sorry, there was an error sending your message. Please try again.';
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <ChatToggle config={config} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      
      {showPopup && !isOpen && config.popupMessage?.enabled && (
        <div
          className="fixed bottom-20 right-4 p-4 rounded-lg shadow-lg animate-fade-in max-w-[250px]"
          style={{
            backgroundColor: config.popupMessage.backgroundColor,
            color: config.popupMessage.textColor,
          }}
        >
          {config.popupMessage.text}
        </div>
      )}

      {isOpen && (
        <div
          className="fixed bottom-24 right-4 flex flex-col rounded-lg shadow-xl animate-fade-in"
          style={{
            width: config.dimensions.width,
            height: config.dimensions.height,
            backgroundColor: config.messages.background,
          }}
        >
          <ChatHeader config={config} />
          <ChatMessages config={config} messages={messages} />
          <ChatInput config={config} onSendMessage={handleSendMessage} />
          <ChatFooter config={config} />
        </div>
      )}
    </>
  );
};

export default ChatWidget;