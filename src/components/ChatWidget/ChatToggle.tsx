import React from 'react';
import { ChatConfig } from './types';

interface ChatToggleProps {
  config: ChatConfig;
  isOpen: boolean;
  onClick: () => void;
}

const ChatToggle: React.FC<ChatToggleProps> = ({ config, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      style={{ backgroundColor: config.chatbot.headerColor }}
    >
      <img
        src={isOpen ? 'https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/x.svg' : 'https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/message-circle.svg'}
        alt={isOpen ? 'Close Chat' : 'Open Chat'}
        className="w-6 h-6 invert"
      />
    </button>
  );
};

export default ChatToggle;