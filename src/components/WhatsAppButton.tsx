import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5531999999999?text=Olá! Gostaria de fazer um pedido na Pizza da Praça', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;