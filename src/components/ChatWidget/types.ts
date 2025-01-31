export interface ChatConfig {
  uuid: string;
  language: 'ltr' | 'rtl';
  chatbot: {
    avatar: string;
    name: string;
    description: string;
    headerColor: string;
    footerColor: string;
  };
  messages: {
    userColor: string;
    botColor: string;
    background: string;
    textColor: string;
    padding: string;
    borderRadius: string;
  };
  input: {
    placeholder: string;
    sendButtonColor: string;
    sendButtonIcon: string;
    inputFieldColor: string;
    textColor: string;
  };
  preSendMessages: string[];
  popupMessage?: {
    enabled: boolean;
    text: string;
    textColor: string;
    backgroundColor: string;
    delay: number;
  };
  dimensions: {
    width: string;
    height: string;
  };
  animations: {
    smoothTransitions: boolean;
    dynamicResizing: boolean;
  };
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: number;
}