# 🎯 Setup do Sanity CMS - Agência Margaretas

## **Por que Sanity.io?**

✅ **Compatível com Node.js 22** (ao contrário do Strapi)
✅ **Deploy na Vercel** integrado
✅ **Studio customizável**
✅ **Real-time collaboration**
✅ **Versionamento de conteúdo**
✅ **API GraphQL/REST**
✅ **CDN global**

---

## **🚀 PASSO A PASSO - Setup do Sanity**

### **1. Criar Projeto Sanity**

```bash
# Em uma nova pasta (fora do projeto atual)
mkdir margaretas-cms
cd margaretas-cms

# Inicializar projeto Sanity
sanity init
```

**Opções recomendadas:**
- **Project name**: `margaretas-cms`
- **Use the default dataset configuration?**: `Yes`
- **Project output path**: `./`
- **Select project template**: `Clean project with no predefined schemas`

### **2. Configurar Schemas de Conteúdo**

Crie os seguintes arquivos em `schemas/`:

#### **Hero Schema** (`schemas/hero.ts`)
```typescript
export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'ctaText',
      title: 'Texto do Botão',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'ctaLink',
      title: 'Link do Botão',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'backgroundImage',
      title: 'Imagem de Fundo',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
```

#### **Services Schema** (`schemas/service.ts`)
```typescript
export default {
  name: 'service',
  title: 'Serviços',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'icon',
      title: 'Ícone',
      type: 'string'
    },
    {
      name: 'features',
      title: 'Recursos',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
```

#### **Portfolio Schema** (`schemas/portfolio.ts`)
```typescript
export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string'
    },
    {
      name: 'client',
      title: 'Cliente',
      type: 'string'
    },
    {
      name: 'results',
      title: 'Resultados',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
```

#### **Testimonials Schema** (`schemas/testimonial.ts`)
```typescript
export default {
  name: 'testimonial',
  title: 'Depoimentos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'role',
      title: 'Cargo',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Empresa',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Depoimento',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'avatar',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'rating',
      title: 'Avaliação',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5)
    }
  ]
}
```

### **3. Registrar Schemas**

Atualize `schemas/index.ts`:
```typescript
import hero from './hero'
import service from './service'
import portfolio from './portfolio'
import testimonial from './testimonial'

export const schemaTypes = [hero, service, portfolio, testimonial]
```

### **4. Iniciar Studio Local**

```bash
sanity dev
```

Acesse: `http://localhost:3333`

### **5. Configurar Variáveis de Ambiente**

No projeto Next.js, crie `.env.local`:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=seu_api_token
```

### **6. Deploy do Studio**

```bash
sanity deploy
```

---

## **🎯 WORKFLOW DE USO**

### **Para Editar Conteúdo:**

1. **Acesse**: `https://seu-projeto.sanity.studio`
2. **Faça login** com sua conta
3. **Navegue** pelas seções (Hero, Services, etc.)
4. **Edite** o conteúdo visualmente
5. **Publique** as alterações
6. **Site atualizado** automaticamente!

### **Para Adicionar Novos Conteúdos:**

1. **Crie** novo documento no Sanity
2. **Preencha** todos os campos
3. **Publique** o conteúdo
4. **Verifique** no site

---

## **🔧 CONFIGURAÇÕES AVANÇADAS**

### **CORS Settings**
No Sanity Studio, configure CORS para permitir acesso do seu domínio:
- **Project Settings** → **API** → **CORS Origins**
- Adicione: `https://seu-dominio.vercel.app`

### **API Token**
Para escrita (opcional):
- **Project Settings** → **API** → **Tokens**
- Crie token com permissões de escrita

### **Webhooks**
Para revalidação automática:
- **Project Settings** → **API** → **Webhooks**
- URL: `https://seu-dominio.vercel.app/api/revalidate`

---

## **📱 BENEFÍCIOS FINAIS**

✅ **Edição visual** sem código
✅ **Real-time collaboration**
✅ **Versionamento** de conteúdo
✅ **Performance otimizada**
✅ **CDN global**
✅ **API GraphQL/REST**
✅ **Studio customizável**
✅ **Deploy na Vercel**

---

## **🚨 TROUBLESHOOTING**

### **Problema: Studio não carrega**
**Solução**: Verificar se o projeto foi criado corretamente

### **Problema: API não responde**
**Solução**: Verificar CORS settings e Project ID

### **Problema: Imagens não carregam**
**Solução**: Verificar configuração do imageUrlBuilder

---

**🎯 Resultado**: CMS moderno e poderoso para editar conteúdo sem mexer no código! 