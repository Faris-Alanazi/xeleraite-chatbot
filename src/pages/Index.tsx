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
      </div>

      <ChatWidget
        config={{
          uuid: "demo-user-123",
          language: "ltr",
          chatbot: {
            name: "Demo Bot",
            description: "Try me out!",
            avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=1",
            headerColor: "#3366FF",
            footerColor: "#F1F1F1"
          },
        }}
      />
    </div>
  );
};

export default Index;