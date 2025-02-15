import React from 'react';
import { ChatConfig } from './types';
import { Circle } from 'lucide-react';

interface ChatHeaderProps {
  config: ChatConfig;
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ config, onClose }) => {
  return (
    <div
      className="flex items-center p-4 rounded-t-lg relative"
      style={{ backgroundColor: config.chatbot.headerColor }}
    >
      <div className="relative">
        <div className="absolute -top-1 -right-1 z-10">
          <Circle className="w-3 h-3 text-green-500 fill-green-500" />
        </div>
        <img
          src={config.chatbot.avatar}
          alt="Chatbot Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="ml-3 flex-1">
        <h3 
          style={{ 
            color: config.chatbot.nameColor,
            fontSize: config.chatbot.nameSize
          }}
          className="font-semibold"
        >
          {config.chatbot.name}
        </h3>
        <p 
          style={{ 
            color: config.chatbot.descColor,
            fontSize: config.chatbot.descSize
          }}
          className="opacity-90"
        >
          {config.chatbot.description}
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-2 hover:bg-black/10 rounded-full transition-colors"
      >
        <img
          src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/x.svg"
          alt="Close"
          className="w-5 h-5"
          style={{ filter: 'invert(1)' }}
        />
      </button>
    </div>
  );
};

export default ChatHeader;