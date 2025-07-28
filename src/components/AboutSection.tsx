import { Button } from "@/components/ui/button";
import woodOven from "@/assets/wood-oven.jpg";

const AboutSection = () => {
  const openAboutPage = () => {
    // For now, just scroll to contact or show more info
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="section-beige py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-soft">
              <img 
                src={woodOven} 
                alt="Forno a lenha da Pizza da Praça"
                className="w-full h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Uma Tradição de <span className="text-pizza-red">Família</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A Pizza da Praça é mais que uma pizzaria, é o sonho de uma família 
              apaixonada por comida boa. Desde nossa fundação, utilizamos apenas 
              ingredientes frescos e selecionados, combinados com técnicas 
              artesanais tradicionais.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nosso forno a lenha e a massa de fermentação natural de 48 horas 
              garantem o sabor único que nossos clientes adoram. Conheça nossa 
              história e o carinho que colocamos em cada pizza.
            </p>

            <Button 
              className="btn-pizza-outline hover:btn-pizza"
              onClick={openAboutPage}
            >
              Nossa História Completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;