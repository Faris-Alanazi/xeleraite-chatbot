import React from 'react';
import { ChatConfig } from './types';

interface ChatHeaderProps {
  config: ChatConfig;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ config }) => {
  return (
    <div
      className="flex items-center p-4 rounded-t-lg"
      style={{ backgroundColor: config.chatbot.headerColor }}
    >
      <img
        src={config.chatbot.avatar}
        alt="Chatbot Avatar"
        className="w-10 h-10 rounded-full"
      />
      <div className="ml-3 text-white">
        <h3 className="font-semibold">{config.chatbot.name}</h3>
        <p className="text-sm opacity-90">{config.chatbot.description}</p>
      </div>
    </div>
  );
};

export default ChatHeader;