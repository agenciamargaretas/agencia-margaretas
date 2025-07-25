import { sanityFetch, queries } from '../lib/sanity.ts'

async function testPageData() {
  try {
    console.log('🔍 Testando dados da página...')
    
    // Testar se a query do Hero está funcionando
    const heroData = await sanityFetch(queries.hero)
    
    if (heroData) {
      console.log('✅ Dados do Hero carregados da página:')
      console.log('📝 Título:', heroData.title)
      console.log('📝 Subtítulo:', heroData.subtitle)
      console.log('📝 CTA Text:', heroData.ctaText)
      console.log('📝 CTA Link:', heroData.ctaLink)
    } else {
      console.log('❌ Nenhum dado do Hero encontrado na página')
    }
    
  } catch (error) {
    console.error('❌ Erro ao buscar dados da página:', error)
  }
}

testPageData() 