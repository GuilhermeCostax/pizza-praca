import { Button } from "@/components/ui/button";
import heroPizza from "@/assets/hero-pizza.jpg";

const HeroSection = () => {
  const scrollToCardapio = () => {
    const element = document.getElementById('cardapio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPizza})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
          A Pizza Artesanal mais Saborosa de{" "}
          <span className="text-pizza-red">Matozinhos</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Massa de fermentação natural, ingredientes frescos e entrega rápida. 
          Peça a sua!
        </p>

        <Button 
          size="lg"
          className="btn-pizza text-lg px-8 py-4 h-auto"
          onClick={scrollToCardapio}
        >
          VER CARDÁPIO E FAZER PEDIDO
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;