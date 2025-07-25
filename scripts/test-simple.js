import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ezcicpxn',
  dataset: 'production',
  apiVersion: '2025-07-25',
  token: 'skCF73jldfB9nEgbHXuUSq7Si6EDJhnwQJLZX2Lw2vu7wob9bkm3KmbYAKtMgRshpGPwAi9A7fu2Et3AjjzDIG0oMPVneWgAJqneVCpWyULelbX6Hn1qTi4MOFKWgRbjjkBILm01Zq3nMZjGLLO0ff5uEfiDHlD7wYVTCYRLPyVASdoLU4b7',
  useCdn: false
})

async function testSimple() {
  try {
    console.log('🔍 Testando query simples...')
    
    // Testar query do Hero
    const heroData = await client.fetch('*[_type == "hero" && isActive][0]')
    console.log('✅ Hero encontrado:', heroData ? 'SIM' : 'NÃO')
    
    // Testar query do Services
    const servicesData = await client.fetch('*[_type == "services" && isActive][0]')
    console.log('✅ Services encontrado:', servicesData ? 'SIM' : 'NÃO')
    
    if (servicesData) {
      console.log('📊 Número de serviços:', servicesData.servicesList?.length || 0)
      console.log('📝 Título da seção:', servicesData.title)
    }
    
  } catch (error) {
    console.error('❌ Erro:', error.message)
  }
}

testSimple() 