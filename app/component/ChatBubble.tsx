'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot'; text: string }>>([
    { type: 'bot', text: 'Hi! 👋 How can we help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: 'Thanks for your message! Our team will respond shortly.' }]);
    }, 500);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/08120766716?text=Hi%20I%20would%20like%20to%20know%20more', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-linear-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-800 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t p-3 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
            >
              <Send size={18} />
            </button>
          </div>

          {/* WhatsApp Option */}
          <div className="border-t px-3 py-2 bg-gray-50 flex gap-2">
            <button
              onClick={handleWhatsAppClick}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.926 1.26c-1.535.905-2.933 2.204-3.822 3.747-1.778 2.875-2.065 6.274-.795 9.37 1.27 3.097 4.02 5.386 7.22 5.997 3.2.61 6.76-.294 9.133-2.583 2.373-2.289 3.574-5.683 3.215-9.09-.36-3.407-2.915-6.373-6.238-7.268-1.586-.413-3.287-.41-4.885.003zm11.772-5.951c-.788-.796-2.065-1.194-3.342-1.194-2.714 0-4.92 2.206-4.92 4.92 0 1.354.54 2.633 1.52 3.6.978.968 2.308 1.508 3.66 1.508.552 0 1.1-.09 1.632-.27 1.206-.39 2.268-1.228 2.98-2.317.712-1.088 1.067-2.418.999-3.794-.058-1.376-.624-2.685-1.529-3.453zm.09-6.632C17.597.272 15.62 0 13.644 0c-3.968 0-7.71 1.605-10.492 4.529A13.637 13.637 0 00.53 18.55c-.024.165-.02.331.01.493.033.165.103.321.205.455l.01.01v.021l2.26 5.593.01.025.02.046.03.048.04.04.046.03.05.02.056.01h.06l.053-.01.05-.02.046-.03.04-.04.029-.048.02-.046.01-.025 2.26-5.593v-.021l.01-.01c.102-.134.172-.29.205-.455.03-.162.034-.328.01-.493-1.572-8.646 1.44-17.131 8.148-21.634 2.772-1.864 5.975-2.85 9.268-2.85 1.976 0 3.953.272 5.854.813 1.902.54 3.66 1.359 5.206 2.434 1.546 1.075 2.95 2.387 4.14 3.896 1.19 1.509 2.163 3.21 2.854 5.047.69 1.836 1.088 3.762 1.164 5.711.077 1.949-.183 3.89-.777 5.743-.595 1.853-1.53 3.596-2.752 5.09-1.222 1.495-2.684 2.74-4.32 3.673-1.636.933-3.428 1.555-5.278 1.835-1.85.28-3.74.228-5.577-.155-1.836-.383-3.596-1.139-5.18-2.217a14.02 14.02 0 01-4.35-3.94c-1.23-1.527-2.217-3.318-2.902-5.222-.686-1.904-1.073-3.94-1.128-5.996-.055-2.056.188-4.11.727-6.08.539-1.97 1.369-3.85 2.458-5.574 1.088-1.724 2.428-3.287 3.976-4.633" />
              </svg>
              WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen
            ? 'bg-red-500 hover:bg-red-600 w-14 h-14'
            : 'bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-16 h-16'
        }`}
      >
        {isOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <MessageCircle size={28} className="text-white" />
        )}
      </button>
    </div>
  );
}
