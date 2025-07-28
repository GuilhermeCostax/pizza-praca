'use client';

import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { ActionButton } from '@/components/ui/ActionButton';

export const ContactForm: React.FC = () => {

  // Dados da pizzaria (substitua pelos dados reais)
  const pizzariaData = {
    telefone: '+5511999999999',
    whatsapp: '+5511999999999',
    endereco: 'Rua das Pizzas, 123 - São Paulo, SP',
    coordenadas: '-23.5505,-46.6333', // São Paulo
  };

  const whatsappUrl = `https://wa.me/${pizzariaData.whatsapp.replace(/[^0-9]/g, '')}?text=Olá! Gostaria de fazer um pedido.`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${pizzariaData.coordenadas}`;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Contato Direto</h3>
      <p className="text-gray-600 mb-6">Prefere falar conosco diretamente? Use uma das opções abaixo:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ActionButton
          href={`tel:${pizzariaData.telefone}`}
          icon={Phone}
          variant="outline"
          className="w-full"
        >
          Ligar Agora
        </ActionButton>
        
        <ActionButton
          href={whatsappUrl}
          icon={MessageCircle}
          variant="primary"
          className="w-full bg-green-600 hover:bg-green-700 focus:ring-green-600"
        >
          WhatsApp
        </ActionButton>
        
        <ActionButton
          href={mapsUrl}
          icon={MapPin}
          variant="secondary"
          className="w-full"
        >
          Ver Localização
        </ActionButton>
      </div>
    </div>
  );
};