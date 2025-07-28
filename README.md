# 🍕 Pizza da Praça

Site institucional moderno e responsivo para a pizzaria "Pizza da Praça" localizada em Matozinhos. Uma aplicação React desenvolvida com as melhores práticas de desenvolvimento frontend.

## 👨‍💻 Desenvolvedor

**Guilherme Costa** - Desenvolvedor Full Stack

Projeto desenvolvido com foco em performance, responsividade e experiência do usuário.

## 🚀 Sobre o Projeto

O Pizza da Praça é um site institucional que apresenta uma pizzaria artesanal, destacando seus sabores especiais, história e facilitando o contato direto com os clientes através do WhatsApp. O projeto foi desenvolvido com foco em:

- **Performance** - Carregamento rápido e otimizado
- **Responsividade** - Experiência perfeita em todos os dispositivos
- **Acessibilidade** - Interface inclusiva para todos os usuários
- **UX/UI Moderna** - Design atrativo e intuitivo

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

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base do shadcn/ui
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── HeroSection.tsx # Seção principal
│   ├── MenuSection.tsx # Cardápio de pizzas
│   └── ...
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks
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
