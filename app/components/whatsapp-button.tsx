'use client';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const WhatsappButton = () => {
  const whatsappNumber = '351939299776'; // Replace with the actual number
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`);
  };

  return (
    <button
      type="button"
      className="fixed bottom-4 right-4 inline-flex items-center justify-center w-12 h-12 p-3 bg-green-600 text-white rounded-full shadow-lg cursor-pointer hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 z-50"
      onClick={handleClick}
      aria-label="Talk to Nicky Miller on WhatsApp"
      title="Talk to Nicky Miller on WhatsApp"
    >
      <AiOutlineWhatsApp size={24} />
    </button>
  );
};

export default WhatsappButton;
