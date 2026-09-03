# LinksFácil 🔗

> Gerenciador de links rápido e fácil, com suporte a PWA (Progressive Web App)

## 📋 Funcionalidades

- ✅ Adicionar, editar e deletar links
- ✅ Carregamento automático de favicon
- ✅ Armazenamento em localStorage (JSON)
- ✅ Interface responsiva e moderna
- ✅ PWA - Instale como aplicativo nativo
- ✅ Sem backend - 100% client-side
- ✅ Hospedado na Vercel

## 🚀 Deploy na Vercel

O projeto já está configurado para deploy automático na Vercel. A cada push no branch `main`, o aplicativo será automaticamente implantado.

### Passos para conectar à Vercel:

1. Acesse https://vercel.com
2. Clique em "New Project"
3. Selecione este repositório (linksfacil)
4. Clique em "Deploy"
5. Pronto! Seu site estará online em poucos segundos

## 💻 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/iacriariva/linksfacil.git
cd linksfacil

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:3000
```

### Build para Produção

```bash
# Compile o projeto
npm run build

# Inicie o servidor de produção
npm start
```

## 📁 Estrutura do Projeto

```
linksfácil/
├── public/                 # Arquivos estáticos (ícones, manifest)
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header.tsx
│   │   ├── LinkCard.tsx
│   │   ├── AddLinkModal.tsx
│   │   └── EditLinkModal.tsx
│   ├── pages/             # Páginas Next.js
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx      # Página principal
│   ├── store/             # Estado global (Zustand)
│   │   └── linksStore.ts
│   ├── lib/               # Funções utilitárias
│   │   └── urlUtils.ts
│   ├── types/             # Tipos TypeScript
│   │   └── index.ts
│   └── styles/            # Estilos CSS
│       └── globals.css
├── package.json
├── next.config.js         # Configuração Next.js com PWA
├── tailwind.config.js     # Configuração Tailwind CSS
└── tsconfig.json          # Configuração TypeScript
```

## 🔧 Tecnologias Utilizadas

- **Next.js 14** - Framework React com SSR
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilos utilitários
- **Zustand** - Gerenciamento de estado
- **next-pwa** - Suporte a Progressive Web App
- **Lucide React** - Ícones vetoriais
- **Axios** - Cliente HTTP (pronto para futuras integrações)

## 📱 PWA - Progressive Web App

Este aplicativo é um PWA completo, o que significa:

- 📲 Instale como aplicativo nativo (iOS, Android, Desktop)
- 🌐 Funciona offline
- ⚡ Carregamento rápido com cache inteligente
- 🔔 Suporte a notificações (próximas versões)

### Como instalar

**No navegador:**
1. Abra https://linksfacil.vercel.app
2. Clique no ícone de instalar no navegador (canto superior direito)
3. Confirme a instalação

**No dispositivo móvel:**
1. Abra o site no navegador
2. Toque no menu "Compartilhar" ou ""
3. Selecione "Adicionar à tela inicial" (Android) ou "Adicionar ao Dock" (iOS)

## 💾 Armazenamento

Os links são armazenados em **localStorage** como JSON.

- Não requer banco de dados
- Dados persistem localmente no navegador
- Fácil de sincronizar com um backend no futuro

## 🌐 Acesso ao App

**URL de Produção:**
https://linksfacil.vercel.app

**URL de Desenvolvimento:**
http://localhost:3000

## 📝 Uso

1. **Adicionar Link**
   - Clique no botão "+ Adicionar Link"
   - Insira o nome e URL
   - O favicon será carregado automaticamente
   - Clique em "Adicionar"

2. **Acessar Link**
   - Passe o mouse sobre o card do link
   - Clique no ícone de link externo

3. **Editar Link**
   - Passe o mouse sobre o card
   - Clique no ícone de editár
   - Atualize os dados
   - Clique em "Salvar"

4. **Deletar Link**
   - Passe o mouse sobre o card
   - Clique no ícone de lixeira
   - Confirme a exclusão

## 🔐 Segurança

- ✅ HTTPS por padrão na Vercel
- ✅ Sem armazenamento de dados sensíveis no servidor
- ✅ Dados armazenados apenas localmente
- ✅ Sem tracking ou analytics invasivos

## 📈 Próximas Features

- [ ] Sincronização na nuvem (conta de usuário)
- [ ] Compartilhamento de coleções de links
- [ ] Categorias e tags
- [ ] Busca e filtros avançados
- [ ] Tema escuro
- [ ] Ordenação personalizada (drag & drop)
- [ ] Integrações com outras plataformas

## 🤝 Contribuindo

Contóutas são bem-vindas! Abra uma issue ou pull request.

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes

## 📧 Contato

Dúvidas ou sugestões? Abra uma issue no GitHub!

---

**Feito com ❤️ por iacriariva**
