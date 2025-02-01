import { ChatConfig } from './types';

export const defaultConfig: ChatConfig = {
  uuid: '',
  language: 'rtl',
  chatbot: {
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=XelerAlte&backgroundColor=3366ff',
    name: 'النشمي',
    description: 'هنا لمساعدتك على مدار الساعة',
    headerColor: '#238bb9',
    footerColor: '#2A2A2A',
    nameColor: '#FFFFFF',
    nameSize: '1.125rem',
    descColor: '#E5E5E5',
    descSize: '0.875rem',
    messageSize: '1rem',
    externalIcon: 'https://api.dicebear.com/7.x/bottts/svg?seed=Icon&backgroundColor=3366ff'
  },
  messages: {
    userColor: '#3366FF',
    botColor: '#F4F4F4',
    background: '#FFFFFF',
    textColor: '#1A1A1A',
    padding: '12px',
    borderRadius: '10px'
  },
  input: {
    placeholder: 'اكتب رسالتك...',
    sendButtonColor: '#3366FF',
    sendButtonIcon: 'https://icon-library.com/images/arabic-send-icon/arabic-send-icon-0.jpg',
    inputFieldColor: '#FAFAFA',
    textColor: '#1A1A1A'
  },
  preSendMessages: [
    'مرحبا! كيف يمكنني مساعدتك اليوم؟',
    'هل تحتاج إلى مساعدة؟ اسألني أي شيء.',
    'تواصل معنا للحصول على دعم سريع!'
  ],
  popupMessage: {
    enabled: true,
    text: 'هل تحتاج مساعدة؟ تواصل معنا!',
    textColor: '#FFFFFF',
    backgroundColor: '#3366FF',
    delay: 5
  },
  dimensions: {
    width: '380px',
    height: '600px'
  },
  animations: {
    smoothTransitions: true,
    dynamicResizing: true
  }
};