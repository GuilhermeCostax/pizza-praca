import { MapPin, Clock, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-background" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Venha nos <span className="text-pizza-red">Visitar</span> ou Peça em Casa
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-delay="200">
            <div className="relative overflow-hidden rounded-2xl shadow-soft h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.234567890123!2d-44.1234567!3d-19.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMatozinhos%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Pizza da Praça em Matozinhos"
              ></iframe>
            </div>
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