import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Função utilitária para fetch tipado
export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  return client.fetch<T>(query, params)
}

// Exemplos de queries GROQ para as seções
export const queries = {
  // Buscar seção Hero
  hero: `*[_type == "hero" && isActive][0]`,
  
  // Buscar seção de Serviços
  services: `*[_type == "services" && isActive][0]`,
  
  // Buscar seção de Depoimentos
  testimonials: `*[_type == "testimonials" && isActive][0]`,
  
  // Buscar seção de Portfolio
  portfolio: `*[_type == "portfolio" && isActive][0]`,
  
  // Buscar seção Sobre
  about: `*[_type == "about" && isActive][0]`,
  
  // Buscar seção de Contato
  contact: `*[_type == "contact" && isActive][0]`,
  
  // Buscar seção de Clientes
  clients: `*[_type == "clients" && isActive][0]`,
  
  // Buscar seção de Valores da Agência
  agencyValue: `*[_type == "agencyValue" && isActive][0]`,
  
  // Buscar seção de Público-Alvo
  targetAudience: `*[_type == "targetAudience" && isActive][0]`,
  
  // Buscar seção de Desafios
  challenges: `*[_type == "challenges" && isActive][0]`,
  
  // Buscar seção MethodEYE
  methodEye: `*[_type == "methodEye" && isActive][0]`,
  
  // Buscar seção de Diagnóstico
  diagnostic: `*[_type == "diagnostic" && isActive][0]`,
}
