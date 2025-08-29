# Projeto Povo Frontend

Landing page responsiva para exibir informações sobre os cursos da UANE, desenvolvida com React, TypeScript e Chakra UI.

## 🚀 Tecnologias Utilizadas

- **React 19.1.1** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Chakra UI 2.10.9** - Biblioteca de componentes React com design system consistente
- **Vite** - Build tool moderna e rápida
- **Axios** - Cliente HTTP para requisições à API
- **React Icons** - Biblioteca de ícones
- **Framer Motion 11.0.0** - Biblioteca de animações

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd Projeto-Povo-Frontend
```

2. Instale as dependências:

```bash
npm install
```

> **Nota**: Se encontrar conflitos de dependências, o projeto já está configurado com versões compatíveis. Em caso de problemas, você pode usar:
>
> ```bash
> npm install --legacy-peer-deps
> ```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Banner principal
│   ├── CourseCard.tsx  # Card de curso individual
│   ├── CourseList.tsx  # Lista de cursos
│   └── Footer.tsx      # Rodapé
├── services/           # Serviços e APIs
│   └── api.ts         # Configuração do Axios e serviços
├── types/             # Definições de tipos TypeScript
│   └── Course.ts      # Interface do curso
├── App.tsx            # Componente principal
└── main.tsx           # Ponto de entrada da aplicação
```

## 🎨 Funcionalidades

### ✅ Implementadas

- **Header Responsivo**: Menu de navegação fixo com links para diferentes seções
- **Hero Section**: Banner principal com informações do curso "Secretaria Escolar"
- **Listagem de Cursos**: Exibição dinâmica dos cursos vindos da API
- **Cards de Cursos**: Componentes visuais para cada curso com informações detalhadas
- **Footer**: Rodapé com informações de contato e redes sociais
- **Design Responsivo**: Adaptação para desktop, tablet e mobile
- **Integração com API**: Consumo da API PHP do backend

### 🎯 Características Técnicas

- **Componentização**: Estrutura modular com componentes reutilizáveis
- **TypeScript**: Tipagem estática para maior segurança e produtividade
- **Chakra UI**: Design system consistente e acessível
- **Framer Motion**: Animações suaves e interativas
- **Responsividade**: Layout adaptativo para diferentes dispositivos
- **Performance**: Otimizações com Vite e lazy loading
- **Acessibilidade**: Componentes acessíveis seguindo padrões WCAG

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 🌐 Integração com Backend

O frontend consome a API PHP localizada em:

```
http://localhost/Projeto-Povo/Projeto-Povo/Projeto-Povo-Backend
```

### Endpoints Utilizados

- `GET /index.php?action=getCourses` - Lista todos os cursos
- `GET /index.php?action=getCourse&id={id}` - Busca curso específico

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta aos seguintes breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

Utilizamos o Chakra UI com tema customizado:

- **Cores**: Paleta baseada em azuis e verdes
- **Tipografia**: Fonte Inter para melhor legibilidade
- **Espaçamento**: Sistema de espaçamento consistente
- **Componentes**: Biblioteca rica de componentes acessíveis

## 🚀 Deploy

Para fazer o deploy:

1. Execute o build de produção:

```bash
npm run build
```

2. Os arquivos estarão na pasta `dist/`

3. Faça o upload dos arquivos para seu servidor web

## 🔧 Troubleshooting

### Problemas Comuns

**Erro de conflito de dependências:**

```bash
npm ERR! ERESOLVE could not resolve
```

**Solução:** O projeto já está configurado com versões compatíveis. Use:

```bash
npm install --legacy-peer-deps
```

**Erro de versão do Node.js:**
Certifique-se de estar usando Node.js versão 18 ou superior:

```bash
node --version
```

**Problemas com TypeScript:**
Se houver erros de TypeScript, reinstale as dependências:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 Licença

Este projeto foi desenvolvido como teste prático para o Grupo de Comunicação O POVO.

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ usando React 19, TypeScript, Chakra UI e Framer Motion.
