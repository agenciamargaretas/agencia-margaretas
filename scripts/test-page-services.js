import { sanityFetch, queries } from '../lib/sanity.ts'

async function testPageServicesData() {
  try {
    console.log('🔍 Testando dados da seção Services na página...')
    
    const servicesData = await sanityFetch(queries.services)
    
    if (servicesData) {
      console.log('✅ Dados da seção Services carregados da página:')
      console.log('📝 Título da Seção:', servicesData.title)
      console.log('📝 Subtítulo:', servicesData.subtitle)
      console.log('📝 Ativo:', servicesData.isActive)
      console.log('📝 Ordem:', servicesData.order)
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
      console.log('❌ Nenhum dado da seção Services encontrado na página')
    }
  } catch (error) {
    console.error('❌ Erro ao buscar dados da seção Services na página:', error)
  }
}

testPageServicesData() 