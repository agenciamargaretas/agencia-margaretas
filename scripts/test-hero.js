import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ezcicpxn',
  dataset: 'production',
  apiVersion: '2025-07-25',
  token: 'skCF73jldfB9nEgbHXuUSq7Si6EDJhnwQJLZX2Lw2vu7wob9bkm3KmbYAKtMgRshpGPwAi9A7fu2Et3AjjzDIG0oMPVneWgAJqneVCpWyULelbX6Hn1qTi4MOFKWgRbjjkBILm01Zq3nMZjGLLO0ff5uEfiDHlD7wYVTCYRLPyVASdoLU4b7',
  useCdn: false
})

async function testHeroData() {
  try {
    console.log('🔍 Testando dados do Hero...')
    
    const heroData = await client.fetch('*[_type == "hero" && isActive][0]')
    
    if (heroData) {
      console.log('✅ Dados do Hero encontrados:')
      console.log('📝 Título:', heroData.title)
      console.log('📝 Subtítulo:', heroData.subtitle)
      console.log('📝 CTA Text:', heroData.ctaText)
      console.log('📝 CTA Link:', heroData.ctaLink)
      console.log('📝 Ativo:', heroData.isActive)
      console.log('📝 Ordem:', heroData.order)
      console.log('📝 ID:', heroData._id)
    } else {
      console.log('❌ Nenhum dado do Hero encontrado')
    }
    
  } catch (error) {
    console.error('❌ Erro ao buscar dados do Hero:', error)
  }
}

testHeroData() 