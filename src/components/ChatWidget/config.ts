import { ChatConfig } from './types';

export const defaultConfig: ChatConfig = {
  uuid: '',
  language: 'rtl',
  chatbot: {
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=XelerAIte&backgroundColor=7bb4d0",
    name: "مساعد إكسيليريت",
    description: "هنا لمساعدتك على مدار الساعة",
    headerColor: "#1e2e41",
    footerColor: "#1e2e41",
    nameColor: "#7bb4d0",
    nameSize: "1.5rem",
    descColor: "#7bb4d0",
    descSize: "0.875rem",
    messageSize: "1rem",
    externalIcon: "https://api.dicebear.com/7.x/bottts/svg?seed=Icon&backgroundColor=7bb4d0"
  },
  messages: {
    userColor: "#f8fafc",
    botColor: "#f8fafc",
    background: "#1e2e41",
    textColor: "#1A1A1A",
    padding: "12px",
    borderRadius: "10px"
  },
  input: {
    placeholder: "اكتب رسالتك...",
    sendButtonColor: "#7bb4d0",
    sendButtonIcon: "https://icon-library.com/images/arabic-send-icon/arabic-send-icon-0.jpg",
    inputFieldColor: "#FAFAFA",
    textColor: "#1A1A1A"
  },
  preSendMessages: [
    "مرحبا! كيف يمكنني مساعدتك اليوم؟"
  ],
  popupMessage: {
    enabled: true,
    text: "هل تحتاج مساعدة؟ تواصل معنا!",
    textColor: "#FFFFFF",
    backgroundColor: "#7bb4d0",
    delay: 5
  },
  dimensions: {
    width: "380px",
    height: "600px"
  },
  animations: {
    smoothTransitions: true,
    dynamicResizing: true
  }
};