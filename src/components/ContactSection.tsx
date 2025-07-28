import { MapPin, Clock, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { MapComponent } from "./MapComponent";

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-background dark:bg-gray-800" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground dark:text-gray-100 mb-4">
            Entre em <span className="text-pizza-red dark:text-red-400">Contato</span> Conosco
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Tem alguma dúvida, sugestão ou quer fazer um pedido? Estamos aqui para ajudar!
          </p>
        </div>

        {/* Formulário de Contato */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <ContactForm />
        </div>

        {/* Seção de Localização e Informações */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4">
            Venha nos <span className="text-pizza-red dark:text-red-400">Visitar</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-delay="200">
            <div role="region" aria-label="Mapa de localização da Pizza da Praça">
              <MapComponent
                latitude={-19.5833}
                longitude={-44.0833}
                zoom={15}
                height="320px"
                markerTitle="Pizza da Praça"
                popupContent="Pizza da Praça - Matozinhos, MG"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-8" data-aos="fade-left" data-aos-delay="300">
            <div className="card-pizza dark:bg-gray-700">
              <div className="flex items-start gap-4">
                <div className="bg-pizza-red/10 dark:bg-red-400/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-pizza-red dark:text-red-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground dark:text-gray-100 mb-2">Endereço</h3>
                  <address className="text-muted-foreground dark:text-gray-300 not-italic">
                    Praça Bom Jesus, 123 - Centro<br />
                    Matozinhos - MG
                  </address>
                </div>
              </div>
            </div>

            <div className="card-pizza dark:bg-gray-700">
              <div className="flex items-start gap-4">
                <div className="bg-pizza-green/10 dark:bg-green-400/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-pizza-green dark:text-green-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground dark:text-gray-100 mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground dark:text-gray-300">
                    Quarta a Domingo<br />
                    das 18h às 23h
                  </p>
                </div>
              </div>
            </div>

            <div className="card-pizza dark:bg-gray-700">
              <div className="flex items-start gap-4">
                <div className="bg-pizza-red/10 dark:bg-red-400/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-pizza-red dark:text-red-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground dark:text-gray-100 mb-2">Telefone para Pedidos</h3>
                  <a 
                    href="tel:+5531999999999" 
                    className="text-pizza-red dark:text-red-400 hover:text-pizza-red/80 dark:hover:text-red-300 transition-colors font-semibold"
                    aria-label="Ligar para (31) 99999-9999"
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