import { Button } from "@/components/ui/button";
import pizzaCalabresa from "@/assets/pizza-calabresa.jpg";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaFrango from "@/assets/pizza-frango.jpg";

const MenuSection = () => {
  const featuredPizzas = [
    {
      name: "Calabresa Artesanal",
      description: "Calabresa artesanal fatiada, cebola roxa e azeitonas pretas sobre nosso molho especial.",
      image: pizzaCalabresa
    },
    {
      name: "Frango com Catupiry",
      description: "Frango grelhado desfiado, catupiry cremoso, milho e temperos selecionados.",
      image: pizzaFrango
    },
    {
      name: "Margherita Tradicional",
      description: "Mozzarella de búfala, manjericão fresco, tomates cereja e azeite extravirgem.",
      image: pizzaMargherita
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/5531999999999?text=Olá! Gostaria de ver o cardápio completo da Pizza da Praça', '_blank');
  };

  return (
    <section id="cardapio" className="py-16 md:py-24 bg-background" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Nossos Sabores <span className="text-pizza-red">Mais Pedidos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
          {featuredPizzas.map((pizza, index) => (
            <div key={index} className="card-pizza group">
              {/* Pizza Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={pizza.image} 
                  alt={pizza.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Pizza Info */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {pizza.name}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {pizza.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <Button 
            size="lg"
            className="btn-pizza-outline hover:btn-pizza text-lg px-8 py-4 h-auto"
            onClick={openWhatsApp}
          >
            Ver todos os sabores
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;