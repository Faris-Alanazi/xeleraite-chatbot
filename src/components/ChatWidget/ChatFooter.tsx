import React from 'react';
import { ChatConfig } from './types';

interface ChatFooterProps {
  config: ChatConfig;
}

const ChatFooter: React.FC<ChatFooterProps> = ({ config }) => {
  const isRTL = config.language === 'rtl';
  
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
        {isRTL ? (
          <span className="underline underline-offset-2 decoration-2">
            مشغل عن طريق إكسيل
            <span className="text-[#7bb4d0]">ري</span>
            ت
          </span>
        ) : (
          <span className="underline underline-offset-2 decoration-2">
            Powered by Xeler
            <span className="text-[#7bb4d0]">AI</span>
            te
          </span>
        )}
      </a>
    </div>
  );
};

export default ChatFooter;