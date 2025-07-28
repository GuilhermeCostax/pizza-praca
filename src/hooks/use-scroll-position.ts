import { useState, useEffect } from 'react';

/**
 * Hook customizado para monitorar a posição do scroll da página
 * Segue o princípio SRP - responsabilidade única de gerenciar scroll
 */
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Adicionar listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};

export default useScrollPosition;