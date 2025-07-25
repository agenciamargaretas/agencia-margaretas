import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ezcicpxn',
  dataset: 'production',
  apiVersion: '2025-07-25',
  token: 'skCF73jldfB9nEgbHXuUSq7Si6EDJhnwQJLZX2Lw2vu7wob9bkm3KmbYAKtMgRshpGPwAi9A7fu2Et3AjjzDIG0oMPVneWgAJqneVCpWyULelbX6Hn1qTi4MOFKWgRbjjkBILm01Zq3nMZjGLLO0ff5uEfiDHlD7wYVTCYRLPyVASdoLU4b7',
  useCdn: false
})

const fallbackServices = [
    {
      id: 0,
      title: "Branding",
      subtitle: "Marca não é só cores e aparência, é direção.",
      description: "Na Margaretas, a construção da marca nasce de dentro pra fora: nome, identidade visual, tom de voz, arquétipos, essência, genética, posicionamento. Tudo pensado para que a sua comunicação tenha alma, coerência e reconhecimento real.",
      highlight: "Branding com visão, método e verdade.",
      cta: "Quero construir minha marca",
      icon: "EyeIcon",
    },
    {
      id: 1,
      title: "Gestão de Redes Sociais – Pacotes Personalizados",
      subtitle: "Criamos conteúdo com propósito, copy inteligente e estética estratégica alinhada a sua persona, arquétipos e o seu branding, para canais como Instagram, TikTok, Google Meu Negócio, Pinterest e outros.",
      description: "Cada rede com sua função. Cada publicação com um porquê.",
      highlight: "Conteúdo com propósito. Resultado com estratégia.",
      cta: "Quero pacote de redes sociais",
      icon: "UserGroupIcon",
    },
    {
      id: 2,
      title: "Criação de Sites",
      subtitle: "Seu site precisa representar quem sua marca e conectar com todos os outros canais com clareza, confiança e técnicas UX de alta conversão.",
      description: "Desenvolvemos páginas institucionais, landings e sites completos com design funcional, copy estratégica e arquitetura intuitiva.",
      highlight: "Um site com cara de marca grande — mesmo que você ainda esteja crescendo.",
      cta: "Quero um site estratégico",
      icon: "GlobeAltIcon",
    },
    {
      id: 3,
      title: "Performance e Tráfego Pago",
      subtitle: "Você não precisa aparecer mais. Precisa aparecer melhor.",
      description: "Planejamos e gerenciamos campanhas em Meta Ads, Google, TikTok, Pinterest com estratégia conectada à sua comunicação e ao seu momento de negócio.",
      highlight: "Tráfego com direção. Performance com propósito.",
      cta: "Quero escalar com tráfego",
      icon: "RocketLaunchIcon",
    },
    {
      id: 4,
      title: "Consultoria de Marketing",
      subtitle: "Às vezes, o que falta não é produção, é clareza.",
      description: "Nossas consultorias são pensadas para ajustar o que está fora de lugar e revelar caminhos possíveis. Você traz as dúvidas, a gente entrega estrutura, estratégia e decisão.",
      highlight: "Inteligência estratégica sob demanda.",
      cta: "Quero uma consultoria com a Margaretas",
      icon: "LightBulbIcon",
    },
    {
      id: 5,
      title: "Soluções Personalizadas (para estruturas diferentes)",
      subtitle: "Cada empresa tem uma configuração interna, algumas sem time, outras com equipe enxuta ou com estrutura robusta.",
      description: "Independente do seu cenário, a Margaretas entra para alinhar, conectar e liderar a comunicação do jeito que o seu negócio precisa.",
      highlight: "Soluções que se adaptam ao seu cenário.",
      cta: "Quero uma solução feita pra minha empresa",
      icon: "CogIcon",
    }
  ]

async function verifyServicesData() {
  console.log('🔍 Verificando integridade dos dados de Serviços...')
  try {
    const sanityData = await client.fetch(`*[_type == "services"][0]`)

    if (!sanityData) {
      console.error('❌ Nenhum dado de serviço encontrado no Sanity.')
      return
    }

    const sanityServices = sanityData.servicesList.sort((a, b) => a.id - b.id);

    let allMatch = true;

    if (sanityServices.length !== fallbackServices.length) {
      console.error(`❌ Divergência na quantidade de serviços. Sanity: ${sanityServices.length}, Original: ${fallbackServices.length}`);
      allMatch = false;
    }

    for (let i = 0; i < fallbackServices.length; i++) {
      const original = fallbackServices[i];
      const sanity = sanityServices[i];

      console.log(`\n--- Comparando Serviço #${original.id}: ${original.title} ---`);

      if (!sanity) {
        console.error(`❌ Serviço com id ${original.id} não encontrado no Sanity.`);
        allMatch = false;
        continue;
      }

      Object.keys(original).forEach(key => {
        if (original[key] !== sanity[key]) {
          console.log(`  - ❗ Divergência no campo "${key}":`);
          console.log(`    > Original: "${original[key]}"`);
          console.log(`    > Sanity:   "${sanity[key]}"`);
          allMatch = false;
        } else {
          console.log(`  - ✅ Campo "${key}" corresponde.`);
        }
      });
    }

    console.log('\n--- Resultado da Verificação ---');
    if (allMatch) {
      console.log('✅ Todos os dados da seção de serviços no Sanity correspondem perfeitamente aos dados originais do componente!');
    } else {
      console.error('❌ Foram encontradas divergências entre os dados do Sanity e os dados originais. Verifique os logs acima.');
    }

  } catch (error) {
    console.error('❌ Erro ao verificar os dados de serviços:', error);
  }
}

verifyServicesData() 