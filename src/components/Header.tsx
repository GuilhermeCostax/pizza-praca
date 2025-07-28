import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-display font-bold text-pizza-red">
              Pizza da Praça
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-pizza-red transition-colors duration-200"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('cardapio')}
              className="text-foreground hover:text-pizza-red transition-colors duration-200"
            >
              Cardápio
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-pizza-red transition-colors duration-200"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-pizza-red transition-colors duration-200"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="btn-pizza flex items-center gap-2"
              onClick={() => window.open('https://wa.me/5531999999999?text=Olá! Gostaria de fazer um pedido na Pizza da Praça', '_blank')}
            >
              <MessageCircle size={18} />
              Peça pelo WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-pizza-red transition-colors duration-200"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('cardapio')}
                className="text-left text-foreground hover:text-pizza-red transition-colors duration-200"
              >
                Cardápio
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-pizza-red transition-colors duration-200"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-pizza-red transition-colors duration-200"
              >
                Contato
              </button>
              <Button 
                className="btn-pizza flex items-center gap-2 w-full justify-center"
                onClick={() => window.open('https://wa.me/5531999999999?text=Olá! Gostaria de fazer um pedido na Pizza da Praça', '_blank')}
              >
                <MessageCircle size={18} />
                Peça pelo WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;