import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const activeSection = useActiveSection();
  
  // Determinar se o header deve ter fundo sólido
  const isScrolled = scrollY > 50;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-md" 
        : "bg-transparent border-b border-transparent"
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-2xl font-display font-bold text-pizza-red hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              Pizza da Praça
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className={cn(
                "transition-all duration-200 hover:scale-105 relative",
                activeSection === 'inicio' 
                  ? "text-pizza-red after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pizza-red" 
                  : "text-white hover:text-pizza-red"
              )}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('cardapio')}
              className={cn(
                "transition-all duration-200 hover:scale-105 relative",
                activeSection === 'cardapio' 
                  ? "text-pizza-red after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pizza-red" 
                  : "text-white hover:text-pizza-red"
              )}
            >
              Cardápio
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className={cn(
                "transition-all duration-200 hover:scale-105 relative",
                activeSection === 'sobre' 
                  ? "text-pizza-red after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pizza-red" 
                  : "text-white hover:text-pizza-red"
              )}
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className={cn(
                "transition-all duration-200 hover:scale-105 relative",
                activeSection === 'contato' 
                  ? "text-pizza-red after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pizza-red" 
                  : "text-white hover:text-pizza-red"
              )}
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="btn-pizza flex items-center gap-2 hover:scale-105 transition-transform duration-200"
              onClick={() => window.open('https://wa.me/5531999999999?text=Olá! Gostaria de fazer um pedido na Pizza da Praça', '_blank')}
            >
              <MessageCircle size={18} className="transition-transform duration-200 group-hover:scale-110" />
              Peça pelo WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-pizza-red transition-all duration-200 hover:scale-110"
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
                className={cn(
                  "text-left transition-all duration-200 hover:scale-105",
                  activeSection === 'inicio' 
                    ? "text-pizza-red font-semibold" 
                    : "text-foreground hover:text-pizza-red"
                )}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('cardapio')}
                className={cn(
                  "text-left transition-all duration-200 hover:scale-105",
                  activeSection === 'cardapio' 
                    ? "text-pizza-red font-semibold" 
                    : "text-foreground hover:text-pizza-red"
                )}
              >
                Cardápio
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className={cn(
                  "text-left transition-all duration-200 hover:scale-105",
                  activeSection === 'sobre' 
                    ? "text-pizza-red font-semibold" 
                    : "text-foreground hover:text-pizza-red"
                )}
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className={cn(
                  "text-left transition-all duration-200 hover:scale-105",
                  activeSection === 'contato' 
                    ? "text-pizza-red font-semibold" 
                    : "text-foreground hover:text-pizza-red"
                )}
              >
                Contato
              </button>
              <Button 
                className="btn-pizza flex items-center gap-2 w-full justify-center hover:scale-105 transition-transform duration-200"
                onClick={() => window.open('https://wa.me/5531999999999?text=Olá! Gostaria de fazer um pedido na Pizza da Praça', '_blank')}
              >
                <MessageCircle size={18} className="transition-transform duration-200 group-hover:scale-110" />
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