import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-pizza-dark dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold text-pizza-red dark:text-red-400 mb-4">
              Pizza da Praça
            </h3>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
              A pizza artesanal mais saborosa de Matozinhos. Tradição, 
              qualidade e sabor em cada fatia.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 dark:text-gray-400 hover:text-pizza-red dark:hover:text-red-400 transition-colors duration-200"
                  aria-label="Ir para seção Início"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cardapio')}
                  className="text-gray-300 dark:text-gray-400 hover:text-pizza-red dark:hover:text-red-400 transition-colors duration-200"
                  aria-label="Ir para seção Cardápio"
                >
                  Cardápio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 dark:text-gray-400 hover:text-pizza-red dark:hover:text-red-400 transition-colors duration-200"
                  aria-label="Ir para seção Sobre Nós"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 dark:text-gray-400 hover:text-pizza-red dark:hover:text-red-400 transition-colors duration-200"
                  aria-label="Ir para seção Contato"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-pizza-red dark:text-red-400 flex-shrink-0" aria-hidden="true" />
                <address className="text-gray-300 dark:text-gray-400 text-sm not-italic">
                  Praça Bom Jesus, 123 - Centro, Matozinhos - MG
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-pizza-red dark:text-red-400 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+5531999999999"
                  className="text-gray-300 dark:text-gray-400 hover:text-pizza-red dark:hover:text-red-400 transition-colors text-sm"
                  aria-label="Ligar para (31) 99999-9999"
                >
                  (31) 99999-9999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-pizza-red dark:text-red-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-300 dark:text-gray-400 text-sm">
                  Quarta a Domingo, 18h às 23h
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="#"
                className="bg-gray-700 dark:bg-gray-800 hover:bg-pizza-red dark:hover:bg-red-600 p-3 rounded-lg transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="bg-gray-700 dark:bg-gray-800 hover:bg-pizza-red dark:hover:bg-red-600 p-3 rounded-lg transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © 2025 Pizza da Praça - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;