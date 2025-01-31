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
            }
          }}
        />
      </div>
    </div>
  );
};

export default Index;