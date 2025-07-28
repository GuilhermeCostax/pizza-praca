import { useState, useEffect } from 'react';
import { useScrollPosition } from './use-scroll-position';

/**
 * Hook para detectar qual seção está ativa na viewport
 * Segue o princípio DIP - depende da abstração useScrollPosition
 */
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const scrollY = useScrollPosition();

  useEffect(() => {
    const sections = [
      { id: 'inicio', element: document.getElementById('inicio') },
      { id: 'cardapio', element: document.getElementById('cardapio') },
      { id: 'sobre', element: document.getElementById('sobre') },
      { id: 'contato', element: document.getElementById('contato') }
    ];

    // Filtrar apenas seções que existem
    const validSections = sections.filter(section => section.element);

    if (validSections.length === 0) return;

    // Encontrar a seção ativa baseada na posição do scroll
    let currentActiveSection = validSections[0].id;

    for (const section of validSections) {
      if (section.element) {
        const rect = section.element.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionHeight = rect.height;
        const sectionCenter = sectionTop + sectionHeight / 2;

        // Se o centro da viewport está dentro da seção
        const viewportCenter = scrollY + window.innerHeight / 2;
        
        if (viewportCenter >= sectionTop && viewportCenter <= sectionTop + sectionHeight) {
          currentActiveSection = section.id;
          break;
        }
      }
    }

    setActiveSection(currentActiveSection);
  }, [scrollY]);

  return activeSection;
};

export default useActiveSection;