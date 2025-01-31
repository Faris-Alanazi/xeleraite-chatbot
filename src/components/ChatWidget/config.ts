import { ChatConfig } from './types';

export const defaultConfig: ChatConfig = {
  uuid: '',
  language: 'ltr',
  chatbot: {
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=1',
    name: 'Support Bot',
    description: 'Here to help you',
    headerColor: '#3366FF',
    footerColor: '#F1F1F1',
  },
  messages: {
    userColor: '#0084FF',
    botColor: '#F4F4F4',
    background: '#FFFFFF',
    textColor: '#000000',
    padding: '10px',
    borderRadius: '8px',
  },
  input: {
    placeholder: 'Type your message...',
    sendButtonColor: '#0084FF',
    sendButtonIcon: 'https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/send.svg',
    inputFieldColor: '#F5F5F5',
    textColor: '#000000',
  },
  preSendMessages: [
    'Hello! How can I help you today?',
    'Need assistance? Ask me anything.',
    'Chat with us for quick support!',
  ],
  popupMessage: {
    enabled: true,
    text: 'Need help? Chat with us!',
    textColor: '#FFFFFF',
    backgroundColor: '#3366FF',
    delay: 5,
  },
  dimensions: {
    width: '350px',
    height: '500px',
  },
  animations: {
    smoothTransitions: true,
    dynamicResizing: true,
  },
};