import React from 'react';
import ChatWidget from '@/components/ChatWidget/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Website</h1>
        <p className="text-xl text-gray-600 mb-8">
          This is a demo page showing the chat widget integration.
        </p>
        
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About the Chat Widget</h2>
          <p className="text-gray-700 mb-4">
            The chat widget is fully customizable and can be integrated into any website.
            It supports RTL languages, custom styling, and various configuration options.
          </p>
          <p className="text-gray-700">
            Try clicking the chat button in the bottom right corner!
          </p>
        </div>

        <ChatWidget
          config={{
            uuid: "demo-user-123", // Required - only mandatory parameter
            language: "rtl", // Optional - 'ltr' or 'rtl'
            chatbot: {
              avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=custom&backgroundColor=3366ff",
              name: "نفات بوث",
              description: "هنا لمساعدتك على مدار الساعة",
              headerColor: "#3366FF",
              footerColor: "#2A2A2A"
            },
            messages: {
              userColor: "#3366FF",
              botColor: "#F4F4F4",
              background: "#FFFFFF",
              textColor: "#1A1A1A",
              padding: "12px",
              borderRadius: "10px"
            },
            input: {
              placeholder: "اكتب رسالتك...",
              sendButtonColor: "#3366FF",
              sendButtonIcon: "https://icon-library.com/images/arabic-send-icon/arabic-send-icon-0.jpg",
              inputFieldColor: "#FAFAFA",
              textColor: "#1A1A1A"
            },
            preSendMessages: [
              "مرحبا! كيف يمكنني مساعدتك اليوم؟",
              "هل تحتاج إلى مساعدة؟ اسألني أي شيء.",
              "تواصل معنا للحصول على دعم سريع!"
            ],
            popupMessage: {
              enabled: true,
              text: "هل تحتاج مساعدة؟ تواصل معنا!",
              textColor: "#FFFFFF",
              backgroundColor: "#3366FF",
              delay: 5
            },
            dimensions: {
              width: "380px",
              height: "600px"
            }
            // Note: animations object is not included as it's not customizable
          }}
        />
      </div>
    </div>
  );
};

export default Index;