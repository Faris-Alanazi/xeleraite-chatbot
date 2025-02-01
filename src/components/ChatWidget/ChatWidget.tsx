import React, { useEffect, useState } from 'react';
import ChatToggle from './ChatToggle';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatFooter from './ChatFooter';
import { ChatConfig, Message } from './types';
import { defaultConfig } from './config';

// Define allowed origins
const ALLOWED_ORIGINS = [
  'https://example.com',
  'https://app.example.com',
  'http://localhost:3000',
  'http://localhost:5173'
  // Add your allowed domains here
];

interface ChatWidgetProps {
  config: Partial<ChatConfig>;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const mergedConfig = { ...defaultConfig, ...config };

  useEffect(() => {
    const currentOrigin = window.location.origin;
    const isOriginAllowed = ALLOWED_ORIGINS.includes(currentOrigin);
    
    if (!isOriginAllowed) {
      console.error(`Access denied: ${currentOrigin} is not an allowed origin`);
    }
    
    setIsAllowed(isOriginAllowed);

    // Initialize with pre-send messages if any
    if (mergedConfig.preSendMessages && mergedConfig.preSendMessages.length > 0) {
      const initialMessages = mergedConfig.preSendMessages.map((content, index) => ({
        id: `pre-${index}`,
        content,
        sender: 'bot' as const,
        timestamp: Date.now() + index
      }));
      setMessages(initialMessages);
    }
  }, [mergedConfig.preSendMessages]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, newMessage]);
    
    // Here you would typically send the message to your backend
    // and handle the response
  };

  if (!isAllowed) {
    return null; // Don't render anything if origin is not allowed
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl flex flex-col"
             style={{
               width: mergedConfig.dimensions.width,
               height: mergedConfig.dimensions.height,
             }}>
          <ChatHeader 
            config={mergedConfig} 
            onClose={() => setIsOpen(false)} 
          />
          <ChatMessages 
            config={mergedConfig} 
            messages={messages}
          />
          <ChatInput 
            config={mergedConfig} 
            onSendMessage={handleSendMessage}
          />
          <ChatFooter config={mergedConfig} />
        </div>
      ) : (
        <ChatToggle 
          config={mergedConfig}
          isOpen={isOpen}
          onClick={() => setIsOpen(true)} 
        />
      )}
    </div>
  );
};

export default ChatWidget;