import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ezcicpxn',
  dataset: 'production',
  apiVersion: '2025-07-25',
  token: 'skCF73jldfB9nEgbHXuUSq7Si6EDJhnwQJLZX2Lw2vu7wob9bkm3KmbYAKtMgRshpGPwAi9A7fu2Et3AjjzDIG0oMPVneWgAJqneVCpWyULelbX6Hn1qTi4MOFKWgRbjjkBILm01Zq3nMZjGLLO0ff5uEfiDHlD7wYVTCYRLPyVASdoLU4b7',
  useCdn: false
})

// Dados originais dos serviços
const servicesListRaw = [
  {
    title: "Branding",
    subtitle: "Marca não é só cores e aparência, é direção.",
    description: "Na Margaretas, a construção da marca nasce de dentro pra fora: nome, identidade visual, tom de voz, arquétipos, essência, genética, posicionamento. Tudo pensado para que a sua comunicação tenha alma, coerência e reconhecimento real.",
    highlight: "Branding com visão, método e verdade.",
    cta: "Quero construir minha marca",
    icon: "EyeIcon",
    isActive: true,
    order: 0
  },
  {
    title: "Gestão de Redes Sociais – Pacotes Personalizados",
    subtitle: "Criamos conteúdo com propósito, copy inteligente e estética estratégica alinhada a sua persona, arquétipos e o seu branding, para canais como Instagram, TikTok, Google Meu Negócio, Pinterest e outros.",
    description: "Cada rede com sua função. Cada publicação com um porquê.",
    highlight: "Conteúdo com propósito. Resultado com estratégia.",
    cta: "Quero pacote de redes sociais",
    icon: "UserGroupIcon",
    isActive: true,
    order: 1
  },
  {
    title: "Criação de Sites",
    subtitle: "Seu site precisa representar quem sua marca e conectar com todos os outros canais com clareza, confiança e técnicas UX de alta conversão.",
    description: "Desenvolvemos páginas institucionais, landings e sites completos com design funcional, copy estratégica e arquitetura intuitiva.",
    highlight: "Um site com cara de marca grande — mesmo que você ainda esteja crescendo.",
    cta: "Quero um site estratégico",
    icon: "GlobeAltIcon",
    isActive: true,
    order: 2
  },
  {
    title: "Performance e Tráfego Pago",
    subtitle: "Você não precisa aparecer mais. Precisa aparecer melhor.",
    description: "Planejamos e gerenciamos campanhas em Meta Ads, Google, TikTok, Pinterest com estratégia conectada à sua comunicação e ao seu momento de negócio.",
    highlight: "Tráfego com direção. Performance com propósito.",
    cta: "Quero escalar com tráfego",
    icon: "RocketLaunchIcon",
    isActive: true,
    order: 3
  },
  {
    title: "Consultoria de Marketing",
    subtitle: "Às vezes, o que falta não é produção, é clareza.",
    description: "Nossas consultorias são pensadas para ajustar o que está fora de lugar e revelar caminhos possíveis. Você traz as dúvidas, a gente entrega estrutura, estratégia e decisão.",
    highlight: "Inteligência estratégica sob demanda.",
    cta: "Quero uma consultoria com a Margaretas",
    icon: "LightBulbIcon",
    isActive: true,
    order: 4
  },
  {
    title: "Soluções Personalizadas (para estruturas diferentes)",
    subtitle: "Cada empresa tem uma configuração interna, algumas sem time, outras com equipe enxuta ou com estrutura robusta.",
    description: "Independente do seu cenário, a Margaretas entra para alinhar, conectar e liderar a comunicação do jeito que o seu negócio precisa.",
    highlight: "Soluções que se adaptam ao seu cenário.",
    cta: "Quero uma solução feita pra minha empresa",
    icon: "CogIcon",
    isActive: true,
    order: 5
  }
]

// Adiciona uma _key única para cada serviço
const servicesWithKeys = servicesListRaw.map((service) => ({
  ...service,
  _key: service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50) // Gera uma chave a partir do título
}))

// Monta o documento final para o Sanity
const servicesData = {
  _type: 'services',
  title: 'Nossas Soluções',
  subtitle: 'Soluções completas para transformar sua marca',
  servicesList: servicesWithKeys,
  isActive: true,
  order: 2
}

async function seedServices() {
  try {
    console.log('🌱 Iniciando seed da seção Services com chaves únicas...')
    
    const existingServices = await client.fetch('*[_type == "services"][0]')
    
    if (existingServices) {
      console.log('📝 Atualizando documento Services existente com as chaves corretas...')
      await client.patch(existingServices._id).set({
        // Usamos set para substituir a lista inteira
        servicesList: servicesData.servicesList
      }).commit()
      console.log('✅ Services atualizado com sucesso!')
    } else {
      console.log('🆕 Criando novo documento Services com as chaves corretas...')
      await client.create(servicesData)
      console.log('✅ Services criado com sucesso!')
    }
    
    console.log('🎉 Seed da seção Services concluído!')
    
  } catch (error) {
    console.error('❌ Erro ao fazer seed da seção Services:', error)
  }
}

seedServices() 