# 🍕 Pizza da Praça

Site institucional moderno e responsivo para a pizzaria "Pizza da Praça" localizada em Matozinhos. Uma aplicação React desenvolvida com as melhores práticas de desenvolvimento frontend.

## 👨‍💻 Desenvolvedor

**Guilherme Costa** - Desenvolvedor Full Stack

Projeto desenvolvido com foco em performance, responsividade e experiência do usuário.

## 🚀 Sobre o Projeto

O Pizza da Praça é um site institucional que apresenta uma pizzaria artesanal, destacando seus sabores especiais, história e facilitando o contato direto com os clientes através do WhatsApp. O projeto foi desenvolvido com foco em:

- **Performance** - Carregamento rápido e otimizado
- **Responsividade** - Experiência perfeita em todos os dispositivos
- **Acessibilidade** - Interface inclusiva com ARIA labels e navegação por teclado
- **UX/UI Moderna** - Design atrativo e intuitivo
- **Tema Escuro/Claro** - Sistema de temas com preferência do usuário
- **Filtros Inteligentes** - Menu com filtros por categoria de pizzas
- **Loading States** - Skeleton loading para melhor experiência

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Roteamento para SPAs

### Estilização
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Sistema de componentes baseado em Radix UI
- **Lucide React** - Biblioteca de ícones
- **CSS Variables** - Sistema de cores customizado

### Bibliotecas Principais
- **TanStack React Query** - Gerenciamento de estado servidor
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Radix UI** - Componentes acessíveis
- **Sonner** - Sistema de notificações
- **AOS** - Animações on scroll

## ✨ Funcionalidades

### 🎨 Sistema de Temas
- **Modo Claro** (padrão) - Interface clara e moderna
- **Modo Escuro** - Experiência visual confortável em ambientes com pouca luz
- **Persistência** - Tema escolhido é salvo no localStorage
- **Alternância Rápida** - Botão de toggle no header

### 🍕 Menu Interativo
- **Filtros por Categoria** - Todas, Salgadas, Doces
- **Loading States** - Skeleton components durante carregamento
- **Cards Responsivos** - Layout adaptável para todos os dispositivos

### ♿ Acessibilidade
- **ARIA Labels** - Descrições para leitores de tela
- **Navegação por Teclado** - Suporte completo para navegação sem mouse
- **Alt Text** - Descrições em todas as imagens
- **Contraste** - Cores otimizadas para legibilidade

### 📱 Responsividade
- **Mobile First** - Design otimizado para dispositivos móveis
- **Breakpoints** - Layout adaptável para tablet e desktop
- **Touch Friendly** - Elementos com tamanho adequado para toque

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base do shadcn/ui
│   │   ├── ThemeToggle.tsx      # Alternador de tema
│   │   ├── PizzaCardSkeleton.tsx # Loading skeleton
│   │   ├── ActionButton.tsx     # Botão de ação
│   │   └── ...                  # Outros componentes UI
│   ├── Header.tsx      # Cabeçalho com navegação e tema
│   ├── HeroSection.tsx # Seção principal com animações
│   ├── MenuSection.tsx # Cardápio com filtros
│   ├── AboutSection.tsx # Seção sobre a pizzaria
│   ├── ContactSection.tsx # Formulário e informações
│   ├── TestimonialsSection.tsx # Depoimentos
│   ├── Footer.tsx      # Rodapé com links
│   └── WhatsAppButton.tsx # Botão flutuante WhatsApp
├── contexts/           # Contextos React
│   └── ThemeContext.tsx # Gerenciamento de tema
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página principal
│   └── NotFound.tsx    # Página 404
├── hooks/              # Custom hooks
│   ├── useTheme.ts     # Hook para tema
│   ├── use-scroll-position.ts # Posição do scroll
│   ├── use-active-section.ts  # Seção ativa
│   └── ...             # Outros hooks
├── lib/                # Utilitários e configurações
├── assets/             # Imagens e recursos estáticos
└── index.css          # Estilos globais e variáveis CSS
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório:**
```bash
git clone <URL_DO_REPOSITORIO>
cd pizza-praca
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o projeto em modo de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse a aplicação:**
   - Abra seu navegador em `http://localhost:8080`

### Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção
npm run lint         # Executa o linter
```
