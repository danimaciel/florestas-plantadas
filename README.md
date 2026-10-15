# Florestas Plantadas · protótipo

Conhecimento da Embrapa sobre florestas plantadas, organizado para o **Centro de Referência da FAO em
Florestas Plantadas e Sistemas de Integração Lavoura-Pecuária-Floresta** (Embrapa Florestas), em português,
inglês e francês.

**Protótipo para discussão** com o grupo especial do Centro: a classificação é automática (análise semântica
SBERT/multilingual-e5 + classificador supervisionado + dicionário de espécies) e está em revisão por especialistas.

- Coleções: Eucalipto · Espécies nativas do Brasil · Espécies de interesse africano · Florestas plantadas em geral.
- Busca em qualquer idioma pelos conceitos da taxonomia; busca por significado opcional, no próprio navegador.
- "Meu país": documentos gerados em clima igual (Köppen-Geiger, Beck et al., 2018) e espécies já plantadas no
  país (Agroforestree Database, ICRAF).
- Definição de floresta plantada: FAO, FRA 2020/2025.

Dados: exportações públicas da Embrapa no Redape (publicações doi:10.48432/TRBT0S; soluções tecnológicas
doi:10.48432/ZQE5FV). Site estático gerado pelo pipeline do Observatório de Pesquisa da Embrapa; os dados ficam
em `data/*.js`. Sem dados pessoais.
