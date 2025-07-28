import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import PizzaCardSkeleton from "@/components/ui/PizzaCardSkeleton";
import pizzaCalabresa from "@/assets/pizza-calabresa.jpg";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaFrango from "@/assets/pizza-frango.jpg";

type FilterType = 'todas' | 'salgadas' | 'doces';

interface Pizza {
  name: string;
  description: string;
  image: string;
  category: 'salgadas' | 'doces';
}

const MenuSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('todas');
  const [isLoading, setIsLoading] = useState(true);
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  const allPizzas: Pizza[] = [
    {
      name: "Calabresa Artesanal",
      description: "Calabresa artesanal fatiada, cebola roxa e azeitonas pretas sobre nosso molho especial.",
      image: pizzaCalabresa,
      category: 'salgadas'
    },
    {
      name: "Frango com Catupiry",
      description: "Frango grelhado desfiado, catupiry cremoso, milho e temperos selecionados.",
      image: pizzaFrango,
      category: 'salgadas'
    },
    {
      name: "Margherita Tradicional",
      description: "Mozzarella de búfala, manjericão fresco, tomates cereja e azeite extravirgem.",
      image: pizzaMargherita,
      category: 'salgadas'
    },
    {
      name: "Chocolate com Morango",
      description: "Chocolate cremoso, morangos frescos e chantilly sobre massa doce especial.",
      image: pizzaMargherita, // Usando a mesma imagem como placeholder
      category: 'doces'
    },
    {
      name: "Banana com Canela",
      description: "Banana caramelizada, canela em pó e açúcar cristal sobre massa doce.",
      image: pizzaFrango, // Usando a mesma imagem como placeholder
      category: 'doces'
    }
  ];

  // Simular carregamento de dados
  useEffect(() => {
    const loadPizzas = async () => {
      setIsLoading(true);
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1500));
      setPizzas(allPizzas);
      setIsLoading(false);
    };

    loadPizzas();
  }, []);

  // Filtrar pizzas baseado no filtro ativo
  const filteredPizzas = activeFilter === 'todas' 
    ? pizzas 
    : pizzas.filter(pizza => pizza.category === activeFilter);

  const filters = [
    { key: 'todas' as FilterType, label: 'Todas' },
    { key: 'salgadas' as FilterType, label: 'Salgadas' },
    { key: 'doces' as FilterType, label: 'Doces' }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/5531999999999?text=Olá! Gostaria de ver o cardápio completo da Pizza da Praça', '_blank');
  };

  return (
    <section id="cardapio" className="py-16 md:py-24 bg-background dark:bg-gray-900" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground dark:text-gray-100 mb-4">
            Nossos Sabores <span className="text-pizza-red dark:text-red-400">Mais Pedidos</span>
          </h2>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="150">
          <div className="flex flex-wrap gap-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-pizza-red dark:bg-red-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                aria-label={`Filtrar por pizzas ${filter.label.toLowerCase()}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
          {isLoading ? (
            // Skeleton Loading
            Array.from({ length: 6 }).map((_, index) => (
              <PizzaCardSkeleton key={index} />
            ))
          ) : (
            // Pizzas carregadas
            filteredPizzas.map((pizza, index) => (
              <div key={`${pizza.name}-${index}`} className="card-pizza dark:bg-gray-800 group">
                {/* Pizza Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={pizza.image} 
                    alt={`Pizza ${pizza.name} - ${pizza.description}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Pizza Info */}
                <h3 className="text-xl font-display font-semibold text-foreground dark:text-gray-100 mb-3">
                  {pizza.name}
                </h3>
                
                <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                  {pizza.description}
                </p>
              </div>
            ))
          )}
        </div>

        {/* CTA Button */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <Button 
            size="lg"
            className="btn-pizza-outline hover:btn-pizza text-lg px-8 py-4 h-auto"
            onClick={openWhatsApp}
            aria-label="Ver cardápio completo no WhatsApp"
          >
            Ver todos os sabores
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;