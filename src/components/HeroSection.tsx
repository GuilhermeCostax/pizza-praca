import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { QualityIndicator } from "@/components/ui/quality-indicator";
import { useLazyImage } from "@/hooks/use-lazy-image";
import heroPizza from "@/assets/hero-pizza.jpg";
import { Flame, Leaf, Clock, Award } from "lucide-react";

const HeroSection = () => {
  const scrollToCardapio = () => {
    const element = document.getElementById('cardapio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { imageSrc, isLoaded, isLoading, imageRef } = useLazyImage({
    src: heroPizza,
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PC9zdmc+',
    threshold: 0.1,
    rootMargin: '100px'
  });

  const qualityIndicators = [
    { icon: Flame, text: "Forno a Lenha" },
    { icon: Leaf, text: "Ingredientes Frescos" },
    { icon: Clock, text: "Entrega Rápida" },
    { icon: Award, text: "Receita Artesanal" }
  ];

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={imageRef}
    >
      {/* Background Image with Lazy Loading */}
      <div className="absolute inset-0">
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-pizza-dark to-pizza-red animate-pulse" />
        )}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Quality Indicators */}
        <AnimatedText 
          delay={200}
          animationType="fadeInDown"
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
             {qualityIndicators.map((indicator, index) => (
               <QualityIndicator
                 key={indicator.text}
                 icon={indicator.icon}
                 text={indicator.text}
                 className="transform hover:scale-105 transition-transform duration-200"
               />
             ))}
           </div>
        </AnimatedText>

        {/* Main Title */}
        <AnimatedText 
          as="h1"
          delay={400}
          animationType="fadeInUp"
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
        >
          A Pizza Artesanal mais Saborosa de{" "}
          <span className="text-pizza-red">Matozinhos</span>
        </AnimatedText>
        
        {/* Description */}
        <AnimatedText 
          as="p"
          delay={600}
          animationType="fadeInUp"
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Massa de fermentação natural, ingredientes frescos e entrega rápida. 
          Peça a sua!
        </AnimatedText>

        {/* CTA Button */}
        <AnimatedText 
          delay={800}
          animationType="fadeInUp"
        >
          <Button 
            size="lg"
            className="btn-pizza text-lg px-8 py-4 h-auto transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={scrollToCardapio}
          >
            VER CARDÁPIO E FAZER PEDIDO
          </Button>
        </AnimatedText>
      </div>

      {/* Scroll Indicator */}
      <AnimatedText 
        delay={1000}
        animationType="fadeIn"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:border-pizza-red transition-colors duration-300">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </AnimatedText>
    </section>
  );
};

export default HeroSection;