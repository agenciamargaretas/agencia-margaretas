# 🚀 Guia Completo de Deployment - Agência Margaretas

## 📋 Visão Geral

Este guia te ajudará a colocar o site da Agência Margaretas no ar na Vercel e configurar um sistema de gerenciamento de conteúdo (CMS) para editar textos sem mexer no código.

---

## 🎯 FASE 1: Deploy na Vercel (Imediato)

### 1.1 Deploy Automático via Git

```bash
# 1. Commit das alterações
git add .
git commit -m "Deploy inicial - Agência Margaretas"
git push origin main

# 2. A Vercel fará deploy automático
# Verifique em: https://vercel.com/dashboard
```

### 1.2 Deploy Manual (se necessário)

```bash
# Usando o script automatizado
chmod +x scripts/deploy.sh
./scripts/deploy.sh

# Ou manualmente
vercel --prod
```

### 1.3 Configurações na Vercel

1. **Acesse**: https://vercel.com/dashboard
2. **Selecione** o projeto `agencia-margaretas`
3. **Configure**:
   - Domínio personalizado (se tiver)
   - Variáveis de ambiente
   - Build settings (já configurado para Next.js 15.1.5)

---

## 🎯 FASE 2: Sistema de Gerenciamento de Conteúdo (CMS)

### 2.1 Setup do Strapi CMS

```bash
# 1. Criar projeto Strapi
npx create-strapi-app@latest margaretas-cms --quickstart

# 2. Acessar painel admin
# http://localhost:1337/admin

# 3. Criar conta de administrador
# 4. Configurar tipos de conteúdo
```

### 2.2 Tipos de Conteúdo a Configurar

#### Hero Section
- `title` (Text)
- `subtitle` (Text)
- `ctaText` (Text)
- `ctaLink` (Text)
- `backgroundImage` (Media)

#### Services
- `title` (Text)
- `description` (Rich Text)
- `icon` (Text)
- `features` (JSON)

#### Portfolio
- `title` (Text)
- `description` (Rich Text)
- `image` (Media)
- `category` (Text)
- `client` (Text)
- `results` (JSON)

#### Testimonials
- `name` (Text)
- `role` (Text)
- `company` (Text)
- `content` (Rich Text)
- `avatar` (Media)
- `rating` (Number)

### 2.3 Deploy do Strapi

#### Opção A: Railway (Recomendado)
1. Conectar repositório GitHub
2. Configurar variáveis de ambiente
3. Deploy automático

#### Opção B: Vercel + PostgreSQL
1. Criar banco PostgreSQL na Vercel
2. Configurar variáveis de ambiente
3. Deploy com banco de dados

---

## 🎯 FASE 3: Integração CMS + Next.js

### 3.1 Configurar Variáveis de Ambiente

```bash
# .env.local
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-url.railway.app
STRAPI_API_TOKEN=your_api_token_here
REVALIDATION_TOKEN=your_secret_token
```

### 3.2 Estrutura de Arquivos Criada

```
├── lib/cms.ts              # Cliente CMS
├── hooks/useContent.ts     # Hooks para dados
├── components/sections/    # Componentes atualizados
└── env.example            # Exemplo de variáveis
```

### 3.3 Como Usar o CMS

1. **Acessar painel admin**: `https://your-strapi-url.railway.app/admin`
2. **Editar conteúdo**: Navegar pelas seções
3. **Publicar**: Conteúdo atualizado automaticamente
4. **Revalidar**: Cache invalidado em 1 minuto

---

## 🎯 FASE 4: Workflow de Atualização

### 4.1 Para Editar Textos

1. **Acesse** o painel admin do Strapi
2. **Navegue** para a seção desejada
3. **Edite** o conteúdo visualmente
4. **Salve** as alterações
5. **Site atualizado** automaticamente

### 4.2 Para Adicionar Novos Conteúdos

1. **Crie** novo item no CMS
2. **Configure** todos os campos
3. **Publique** o conteúdo
4. **Verifique** no site

---

## 🎯 FASE 5: Otimizações e Monitoramento

### 5.1 Performance

- ✅ Cache configurado (1 minuto)
- ✅ ISR (Incremental Static Regeneration)
- ✅ Fallback data para offline
- ✅ Loading states

### 5.2 SEO

- ✅ Meta tags dinâmicas
- ✅ Open Graph
- ✅ Structured data
- ✅ Sitemap automático

### 5.3 Analytics

```bash
# Adicionar Google Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# Adicionar Facebook Pixel
NEXT_PUBLIC_FACEBOOK_PIXEL=your_pixel_id
```

---

## 🚨 Troubleshooting

### Problema: CMS não carrega
**Solução**: Verificar variáveis de ambiente e URL do Strapi

### Problema: Deploy falha
**Solução**: Verificar logs na Vercel e dependências

### Problema: Conteúdo não atualiza
**Solução**: Verificar cache e revalidação

---

## 📞 Suporte

- **Documentação**: https://docs.strapi.io
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs

---

## 🎉 Próximos Passos

1. ✅ **Deploy na Vercel** (Fase 1)
2. 🔄 **Setup Strapi CMS** (Fase 2)
3. 🔄 **Integração** (Fase 3)
4. 🔄 **Migração de conteúdo** (Fase 4)
5. 🔄 **Otimizações** (Fase 5)

---

## 💡 Dicas Importantes

- **Backup**: Sempre faça backup antes de grandes mudanças
- **Teste**: Teste em ambiente de desenvolvimento primeiro
- **Monitoramento**: Configure alertas de performance
- **Segurança**: Mantenha tokens seguros e atualizados

---

**🎯 Resultado Final**: Site no ar + CMS funcional para edição de conteúdo sem código! 