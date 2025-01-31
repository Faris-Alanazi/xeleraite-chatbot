import { ChatConfig } from './types';

export const defaultConfig: ChatConfig = {
  uuid: '',
  language: 'rtl', // Changed to RTL for Arabic
  chatbot: {
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=XelerAlte&backgroundColor=3366ff', // Customized avatar
    name: 'نفات بوث', // Arabic bot name
    description: 'هنا لمساعدتك على مدار الساعة', // "Here to help you 24/7"
    headerColor: '#3366FF', // Primary brand blue
    footerColor: '#2A2A2A', // Dark footer for contrast
  },
  messages: {
    userColor: '#3366FF', // Brand blue for user messages
    botColor: '#F4F4F4', // Light gray for bot responses
    background: '#FFFFFF', // Clean white background
    textColor: '#1A1A1A', // Dark text for readability
    padding: '12px', // Slightly larger padding
    borderRadius: '10px', // Softer rounded corners
  },
  input: {
    placeholder: 'اكتب رسالتك...', // Arabic placeholder
    sendButtonColor: '#3366FF', // Brand blue
    sendButtonIcon: 'https://icon-library.com/images/arabic-send-icon/arabic-send-icon-0.jpg', // Arabic-style send icon
    inputFieldColor: '#FAFAFA', // Light input background
    textColor: '#1A1A1A', // Dark input text
  },
  preSendMessages: [
    'مرحبا! كيف يمكنني مساعدتك اليوم؟', // Arabic translations
    'هل تحتاج إلى مساعدة؟ اسألني أي شيء.',
    'تواصل معنا للحصول على دعم سريع!'
  ],
  popupMessage: {
    enabled: true,
    text: 'هل تحتاج مساعدة؟ تواصل معنا!', // Arabic popup
    textColor: '#FFFFFF',
    backgroundColor: '#3366FF',
    delay: 5,
  },
  dimensions: {
    width: '380px', // Slightly wider for Arabic text
    height: '600px', // Taller for better flow
  },
  animations: {
    smoothTransitions: true,
    dynamicResizing: true,
  }
};



