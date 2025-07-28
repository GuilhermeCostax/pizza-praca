import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "A melhor borda recheada da cidade! Simplesmente perfeita.",
      author: "Ana L.",
      location: "Bairro da Graça"
    },
    {
      text: "Entrega super rápida e a pizza chegou quentinha. Viramos clientes!",
      author: "Marcos P.",
      location: "Centro"
    },
    {
      text: "Ingredientes de primeira qualidade, dá pra sentir no sabor. Recomendo!",
      author: "Família Santos",
      location: "Bom Jesus"
    }
  ];

  return (
    <section className="section-beige py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Quem prova, <span className="text-pizza-red">aprova!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-pizza text-center">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground/80 mb-6 text-lg leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <cite className="text-foreground font-semibold not-italic">
                {testimonial.author}
              </cite>
              <p className="text-muted-foreground text-sm mt-1">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;