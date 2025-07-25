import type {StructureBuilder} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Agência Margaretas')
    .items([
      S.documentTypeListItem('hero').title('Seção Hero'),
      S.documentTypeListItem('services').title('Seção de Serviços'),
      S.documentTypeListItem('testimonials').title('Seção de Depoimentos'),
      S.documentTypeListItem('portfolio').title('Seção de Portfolio'),
      S.documentTypeListItem('about').title('Seção Sobre'),
      S.documentTypeListItem('contact').title('Seção de Contato'),
      S.documentTypeListItem('clients').title('Seção de Clientes'),
      S.documentTypeListItem('agencyValue').title('Seção de Valores'),
      S.documentTypeListItem('targetAudience').title('Seção Público-Alvo'),
      S.documentTypeListItem('challenges').title('Seção de Desafios'),
      S.documentTypeListItem('methodEye').title('Seção MethodEYE'),
      S.documentTypeListItem('diagnostic').title('Seção de Diagnóstico'),
    ]) 