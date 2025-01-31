import React from 'react';
import { ChatConfig } from './types';

interface ChatFooterProps {
  config: ChatConfig;
}

const ChatFooter: React.FC<ChatFooterProps> = ({ config }) => {
  const footerText = config.language === 'rtl' ? 'مطور عن طريق إكسيليريت' : 'Powered by XelerAIte';

  return (
    <div
      className="p-2 text-center text-sm rounded-b-lg"
      style={{ backgroundColor: config.chatbot.footerColor }}
      dir={config.language}
    >
      <a
        href="https://xeleraite.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800"
      >
        {footerText}
      </a>
    </div>
  );
};

export default ChatFooter;