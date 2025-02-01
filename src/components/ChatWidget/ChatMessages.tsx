import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
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
            className={`rounded-lg p-3 max-w-[80%] break-words markdown-content`}
            style={{
              backgroundColor: message.sender === 'user' ? config.messages.userColor : config.messages.botColor,
              color: config.messages.textColor,
              padding: config.messages.padding,
              borderRadius: config.messages.borderRadius,
              fontSize: config.chatbot.messageSize,
              direction: 'rtl'
            }}
          >
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                ul: ({ children }) => <ul className="list-disc mr-6 mb-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal mr-6 mb-2">{children}</ol>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                h1: ({ children }) => <h1 className="text-xl font-bold mb-2">{children}</h1>,
                h2: ({ children }) => <h2 className="text-lg font-bold mb-2">{children}</h2>,
                h3: ({ children }) => <h3 className="text-md font-bold mb-2">{children}</h3>,
                blockquote: ({ children }) => (
                  <blockquote className="border-r-4 border-gray-300 pr-4 italic my-2">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 rounded px-1 py-0.5">{children}</code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-100 rounded p-2 overflow-x-auto my-2">
                    {children}
                  </pre>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;