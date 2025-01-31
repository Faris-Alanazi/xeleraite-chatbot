export interface ChatConfig {
  // Required - Unique identifier for the chat session
  uuid: string;

  // Optional - Text direction and language preference
  language: 'ltr' | 'rtl';

  // Chatbot appearance configuration
  chatbot: {
    avatar: string;        // URL to the chatbot's avatar image
    name: string;          // Display name of the chatbot
    description: string;   // Short description or status message
    headerColor: string;   // Color of the header background
    footerColor: string;   // Color of the footer background
  };

  // Message styling configuration
  messages: {
    userColor: string;     // Background color for user messages
    botColor: string;      // Background color for bot messages
    background: string;    // Chat area background color
    textColor: string;     // Message text color
    padding: string;       // Message padding (e.g., "12px")
    borderRadius: string;  // Message border radius (e.g., "10px")
  };

  // Input area configuration
  input: {
    placeholder: string;     // Placeholder text for input field
    sendButtonColor: string; // Color of the send button
    sendButtonIcon: string;  // URL to the send button icon
    inputFieldColor: string; // Background color of input field
    textColor: string;       // Color of input text
  };

  // Initial messages shown when chat opens
  preSendMessages: string[];

  // Optional popup message configuration
  popupMessage?: {
    enabled: boolean;
    text: string;
    textColor: string;
    backgroundColor: string;
    delay: number;          // Delay in seconds before showing popup
  };

  // Chat widget dimensions
  dimensions: {
    width: string;          // Width of the chat widget (e.g., "380px")
    height: string;         // Height of the chat widget (e.g., "600px")
  };

  // Non-customizable animations configuration
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