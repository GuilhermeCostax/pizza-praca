import { MapPin, Clock, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { MapComponent } from "./MapComponent";

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-background" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Entre em <span className="text-pizza-red">Contato</span> Conosco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem alguma dúvida, sugestão ou quer fazer um pedido? Estamos aqui para ajudar!
          </p>
        </div>

        {/* Formulário de Contato */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <ContactForm />
        </div>

        {/* Seção de Localização e Informações */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Venha nos <span className="text-pizza-red">Visitar</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-delay="200">
            <MapComponent
              latitude={-19.5833}
              longitude={-44.0833}
              zoom={15}
              height="320px"
              markerTitle="Pizza da Praça"
              popupContent="Pizza da Praça - Matozinhos, MG"
            />
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-8" data-aos="fade-left" data-aos-delay="300">
            <div className="card-pizza">
              <div className="flex items-start gap-4">
                <div className="bg-pizza-red/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-pizza-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Praça Bom Jesus, 123 - Centro<br />
                    Matozinhos - MG
                  </p>
                </div>
              </div>
            </div>

            <div className="card-pizza">
              <div className="flex items-start gap-4">
                <div className="bg-pizza-green/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-pizza-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Quarta a Domingo<br />
                    das 18h às 23h
                  </p>
                </div>
              </div>
            </div>

            <div className="card-pizza">
              <div className="flex items-start gap-4">
                <div className="bg-pizza-red/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-pizza-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Telefone para Pedidos</h3>
                  <a 
                    href="tel:+5531999999999" 
                    className="text-pizza-red hover:text-pizza-red/80 transition-colors font-semibold"
                  >
                    (31) 99999-9999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;