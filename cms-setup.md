# 🎯 CMS Setup - Agência Margaretas

## **OPÇÃO 1: Strapi CMS (Recomendado)**

### Por que Strapi?
- ✅ Open-source e gratuito
- ✅ Interface visual intuitiva
- ✅ API REST/GraphQL automática
- ✅ Deploy na Vercel/Railway
- ✅ Suporte a imagens e mídia
- ✅ Controle de usuários

### Setup do Strapi:

```bash
# 1. Criar projeto Strapi
npx create-strapi-app@latest margaretas-cms --quickstart

# 2. Configurar tipos de conteúdo
# - Hero Section
# - Services
# - Portfolio
# - Testimonials
# - About
# - Contact Info
```

### Estrutura de Conteúdo Sugerida:

```typescript
// Hero Section
interface HeroContent {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
}

// Services
interface Service {
  title: string
  description: string
  icon: string
  features: string[]
}

// Portfolio
interface PortfolioItem {
  title: string
  description: string
  image: string
  category: string
  client: string
  results: string[]
}
```

---

## **OPÇÃO 2: Sanity.io (Alternativa)**

### Vantagens:
- ✅ Deploy na Vercel
- ✅ Studio customizável
- ✅ Real-time collaboration
- ✅ Versionamento de conteúdo

### Setup:
```bash
npm install @sanity/client @sanity/image-url
npm install -g @sanity/cli
sanity init
```

---

## **OPÇÃO 3: Contentful (Enterprise)**

### Vantagens:
- ✅ Interface profissional
- ✅ CDN global
- ✅ Analytics avançados
- ✅ Workflow de aprovação

### Limitação:
- 💰 Plano pago para produção

---

## **INTEGRAÇÃO COM NEXT.JS**

### 1. Instalar dependências
```bash
pnpm add @strapi/client
# ou
pnpm add @sanity/client
```

### 2. Criar lib para API
```typescript
// lib/cms.ts
import { createClient } from '@strapi/client'

export const cmsClient = createClient({
  url: process.env.STRAPI_URL || 'http://localhost:1337',
  apiToken: process.env.STRAPI_TOKEN,
})
```

### 3. Criar hooks para dados
```typescript
// hooks/useContent.ts
import { useState, useEffect } from 'react'
import { cmsClient } from '@/lib/cms'

export function useHeroContent() {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await cmsClient.find('hero-section')
        setContent(response.data[0])
      } catch (error) {
        console.error('Erro ao carregar conteúdo:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  return { content, loading }
}
```

### 4. Atualizar componentes
```typescript
// components/sections/HeroSection.tsx
import { useHeroContent } from '@/hooks/useContent'

export default function HeroSection() {
  const { content, loading } = useHeroContent()

  if (loading) return <div>Carregando...</div>

  return (
    <section>
      <h1>{content?.title}</h1>
      <p>{content?.subtitle}</p>
      {/* ... resto do componente */}
    </section>
  )
}
```

---

## **DEPLOY DO CMS**

### Strapi na Railway:
1. Conectar repositório GitHub
2. Configurar variáveis de ambiente
3. Deploy automático

### Strapi na Vercel:
1. Usar Vercel Postgres
2. Configurar build settings
3. Deploy com banco de dados

---

## **WORKFLOW DE ATUALIZAÇÃO**

### 1. Acessar CMS
- Login no painel admin
- Navegar para seção desejada

### 2. Editar Conteúdo
- Modificar textos, imagens
- Preview em tempo real
- Salvar alterações

### 3. Publicar
- Conteúdo atualizado automaticamente
- Cache invalidado
- Site atualizado em segundos

---

## **PRÓXIMOS PASSOS**

1. **Escolher CMS** (Recomendo Strapi)
2. **Setup inicial** do CMS
3. **Configurar tipos de conteúdo**
4. **Integrar com Next.js**
5. **Migrar conteúdo atual**
6. **Deploy do CMS**
7. **Testar workflow**

---

## **CRONOGRAMA SUGERIDO**

- **Dia 1**: Setup Strapi + configuração inicial
- **Dia 2**: Integração com Next.js + migração de conteúdo
- **Dia 3**: Deploy do CMS + testes
- **Dia 4**: Treinamento da equipe + documentação

---

## **BENEFÍCIOS FINAIS**

✅ **Edição visual** sem código
✅ **Controle de versão** do conteúdo
✅ **Workflow de aprovação**
✅ **Performance otimizada**
✅ **SEO melhorado**
✅ **Manutenção simplificada** 