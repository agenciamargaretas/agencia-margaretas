import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ezcicpxn',
  dataset: 'production',
  apiVersion: '2025-07-25',
  token: 'skCF73jldfB9nEgbHXuUSq7Si6EDJhnwQJLZX2Lw2vu7wob9bkm3KmbYAKtMgRshpGPwAi9A7fu2Et3AjjzDIG0oMPVneWgAJqneVCpWyULelbX6Hn1qTi4MOFKWgRbjjkBILm01Zq3nMZjGLLO0ff5uEfiDHlD7wYVTCYRLPyVASdoLU4b7',
  useCdn: false
})

const heroData = {
  _type: 'hero',
  title: "Você ainda precisa ser o cérebro do seu próprio marketing?",
  subtitle: "Transformamos marcas com comunicação integrada e coesa — sem você carregar tudo nas costas.",
  ctaText: "Fale conosco",
  ctaLink: "#contato",
  isActive: true,
  order: 1
}

async function seedHero() {
  try {
    console.log('🌱 Iniciando seed da seção Hero...')
    
    // Verificar se já existe um documento hero
    const existingHero = await client.fetch('*[_type == "hero"][0]')
    
    if (existingHero) {
      console.log('📝 Atualizando documento Hero existente...')
      await client
        .patch(existingHero._id)
        .set(heroData)
        .commit()
      console.log('✅ Hero atualizado com sucesso!')
    } else {
      console.log('🆕 Criando novo documento Hero...')
      await client.create(heroData)
      console.log('✅ Hero criado com sucesso!')
    }
    
    console.log('🎉 Seed da seção Hero concluído!')
  } catch (error) {
    console.error('❌ Erro ao fazer seed da seção Hero:', error)
  }
}

seedHero() 