import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ezcicpxn',
  dataset: 'production',
  apiVersion: '2025-07-25',
  token: 'skCF73jldfB9nEgbHXuUSq7Si6EDJhnwQJLZX2Lw2vu7wob9bkm3KmbYAKtMgRshpGPwAi9A7fu2Et3AjjzDIG0oMPVneWgAJqneVCpWyULelbX6Hn1qTi4MOFKWgRbjjkBILm01Zq3nMZjGLLO0ff5uEfiDHlD7wYVTCYRLPyVASdoLU4b7',
  useCdn: false
})

async function testServicesData() {
  try {
    console.log('🔍 Testando dados da seção Services...')
    
    const servicesData = await client.fetch('*[_type == "services" && isActive][0]')
    
    if (servicesData) {
      console.log('✅ Dados da seção Services encontrados:')
      console.log('📝 Título da Seção:', servicesData.title)
      console.log('📝 Subtítulo:', servicesData.subtitle)
      console.log('📝 Ativo:', servicesData.isActive)
      console.log('📝 Ordem:', servicesData.order)
      console.log('📝 ID:', servicesData._id)
      console.log('')
      console.log('📊 Lista de Serviços:')
      
      servicesData.servicesList.forEach((service, index) => {
        console.log(`  ${index + 1}. ${service.title}`)
        console.log(`     Subtítulo: ${service.subtitle}`)
        console.log(`     Ícone: ${service.icon}`)
        console.log(`     CTA: ${service.cta}`)
        console.log(`     Ativo: ${service.isActive}`)
        console.log('')
      })
      
      console.log(`🎯 Total de serviços: ${servicesData.servicesList.length}`)
    } else {
      console.log('❌ Nenhum dado da seção Services encontrado')
    }
  } catch (error) {
    console.error('❌ Erro ao buscar dados da seção Services:', error)
  }
}

testServicesData() 