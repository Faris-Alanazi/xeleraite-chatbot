import React, { useState } from 'react';
import { ChatConfig } from './types';

interface ChatInputProps {
  config: ChatConfig;
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ config, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={config.input.placeholder}
          className="flex-1 rounded-l-lg px-4 py-2 focus:outline-none"
          style={{
            backgroundColor: config.input.inputFieldColor,
            color: config.input.textColor,
          }}
          dir={config.language}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-r-lg"
          style={{ backgroundColor: config.input.sendButtonColor }}
        >
          <img
            src={config.input.sendButtonIcon}
            alt="Send"
            className="w-5 h-5 invert"
          />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;