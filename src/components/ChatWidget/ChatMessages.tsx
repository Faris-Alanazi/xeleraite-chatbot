import React, { useEffect, useRef } from 'react';
import { ChatConfig, Message } from './types';

interface ChatMessagesProps {
  config: ChatConfig;
  messages: Message[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ config, messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div 
      className="flex-1 overflow-y-auto p-4"
      style={{ backgroundColor: config.messages.background }}
      dir={config.language}
    >
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`rounded-lg p-3 max-w-[80%] break-words`}
            style={{
              backgroundColor: message.sender === 'user' ? config.messages.userColor : config.messages.botColor,
              color: config.messages.textColor,
              padding: config.messages.padding,
              borderRadius: config.messages.borderRadius,
              fontSize: config.chatbot.messageSize
            }}
          >
            {message.content}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;