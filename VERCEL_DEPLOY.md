## 🚀 Guia de Deploy na Vercel

### ✅ Pré-requisitos

- Conta GitHub com este repositório
- Conta Vercel (grátis em vercel.com)
- Repositório conectado ao GitHub

### 📋 Passos para Deploy

#### 1. Conectar Repositório

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione "GitHub" como origem
4. Procure por "linksfacil"
5. Clique em "Import"

#### 2. Configurar Projeto

- **Framework:** Next.js (detectado automaticamente)
- **Root Directory:** ./
- **Build Command:** npm run build
- **Output Directory:** .next
- **Install Command:** npm install

Essas configurações já estão definidas no `vercel.json`.

#### 3. Variáveis de Ambiente (Opcional)

Este projeto não requer variáveis de ambiente de produção, mas você pode adicionar:

- `NEXT_PUBLIC_APP_URL` - URL base do aplicativo

#### 4. Deploy

Clique em "Deploy" e aguarde. O deploy geralmente leva 1-2 minutos.

### 🌐 Acessar o Aplicativo

Após o deploy, você receberá uma URL similar a:
```
https://linksfacil.vercel.app
```

### 🔄 Deploy Automático

Cada vez que você fazer push no branch `main`, o Vercel automaticamente:
1. Detecta as mudanças
2. Executa o build
3. Faz o deploy
4. Fornece uma URL única para revisar as alterações (Preview Deployment)

### 📊 Monitorar Deploy

1. Acesse seu dashboard na Vercel
2. Clique em "Deployments"
3. Veja o status de cada deploy
4. Clique em qualquer deploy para ver logs detalhados

### 🐛 Troubleshooting

**Build falha com erro de dependência:**
```bash
# Localmente, tente:
npm ci
npm run build
```

**Página em branco após deploy:**
- Verifique os logs no dashboard da Vercel
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Teste em uma aba anônima/privada

**PWA não funciona:**
- Certifique-se de usar HTTPS (Vercel fornece automaticamente)
- Verifique o manifest.json está acessível
- Teste com: `curl https://seu-url.vercel.app/manifest.json`

### 🎨 Domínio Customizado

1. No dashboard da Vercel, vá para "Settings"
2. Clique em "Domains"
3. Adicione seu domínio
4. Configure os DNS records conforme instruído

### 📱 Testar PWA

1. Abra o app em seu navegador (deve ser HTTPS)
2. Clique no ícone de instalar (canto da barra de endereço)
3. Clique em "Instalar"
4. O app aparecerá na sua tela inicial

---

**Pronto! Seu LinksFácil está ao vivo! 🎉**
