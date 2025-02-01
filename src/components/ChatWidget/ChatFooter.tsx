import React from 'react';
import { ChatConfig } from './types';

interface ChatFooterProps {
  config: ChatConfig;
}

const ChatFooter: React.FC<ChatFooterProps> = ({ config }) => {
  const footerText = config.language === 'rtl' 
    ? 'مشغل عن طريق إكسيلي' 
    : 'Powered by Xeler';

  const highlightedText = config.language === 'rtl' ? 'ريت' : 'AIte';

  return (
    <div
      className="p-2 text-center rounded-b-lg flex items-center justify-center"
      style={{ backgroundColor: config.chatbot.footerColor }}
      dir={config.language}
    >
      <a
        href="https://xeleraite.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 hover:text-gray-100 text-sm font-medium"
      >
        {footerText}
        <span className="text-[#7bb4d0] underline underline-offset-2 decoration-2">
          {highlightedText}
        </span>
      </a>
    </div>
  );
};

export default ChatFooter;