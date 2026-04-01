# 🛒 React Shop

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

> **Sobre:** Meu primeiro projeto feito com o intuito de aprender e me desenvolver na biblioteca React e seu ecossistema.

Um simulador de carrinho de compras (E-commerce) desenvolvido como Single Page Application (SPA). O foco prático deste repositório é a consolidação de fundamentos de arquitetura front-end, componentização e gestão de estado.

## ✨ Funcionalidades

- **Vitrine Dinâmica:** Renderização de produtos a partir de um mock de dados.
- **Gestão de Carrinho:** Adicionar itens, incrementar quantidades e remover produtos.
- **Cálculo em Tempo Real:** Subtotal e contagem de itens calculados dinamicamente (Estado Derivado).
- **Interface Responsiva:** Layout adaptável para dispositivos móveis e desktops.
- **Micro-interações:** Feedbacks visuais em botões e modais para melhorar a Experiência do Usuário (UX).

## 🧠 Arquitetura e Conceitos Aplicados

Durante o desenvolvimento deste projeto, foram aplicados os seguintes conceitos de Engenharia de Software:

- **Componentização:** Divisão da UI em blocos reutilizáveis (`Header`, `ProductItem`, `Cart`), respeitando o Princípio da Responsabilidade Única (SOLID).
- **Lifting State Up (Elevação de Estado):** Centralização do estado (`useState`) no componente pai (`App.jsx`) para manter uma "Única Fonte de Verdade".
- **Imutabilidade:** Manipulação de arrays utilizando métodos funcionais puros do JavaScript (`.map()`, `.filter()`, `.reduce()`) para evitar _side-effects_.
- **Renderização Condicional:** Uso de _Short-Circuit Evaluation_ (`&&`) e operadores ternários para exibir o modal do carrinho.
- **Utility-First CSS:** Estilização componentizada e responsiva utilizando **Tailwind CSS**.

## 🚀 Como executar o projeto localmente

Pré-requisitos: Node.js instalado na máquina.

1. Clone o repositório:

   ```bash
   git clone [https://github.com/MatheusFrancisconi/react-shop.git](https://github.com/MatheusFrancisconi/react-shop.git)

   ```

2. Entre na pasta do projeto:

   ```bash
   cd react-shop

   ```

3. Instale as dependências:

   ```bash
   npm install

   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5.Acesse http://localhost:5173 no seu navegador
