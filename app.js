/* Florestas Plantadas — protótipo de consulta (sem servidor, sem bibliotecas externas).
   Dados gerados pelo pipeline R (pipeline/R/site.R): data/docs.js, similares.js,
   taxonomia.js, meta.js (definem window.FP). */
(function () {
  "use strict";

  // ---------------------------------------------------------------- textos (pt/en/fr)
  const T = {
    pt: {
      marca: "Florestas Plantadas", marca_sub: "Conhecimento da Embrapa", prototipo: "Protótipo", inicio: "Início",
      carregando: "Carregando o acervo…",
      titulo: "O que a Embrapa sabe sobre florestas plantadas",
      intro: "Publicações e soluções tecnológicas da Embrapa sobre eucalipto, espécies nativas e outras árvores plantadas, organizadas para técnicos, gestores e produtores de outros países.",
      capa_selo: "Centro de Referência da FAO em Florestas Plantadas e Sistemas ILPF · Embrapa Florestas",
      n_docs: "publicações e soluções tecnológicas", n_col: "coleções por espécie", n_lin: "linhas temáticas do Centro",
      n_paises: "países africanos com correspondência de clima",
      comecar: "Por onde começar",
      ent: { busca: ["Pergunte do seu jeito", "Em português, inglês ou francês: a busca entende os conceitos e encontra trabalhos escritos em português."],
             col: ["Explore as coleções", "Eucalipto, espécies nativas do Brasil, espécies de interesse africano e florestas plantadas em geral."],
             pais: ["Escolha o seu país", "Conhecimento gerado no Brasil em clima igual ao do seu país, e sobre espécies que já são plantadas aí."] },
      linhas_tit: "As linhas temáticas do Centro",
      linhas_nota: "Um documento pode estar em mais de uma linha. A ligação entre os temas técnicos e as linhas é uma proposta em validação.",
      como_tit: "Como este acervo foi feito",
      como: [["Definição oficial", "Floresta plantada segundo a FAO (FRA 2020/2025), mais os sistemas de integração lavoura-pecuária-floresta, que fazem parte do escopo do Centro."],
             ["Análise semântica", "As publicações e soluções da Embrapa foram lidas por um modelo de linguagem multilíngue (SBERT) e classificadas a partir de exemplos rotulados."],
             ["Revisão de especialistas", "A classificação está sendo conferida pelo grupo especial do Centro. Até lá, este ambiente é um protótipo para discussão."]],
      buscar_ph: "Ex.: mudas de eucalipto, adubação de teca, restauração no semiárido",
      buscar: "Buscar", exemplos: "Experimente:",
      ex: ["produção de mudas de eucalipto", "pine seedlings nursery", "mogno-africano", "restauração da Caatinga", "carvão vegetal"],
      colecoes: "Coleções", clima: "Encontre conhecimento gerado em clima parecido com o seu",
      col: {
        E: ["Eucalipto", "Clones, melhoramento, mudas, manejo, pragas e uso da madeira de eucalipto."],
        N: ["Espécies nativas do Brasil", "Silvicultura de nativas: seringueira, erva-mate, araucária, paricá, castanheira e outras."],
        A: ["Espécies de interesse africano", "Pínus e outras exóticas plantadas na África ou dela originárias: acácias, teca, mogno-africano, nim…"],
        G: ["Florestas plantadas em geral", "Restauração, planejamento, mercado e documentos sem uma espécie dominante."]
      },
      docs: "documentos", nucleo: "no núcleo",
      ctx: {
        "CTX.AF": ["Tropical úmido", "Ex.: Bacia do Congo, Golfo da Guiné, São Tomé e Príncipe"],
        "CTX.AW": ["Tropical com estação seca (savana)", "Ex.: Angola, Moçambique, Guiné-Bissau, Zâmbia (Miombo)"],
        "CTX.BS": ["Semiárido", "Ex.: Sahel, Cabo Verde, sul de Angola e de Moçambique"],
        "CTX.CF": ["Subtropical e de altitude", "Ex.: planaltos de Angola, Etiópia, Quênia, África do Sul"]
      },
      ctx_nota: "Correspondências climáticas indicativas, a validar.",
      pais_titulo: "Meu país: conhecimento gerado em clima igual ou semelhante ao seu",
      pais_escolha: "Escolha o país", pais_ir: "Ver", lusofonos: "Países de língua portuguesa", outros_paises: "Outros países africanos",
      pais_climas: "Climas do território (Köppen-Geiger)", pais_igual: "Clima igual", pais_semelhante: "Clima semelhante (mesma zona)",
      pais_nota: "Correspondência calculada: o documento aparece quando o clima de onde ele foi gerado no Brasil ocupa pelo menos 10% do território do país (mapa de Beck et al., 2018). Clima “semelhante” = mesma zona climática, classe diferente.",
      clima_kg: "Clima de origem (Köppen)", kg_texto: "local citado", kg_sede: "sede da unidade",
      ctx_paises: "Na África:", ctx_fonte: "Países onde a zona ocupa ≥ 30% do território, segundo o mapa de Köppen-Geiger de Beck et al. (2018).",
      f_kg: "Clima (Köppen)",
      pais_incluir_sem: "Incluir clima semelhante",
      sem_botao: "Buscar por significado (IA)",
      sem_aviso: "Usa o modelo de linguagem multilingual-e5 no seu navegador. Na primeira vez baixa cerca de 120 MB (fica guardado). Recomendado em wi-fi.",
      sem_ativa: "Busca por significado ativada",
      sem_desativar: "voltar à busca por conceitos",
      sem_carregando: "Preparando a busca por significado…",
      sem_baixando: "Baixando o modelo de linguagem",
      sem_erro: "Não foi possível carregar o modelo. A busca por conceitos continua disponível.",
      sem_metodo: "Ordenado por proximidade de significado (SBERT, multilingual-e5)",
      pais_esp: "Espécies da Embrapa já plantadas neste país (Agroforestree Database, ICRAF)",
      pais_so_esp: "Só documentos sobre espécies presentes no país",
      esp_presente: "🌳 Espécie presente no país",
      pais_sem_esp: "Nenhuma espécie com ficha na Agroforestree",
      pais_sem_igual: "Nenhum documento da Embrapa foi gerado em clima igual ao predominante neste país (o Brasil não tem essa classe). Mostrando os de clima semelhante.",
      voltar: "← Voltar", resultados_busca: "Resultados para", interpretado: "Entendido como:",
      filtros: "Filtros", mostrar_filtros: "Filtrar resultados",
      f_linha: "Linha do Centro", f_tipo: "Tipo de conhecimento", f_tema: "Tema técnico", f_esp: "Espécie", f_clima: "Zona climática", f_nivel: "Abrangência",
      f_regiao: "Onde no Brasil (região)", f_uf: "Onde no Brasil (estado)",
      rg: { N: "Norte", NE: "Nordeste", CO: "Centro-Oeste", SE: "Sudeste", S: "Sul" },
      ter_texto: "Local citado no texto", ter_sede: "Sede da unidade (aproximação)",
      k: { sol: "Solução tecnológica", ori: "Orientação técnica", cie: "Científico" },
      lv: { n: "Núcleo (floresta plantada e ILPF)", c: "Complementar" },
      sem_esp: "Várias espécies / geral",
      contagem: (n) => `${n.toLocaleString("pt-BR")} documentos`,
      mais: "Mostrar mais", vazio: "Nenhum documento encontrado. Tente outras palavras ou remova filtros.",
      abrir: "Abrir na Embrapa ↗", semelhantes: "Semelhantes", ocultar: "Ocultar",
      comp_int: "Sistema integrado — o componente florestal é tratado em parte",
      comp: "Complementar — trata de florestas plantadas em parte",
      invasora: "Atenção: algumas espécies deste grupo (ex.: Prosopis juliflora, Acacia mearnsii) são invasoras em partes da África. Consulte a regulamentação local.",
      origem_af: "Espécie de origem africana",
      auto: "classificação automática", revisado: "revisado na amostra",
      rodape_metodo: "<b>Como este acervo foi montado.</b> Publicações e soluções tecnológicas da Embrapa foram selecionadas e classificadas por análise semântica (SBERT, modelo multilingual-e5) combinada com um classificador supervisionado e um dicionário de espécies. A definição de floresta plantada segue a FAO (FRA 2020/2025); o escopo e as linhas temáticas seguem o Centro de Referência, que inclui a integração lavoura-pecuária-floresta (ILPF).",
      rodape_aviso: "Protótipo para discussão do Centro de Referência da FAO em Florestas Plantadas e Sistemas ILPF (Embrapa Florestas). A classificação é automática e está em revisão por especialistas; títulos e resumos aparecem no idioma original.",
      meta: (m) => `Acervo: ${m.n_docs.toLocaleString("pt-BR")} documentos · atualizado em ${m.gerado}`
    },
    en: {
      marca: "Planted Forests", marca_sub: "Embrapa knowledge", prototipo: "Prototype", inicio: "Home",
      carregando: "Loading the collection…",
      titulo: "What Embrapa knows about planted forests",
      intro: "Embrapa publications and technological solutions on eucalyptus, native species and other planted trees, organised for technicians, managers and growers in other countries.",
      capa_selo: "FAO Reference Centre for Planted Forests and Integrated Crop-Livestock-Forestry Systems · Embrapa Forestry",
      n_docs: "publications and technological solutions", n_col: "collections by species", n_lin: "thematic lines of the Centre",
      n_paises: "African countries matched by climate",
      comecar: "Where to start",
      ent: { busca: ["Ask in your own words", "In Portuguese, English or French: the search understands concepts and finds work written in Portuguese."],
             col: ["Browse the collections", "Eucalyptus, Brazilian native species, species of interest to Africa and planted forests in general."],
             pais: ["Choose your country", "Knowledge generated in Brazil under the same climate as your country, and on species already planted there."] },
      linhas_tit: "The Centre's thematic lines",
      linhas_nota: "A document may belong to more than one line. The link between technical topics and lines is a proposal under review.",
      como_tit: "How this collection was built",
      como: [["Official definition", "Planted forest as defined by FAO (FRA 2020/2025), plus integrated crop-livestock-forestry systems, which are part of the Centre's scope."],
             ["Semantic analysis", "Embrapa publications and solutions were read by a multilingual language model (SBERT) and classified from labelled examples."],
             ["Expert review", "The classification is being checked by the Centre's expert group. Until then, this site is a prototype for discussion."]],
      buscar_ph: "E.g.: eucalyptus seedlings, teak fertilization, restoration in drylands",
      buscar: "Search", exemplos: "Try:",
      ex: ["eucalyptus seedling production", "pine seedlings nursery", "african mahogany", "dryland restoration", "charcoal"],
      colecoes: "Collections", clima: "Find knowledge generated in a climate similar to yours",
      col: {
        E: ["Eucalyptus", "Clones, breeding, seedlings, management, pests and wood use of eucalyptus."],
        N: ["Brazilian native species", "Silviculture of native species: rubber tree, yerba mate, Paraná pine, paricá, Brazil nut and others."],
        A: ["Species of African interest", "Pine and other exotics planted in or native to Africa: acacias, teak, African mahogany, neem…"],
        G: ["Planted forests in general", "Restoration, planning, markets and documents without a dominant species."]
      },
      docs: "documents", nucleo: "in the core",
      ctx: {
        "CTX.AF": ["Humid tropical", "E.g.: Congo Basin, Gulf of Guinea, São Tomé and Príncipe"],
        "CTX.AW": ["Tropical with a dry season (savanna)", "E.g.: Angola, Mozambique, Guinea-Bissau, Zambia (Miombo)"],
        "CTX.BS": ["Semi-arid", "E.g.: Sahel, Cabo Verde, southern Angola and Mozambique"],
        "CTX.CF": ["Subtropical and highland", "E.g.: Angolan highlands, Ethiopia, Kenya, South Africa"]
      },
      ctx_nota: "Indicative climate correspondences, to be validated.",
      pais_titulo: "My country: knowledge generated in the same or a similar climate",
      pais_escolha: "Choose a country", pais_ir: "Show", lusofonos: "Portuguese-speaking countries", outros_paises: "Other African countries",
      pais_climas: "Climates of the territory (Köppen-Geiger)", pais_igual: "Same climate", pais_semelhante: "Similar climate (same zone)",
      pais_nota: "Calculated match: a document appears when the climate where it was generated in Brazil covers at least 10% of the country's territory (map by Beck et al., 2018). “Similar” = same climate zone, different class.",
      clima_kg: "Climate of origin (Köppen)", kg_texto: "place cited", kg_sede: "Embrapa unit location",
      ctx_paises: "In Africa:", ctx_fonte: "Countries where the zone covers ≥ 30% of the territory, from the Köppen-Geiger map by Beck et al. (2018).",
      f_kg: "Climate (Köppen)",
      pais_incluir_sem: "Include similar climate",
      sem_botao: "Search by meaning (AI)",
      sem_aviso: "Runs the multilingual-e5 language model in your browser. The first time it downloads about 120 MB (then cached). Wi-fi recommended.",
      sem_ativa: "Search by meaning is on",
      sem_desativar: "back to concept search",
      sem_carregando: "Preparing search by meaning…",
      sem_baixando: "Downloading the language model",
      sem_erro: "The model could not be loaded. Concept search is still available.",
      sem_metodo: "Ranked by closeness of meaning (SBERT, multilingual-e5)",
      pais_esp: "Embrapa species already planted in this country (Agroforestree Database, ICRAF)",
      pais_so_esp: "Only documents on species present in the country",
      esp_presente: "🌳 Species present in the country",
      pais_sem_esp: "No species with an Agroforestree record",
      pais_sem_igual: "No Embrapa document was generated in the same climate as this country's dominant one (Brazil does not have that class). Showing similar climates.",
      voltar: "← Back", resultados_busca: "Results for", interpretado: "Understood as:",
      filtros: "Filters", mostrar_filtros: "Filter results",
      f_linha: "Centre thematic line", f_tipo: "Type of knowledge", f_tema: "Technical topic", f_esp: "Species", f_clima: "Climate zone", f_nivel: "Scope",
      f_regiao: "Where in Brazil (region)", f_uf: "Where in Brazil (state)",
      rg: { N: "North", NE: "Northeast", CO: "Centre-West", SE: "Southeast", S: "South" },
      ter_texto: "Place cited in the text", ter_sede: "Location of the Embrapa unit (approximation)",
      k: { sol: "Technological solution", ori: "Technical guidance", cie: "Scientific" },
      lv: { n: "Core (planted forest and ICLF)", c: "Complementary" },
      sem_esp: "Several species / general",
      contagem: (n) => `${n.toLocaleString("en")} documents`,
      mais: "Show more", vazio: "No documents found. Try other words or remove filters.",
      abrir: "Open at Embrapa ↗", semelhantes: "Similar", ocultar: "Hide",
      comp_int: "Integrated system — the forest component is covered only in part",
      comp: "Complementary",
      invasora: "Caution: some species in this group (e.g. Prosopis juliflora, Acacia mearnsii) are invasive in parts of Africa. Check local regulations.",
      origem_af: "Species native to Africa",
      auto: "automatic classification", revisado: "reviewed in sample",
      rodape_metodo: "<b>How this collection was built.</b> Embrapa publications and technological solutions were selected and classified using semantic analysis (SBERT, multilingual-e5 model) combined with a supervised classifier and a species dictionary. The definition of planted forest follows FAO (FRA 2020/2025); scope and thematic lines follow the Reference Centre, which includes integrated crop-livestock-forestry (ICLF).",
      rodape_aviso: "Prototype for discussion by the FAO Reference Centre for Planted Forests and Integrated Crop-Livestock-Forestry Systems (Embrapa Forestry). Classification is automatic and under expert review; titles and abstracts are shown in their original language (mostly Portuguese).",
      meta: (m) => `Collection: ${m.n_docs.toLocaleString("en")} documents · updated ${m.gerado}`
    },
    fr: {
      marca: "Forêts plantées", marca_sub: "Connaissances de l'Embrapa", prototipo: "Prototype", inicio: "Accueil",
      carregando: "Chargement de la collection…",
      titulo: "Ce que l'Embrapa sait sur les forêts plantées",
      intro: "Publications et solutions technologiques de l'Embrapa sur l'eucalyptus, les espèces indigènes et d'autres arbres plantés, organisées pour les techniciens, gestionnaires et producteurs d'autres pays.",
      capa_selo: "Centre de référence de la FAO sur les forêts plantées et l'intégration culture-élevage-forêt · Embrapa Forêts",
      n_docs: "publications et solutions technologiques", n_col: "collections par espèce", n_lin: "axes thématiques du Centre",
      n_paises: "pays africains reliés par le climat",
      comecar: "Par où commencer",
      ent: { busca: ["Posez votre question", "En portugais, anglais ou français : la recherche comprend les concepts et trouve des travaux écrits en portugais."],
             col: ["Parcourez les collections", "Eucalyptus, espèces indigènes du Brésil, espèces d'intérêt pour l'Afrique et forêts plantées en général."],
             pais: ["Choisissez votre pays", "Connaissances produites au Brésil sous le même climat que votre pays, et sur des espèces déjà plantées chez vous."] },
      linhas_tit: "Les axes thématiques du Centre",
      linhas_nota: "Un document peut relever de plusieurs axes. Le lien entre thèmes techniques et axes est une proposition en cours de validation.",
      como_tit: "Comment cette collection a été constituée",
      como: [["Définition officielle", "Forêt plantée selon la FAO (FRA 2020/2025), plus les systèmes d'intégration culture-élevage-forêt, qui font partie du périmètre du Centre."],
             ["Analyse sémantique", "Les publications et solutions de l'Embrapa ont été lues par un modèle de langage multilingue (SBERT) et classées à partir d'exemples annotés."],
             ["Révision par des experts", "La classification est en cours de vérification par le groupe d'experts du Centre. D'ici là, ce site est un prototype pour discussion."]],
      buscar_ph: "Ex. : plants d'eucalyptus, fertilisation du teck, restauration en zone sèche",
      buscar: "Rechercher", exemplos: "Essayez :",
      ex: ["production de plants d'eucalyptus", "pépinière de pin", "acajou d'Afrique", "restauration zone semi-aride", "charbon de bois"],
      colecoes: "Collections", clima: "Trouvez des connaissances produites sous un climat proche du vôtre",
      col: {
        E: ["Eucalyptus", "Clones, amélioration, plants, gestion, ravageurs et utilisation du bois d'eucalyptus."],
        N: ["Espèces indigènes du Brésil", "Sylviculture d'espèces indigènes : hévéa, maté, pin du Paraná, paricá, noix du Brésil…"],
        A: ["Espèces d'intérêt africain", "Pin et autres exotiques plantées en Afrique ou originaires d'Afrique : acacias, teck, acajou d'Afrique, neem…"],
        G: ["Forêts plantées en général", "Restauration, planification, marchés et documents sans espèce dominante."]
      },
      docs: "documents", nucleo: "dans le noyau",
      ctx: {
        "CTX.AF": ["Tropical humide", "Ex. : bassin du Congo, golfe de Guinée, Sao Tomé-et-Principe"],
        "CTX.AW": ["Tropical à saison sèche (savane)", "Ex. : Angola, Mozambique, Guinée-Bissau, Zambie (Miombo)"],
        "CTX.BS": ["Semi-aride", "Ex. : Sahel, Cap-Vert, sud de l'Angola et du Mozambique"],
        "CTX.CF": ["Subtropical et d'altitude", "Ex. : hauts plateaux d'Angola, Éthiopie, Kenya, Afrique du Sud"]
      },
      ctx_nota: "Correspondances climatiques indicatives, à valider.",
      pais_titulo: "Mon pays : connaissances produites sous un climat identique ou proche",
      pais_escolha: "Choisissez le pays", pais_ir: "Voir", lusofonos: "Pays lusophones", outros_paises: "Autres pays africains",
      pais_climas: "Climats du territoire (Köppen-Geiger)", pais_igual: "Même climat", pais_semelhante: "Climat proche (même zone)",
      pais_nota: "Correspondance calculée : un document apparaît lorsque le climat où il a été produit au Brésil couvre au moins 10 % du territoire du pays (carte de Beck et al., 2018). « Proche » = même zone climatique, classe différente.",
      clima_kg: "Climat d'origine (Köppen)", kg_texto: "lieu cité", kg_sede: "siège de l'unité",
      ctx_paises: "En Afrique :", ctx_fonte: "Pays où la zone couvre ≥ 30 % du territoire, d'après la carte Köppen-Geiger de Beck et al. (2018).",
      f_kg: "Climat (Köppen)",
      pais_incluir_sem: "Inclure climat proche",
      sem_botao: "Rechercher par le sens (IA)",
      sem_aviso: "Utilise le modèle de langue multilingual-e5 dans votre navigateur. La première fois, environ 120 Mo sont téléchargés (puis conservés). Wi-fi recommandé.",
      sem_ativa: "Recherche par le sens activée",
      sem_desativar: "revenir à la recherche par concepts",
      sem_carregando: "Préparation de la recherche par le sens…",
      sem_baixando: "Téléchargement du modèle de langue",
      sem_erro: "Impossible de charger le modèle. La recherche par concepts reste disponible.",
      sem_metodo: "Classé par proximité de sens (SBERT, multilingual-e5)",
      pais_esp: "Espèces de l'Embrapa déjà plantées dans ce pays (Agroforestree Database, ICRAF)",
      pais_so_esp: "Seulement les documents sur des espèces présentes dans le pays",
      esp_presente: "🌳 Espèce présente dans le pays",
      pais_sem_esp: "Aucune espèce avec fiche Agroforestree",
      pais_sem_igual: "Aucun document de l'Embrapa n'a été produit sous le climat dominant de ce pays (le Brésil n'a pas cette classe). Affichage des climats proches.",
      voltar: "← Retour", resultados_busca: "Résultats pour", interpretado: "Compris comme :",
      filtros: "Filtres", mostrar_filtros: "Filtrer les résultats",
      f_linha: "Axe du Centre", f_tipo: "Type de connaissance", f_tema: "Thème technique", f_esp: "Espèce", f_clima: "Zone climatique", f_nivel: "Portée",
      f_regiao: "Où au Brésil (région)", f_uf: "Où au Brésil (État)",
      rg: { N: "Nord", NE: "Nord-Est", CO: "Centre-Ouest", SE: "Sud-Est", S: "Sud" },
      ter_texto: "Lieu cité dans le texte", ter_sede: "Siège de l'unité (approximation)",
      k: { sol: "Solution technologique", ori: "Guide technique", cie: "Scientifique" },
      lv: { n: "Noyau (forêt plantée et intégration culture-élevage-forêt)", c: "Complémentaire" },
      sem_esp: "Plusieurs espèces / général",
      contagem: (n) => `${n.toLocaleString("fr")} documents`,
      mais: "Afficher plus", vazio: "Aucun document trouvé. Essayez d'autres mots ou retirez des filtres.",
      abrir: "Ouvrir sur le site de l'Embrapa ↗", semelhantes: "Similaires", ocultar: "Masquer",
      comp_int: "Système intégré — la composante forestière est traitée en partie",
      comp: "Complémentaire",
      invasora: "Attention : certaines espèces de ce groupe (ex. Prosopis juliflora, Acacia mearnsii) sont envahissantes dans certaines régions d'Afrique. Consultez la réglementation locale.",
      origem_af: "Espèce originaire d'Afrique",
      auto: "classification automatique", revisado: "révisé dans l'échantillon",
      rodape_metodo: "<b>Comment cette collection a été constituée.</b> Les publications et solutions technologiques de l'Embrapa ont été sélectionnées et classées par analyse sémantique (SBERT, modèle multilingual-e5) combinée à un classifieur supervisé et à un dictionnaire d'espèces. La définition de forêt plantée suit la FAO (FRA 2020/2025) ; le périmètre et les axes thématiques suivent le Centre de référence, qui inclut l'intégration culture-élevage-forêt.",
      rodape_aviso: "Prototype pour discussion du Centre de référence de la FAO sur les forêts plantées et l'intégration culture-élevage-forêt (Embrapa Forêts). La classification est automatique et en cours de révision ; titres et résumés dans leur langue d'origine (surtout portugais).",
      meta: (m) => `Collection : ${m.n_docs.toLocaleString("fr")} documents · mise à jour ${m.gerado}`
    }
  };

  // Classes de Köppen-Geiger (legenda de Beck et al., 2018)
  const KG = {
    Af: ["Tropical úmido (floresta)", "Tropical rainforest", "Tropical humide (forêt)"],
    Am: ["Tropical de monção", "Tropical monsoon", "Tropical de mousson"],
    Aw: ["Tropical de savana", "Tropical savannah", "Tropical de savane"],
    BWh: ["Árido quente (deserto)", "Hot desert", "Désert chaud"],
    BWk: ["Árido frio (deserto)", "Cold desert", "Désert froid"],
    BSh: ["Semiárido quente (estepe)", "Hot semi-arid (steppe)", "Semi-aride chaud (steppe)"],
    BSk: ["Semiárido frio (estepe)", "Cold semi-arid (steppe)", "Semi-aride froid (steppe)"],
    Csa: ["Mediterrâneo, verão quente", "Mediterranean, hot summer", "Méditerranéen, été chaud"],
    Csb: ["Mediterrâneo, verão ameno", "Mediterranean, warm summer", "Méditerranéen, été tempéré"],
    Cwa: ["Inverno seco, verão quente", "Dry winter, hot summer", "Hiver sec, été chaud"],
    Cwb: ["Altitude, inverno seco", "Highland, dry winter", "Altitude, hiver sec"],
    Cfa: ["Subtropical úmido, verão quente", "Humid subtropical, hot summer", "Subtropical humide, été chaud"],
    Cfb: ["Temperado úmido, verão ameno", "Oceanic / humid, warm summer", "Tempéré humide, été tempéré"]
  };
  const ZONA_KG = (k) => (k === "Af" || k === "Am" ? "CTX.AF" : k === "Aw" ? "CTX.AW" : k[0] === "B" ? "CTX.BS" : k[0] === "C" ? "CTX.CF" : null);
  const LUSOFONOS = ["AGO", "MOZ", "GNB", "CPV", "STP", "GNQ"];
  function kgRot(k) { const r = KG[k]; return r ? `${k} · ${r[{ pt: 0, en: 1, fr: 2 }[lang]]}` : k; }

  // ---------------------------------------------------------------- estado
  let lang = escolherIdioma();
  const S = { docs: [], sim: [], tax: {}, meta: null, conceitos: [], paises: [] };
  let estado = { rota: "inicio", col: null, q: "", ctx: null, pais: null, linha: null, f: novoFiltro(), n: 20, abertos: new Set(), painel: false };

  function novoFiltro() { return { k: new Set(), m: new Set(), g: new Set(), x: new Set(), lv: new Set(), ln: new Set(), rg: new Set(), uf: new Set(), kg: new Set() }; }
  function t(chave) { return T[lang][chave]; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function norm(s) { return String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }
  function rotulo(id) { const n = S.tax[id]; return n ? (n[lang] || n.pt) : id; }
  function nomePais(p) { return p[lang] || p.pt; }
  function paisesOrdenados() {
    const por = (a, b) => nomePais(a).localeCompare(nomePais(b), lang);
    return { lus: S.paises.filter((p) => LUSOFONOS.includes(p.iso3)).sort(por), outros: S.paises.filter((p) => !LUSOFONOS.includes(p.iso3)).sort(por) };
  }
  // documentos que servem ao país: clima igual (classe >= 10% do território) ou semelhante (mesma zona)
  function docsDoPais(iso) {
    const p = S.paises.find((x) => x.iso3 === iso); if (!p) return { docs: [], conceitos: [] };
    const classes = Object.entries(p.kg).filter(([, f]) => f >= 0.10).map(([k]) => k);
    const zonas = new Set(classes.map(ZONA_KG));
    const iguais = [], semelhantes = [];
    const nosPais = new Set(p.nos || []);
    S.docs.forEach((d) => {
      d._esp = !!(d.s && d.s !== "ESP.MUL" && (nosPais.has(d.s) || [...nosPais].some((n) => n.startsWith(d.s + "."))));
      if (estado.soEsp && !d._esp) { d._match = null; return; }
      const peso = d.kg.reduce((a, k) => a + (classes.includes(k) ? p.kg[k] : 0), 0);
      if (peso > 0) { d._match = "i"; iguais.push([peso, d]); }
      else if (d.kg.some((k) => zonas.has(ZONA_KG(k)))) { d._match = "s"; semelhantes.push([0, d]); }
      else d._match = null;
    });
    const ordemK = { sol: 0, ori: 1, cie: 2 };
    const ord = (a, b) => ordemK[a[1].k] - ordemK[b[1].k] || (a[1].lv === b[1].lv ? 0 : a[1].lv === "n" ? -1 : 1) || b[0] - a[0];
    const usarSem = estado.semelhantes || iguais.length === 0;   // sem clima igual (ex.: Cabo Verde, BWh), mostra os semelhantes
    const lista = usarSem ? iguais.sort(ord).concat(semelhantes.sort(ord)) : iguais.sort(ord);
    return { docs: lista.map((x) => x[1]), conceitos: [], pais: p, classes, nSem: semelhantes.length, nIguais: iguais.length };
  }
  function grupo(s) { return s && s !== "ESP.MUL" ? s.split(".").slice(0, 2).join(".") : "ESP.MUL"; }

  function escolherIdioma() {
    try { const l = localStorage.getItem("fp-lang"); if (l && T[l]) return l; } catch (e) { /* sem armazenamento */ }
    const n = (navigator.language || "pt").slice(0, 2);
    return T[n] ? n : "en";
  }

  // ---------------------------------------------------------------- carga
  // Os dados chegam como scripts (data/*.js definem window.FP) — funciona por servidor e
  // também com o arquivo aberto direto do disco, onde fetch() é bloqueado.
  new Promise((ok, falha) => {
    const fp = window.FP || {};
    ["docs", "similares", "taxonomia", "meta", "paises"].every((k) => fp[k]) ? ok([fp.docs, fp.similares, fp.taxonomia, fp.meta, fp.paises]) : falha();
  })
    .then(([docs, sim, tax, meta, paises]) => {
      S.docs = docs; S.sim = sim; S.meta = meta; S.paises = paises;
      tax.forEach((n) => { S.tax[n.id] = n; });
      montarConceitos(tax);
      docs.forEach((d) => { d._txt = norm(d.t); d._res = norm(d.a); });
      aplicarIdioma();
      window.addEventListener("hashchange", lerRota);
      lerRota();
    })
    .catch(() => { document.getElementById("app").innerHTML = '<p class="vazio">Erro ao carregar os dados. / Data loading error.</p>'; });

  // ---------------------------------------------------------------- busca multilíngue
  // Cada nó da taxonomia (espécies e temas) vira um "conceito" reconhecível em pt, en e fr,
  // pelos rótulos e pelos termos. Uma busca em inglês encontra documentos em português
  // através do conceito (ex.: "seedlings" → Sementes e produção de mudas).
  const PARADAS = new Set(norm("de da do das dos e em para com por a o as os na no nas nos um uma sobre the of and in for with on to by from et des du la le les en pour sur dans y").split(" "));
  function montarConceitos(tax) {
    tax.filter((n) => (n.f === "especie" || n.f === "tema") && n.id !== "ESP.MUL").forEach((n) => {
      const frases = new Set();
      [n.pt, n.en, n.fr].forEach((r) => {
        if (!r) return;
        frases.add(norm(r));
        if (n.f === "especie") norm(r).split(/[\s:/(),-]+/).filter((w) => w.length >= 5 && !PARADAS.has(w)).forEach((w) => frases.add(w));
      });
      (n.termos || "").split("|").forEach((x) => { x = norm(x.trim()); if (x.length >= 4) frases.add(x); });
      S.conceitos.push({ id: n.id, f: n.f, frases: [...frases].sort((a, b) => b.length - a.length) });
    });
  }
  function interpretar(q) {
    const nq = " " + norm(q).replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ") + " ";
    const achados = [];
    S.conceitos.forEach((c) => {
      const f = c.frases.find((fr) => nq.includes(" " + fr + " ") || nq.includes(" " + fr + "s ") || (fr.endsWith("s") && nq.includes(" " + fr.slice(0, -1) + " ")));
      if (f) achados.push({ id: c.id, f: c.f, frase: f });
    });
    // evita conceito genérico quando há um específico do mesmo grupo (ex.: ESP.EUC e ESP.EUC.GRA)
    return achados.filter((a) => !achados.some((b) => b !== a && b.id.startsWith(a.id + ".")));
  }
  function buscar(q) {
    const conceitos = interpretar(q);
    const cobertas = new Set(conceitos.flatMap((c) => c.frase.split(" ")));
    const toks = norm(q).split(/[^a-z0-9]+/).filter((w) => w.length >= 3 && !PARADAS.has(w) && !cobertas.has(w));
    const res = [];
    S.docs.forEach((d) => {
      let s = 0;
      toks.forEach((w) => { if (d._txt.includes(w)) s += 3; else if (d._res.includes(w)) s += 1; });
      conceitos.forEach((c) => {
        if (c.f === "especie" && d.s && (d.s === c.id || d.s.startsWith(c.id + "."))) s += 6;
        if (c.f === "tema" && d.m.includes(c.id)) s += 4;
      });
      if (s > 0) res.push([s, d]);
    });
    const ordemK = { sol: 0, ori: 1, cie: 2 };
    res.sort((a, b) => b[0] - a[0] || ordemK[a[1].k] - ordemK[b[1].k] || b[1].y - a[1].y);
    return { docs: res.map((r) => r[1]), conceitos };
  }

  // ---------------------------------------------------------------- busca por significado
  // Opcional (modelo multilingual-e5-small, ~120 MB; ver docs/avaliacao_e5_small.csv). Mesmo modelo e mesma calibração dos vetores do acervo:
  // pergunta "query: …" → vetor e5 → menos a média das publicações em pt → normalizado →
  // produto interno com os vetores int8 do acervo.
  const SEM = { ligada: false, pronto: false, carregando: null, extrator: null, V: null, media: null, escala: 1, cache: new Map() };
  try { SEM.ligada = localStorage.getItem("fp-sem") === "1"; } catch (e) { /* sem armazenamento */ }
  function avisoSem(txt) { const el = document.getElementById("status-ia"); if (el) el.textContent = txt || ""; }
  function carregarScript(src) {
    return new Promise((ok, falha) => { const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = falha; document.head.appendChild(s); });
  }
  function prepararSem() {
    if (SEM.carregando) return SEM.carregando;
    SEM.carregando = (async () => {
      avisoSem(t("sem_carregando"));
      if (!window.FP.vet) await carregarScript("data/vetores.js?v=12");
      const vt = window.FP.vet, bin = atob(vt.b64);
      SEM.V = new Int8Array(bin.length);
      for (let i = 0; i < bin.length; i++) SEM.V[i] = bin.charCodeAt(i) << 24 >> 24;
      SEM.dim = vt.dim; SEM.escala = vt.escala; SEM.media = Float32Array.from(vt.media); SEM.modelo = vt.modelo || "Xenova/multilingual-e5-base";
      delete window.FP.vet.b64;
      const { pipeline } = await import("https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1");
      let ult = -1;
      SEM.extrator = await pipeline("feature-extraction", SEM.modelo, {
        dtype: "q8",
        progress_callback: (p) => { if (p.status === "progress" && p.file && p.file.endsWith(".onnx")) { const pct = Math.round(p.progress); if (pct !== ult) { ult = pct; avisoSem(`${t("sem_baixando")}: ${pct}%`); } } }
      });
      SEM.pronto = true; avisoSem("");
    })().catch((e) => { SEM.carregando = null; avisoSem(t("sem_erro")); throw e; });
    return SEM.carregando;
  }
  async function buscarSignificado(q) {
    if (SEM.cache.has(q)) return SEM.cache.get(q);
    await prepararSem();
    const v = (await SEM.extrator("query: " + q, { pooling: "mean", normalize: true })).data;
    const D = SEM.dim, qc = new Float32Array(D); let nn = 0;
    for (let j = 0; j < D; j++) { qc[j] = v[j] - SEM.media[j]; nn += qc[j] * qc[j]; }
    nn = Math.sqrt(nn) || 1;
    const n = S.docs.length, cos = new Float32Array(n);
    for (let i = 0; i < n; i++) { let s = 0; const o = i * D; for (let j = 0; j < D; j++) s += SEM.V[o + j] * qc[j]; cos[i] = s * SEM.escala / 127 / nn; }
    // híbrido: conceitos reconhecidos na pergunta (espécie, tema) somam um pequeno bônus ao cosseno
    const conceitos = interpretar(q), nota = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const d = S.docs[i]; let b = 0;
      conceitos.forEach((c) => {
        if (c.f === "especie" && d.s && (d.s === c.id || d.s.startsWith(c.id + "."))) b += 0.05;
        if (c.f === "tema" && d.m.includes(c.id)) b += 0.02;
      });
      nota[i] = cos[i] + b;
    }
    const ordem = Array.from({ length: n }, (_, i) => i).sort((a, b) => nota[b] - nota[a]).slice(0, 300);
    const r = { docs: ordem.map((i) => { S.docs[i]._cos = cos[i]; return S.docs[i]; }), conceitos, sem: true };
    SEM.cache.set(q, r);
    return r;
  }

  // ---------------------------------------------------------------- rotas
  function lerRota() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    const [r, ...resto] = h.split("/");
    const arg = resto.join("/");
    estado = { rota: "inicio", col: null, q: "", ctx: null, pais: null, linha: null, f: novoFiltro(), n: 20, abertos: new Set(), painel: false, soEsp: false, semelhantes: false };
    if (r === "colecao" && arg) { estado.rota = "res"; estado.col = arg; }
    else if (r === "busca" && arg) { estado.rota = "res"; estado.q = arg; }
    else if (r === "clima" && arg) { estado.rota = "res"; estado.ctx = arg; }
    else if (r === "pais" && arg) { estado.rota = "res"; estado.pais = arg; }
    else if (r === "linha" && arg) { estado.rota = "res"; estado.linha = arg; }
    render();
    window.scrollTo(0, 0);
    if (estado.q && SEM.ligada) buscarSignificado(estado.q).then(() => { if (estado.q) render(); }).catch(() => {});
  }
  function ir(h) { location.hash = h; }

  // ---------------------------------------------------------------- renderização
  function aplicarIdioma() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((e) => { e.textContent = t(e.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach((e) => { e.innerHTML = t(e.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-title]").forEach((e) => { e.title = t(e.dataset.i18nTitle); });
    document.querySelectorAll(".idiomas button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.title = `${t("marca")} · ${t("prototipo")}`;
    if (S.meta) document.getElementById("meta-linha").textContent = t("meta")(S.meta);
  }
  document.querySelectorAll(".idiomas button").forEach((b) => b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("fp-lang", lang); } catch (e) { /* sem armazenamento */ }
    aplicarIdioma(); render();
  }));

  function render() {
    const app = document.getElementById("app");
    app.innerHTML = estado.rota === "inicio" ? htmlInicio() : htmlResultados();
    ligarEventos(app);
  }

  function formBusca(valor) {
    return `<form class="busca" role="search"><input name="q" type="search" value="${esc(valor || "")}" placeholder="${esc(t("buscar_ph"))}" aria-label="${esc(t("buscar"))}"><button type="submit">${esc(t("buscar"))}</button></form>`;
  }

  function htmlInicio() {
    const contaCol = (c) => S.docs.filter((d) => d.c.includes(c));
    const cols = ["E", "N", "A", "G"].map((c) => {
      const ds = contaCol(c), nuc = ds.filter((d) => d.lv === "n").length;
      return `<button class="cartao" data-ir="#/colecao/${c}"><h3>${esc(t("col")[c][0])}</h3><span class="num">${ds.length.toLocaleString(lang)} <small>${esc(t("docs"))}</small></span><p>${esc(t("col")[c][1])}</p><p>${nuc.toLocaleString(lang)} ${esc(t("nucleo"))}</p></button>`;
    }).join("");
    const climas = ["CTX.AW", "CTX.BS", "CTX.AF", "CTX.CF"].map((x) => {
      const n = S.docs.filter((d) => d.x.includes(x)).length;
      const ps = S.paises.map((p) => [p, Object.entries(p.kg).filter(([k]) => ZONA_KG(k) === x).reduce((a, [, f]) => a + f, 0)])
        .filter(([, f]) => f >= 0.30).sort((a, b) => (LUSOFONOS.includes(b[0].iso3) - LUSOFONOS.includes(a[0].iso3)) || b[1] - a[1]);
      const nomes = ps.slice(0, 6).map(([p]) => nomePais(p)).join(", ") + (ps.length > 6 ? ` +${ps.length - 6}` : "");
      return `<button class="cartao clima" data-ir="#/clima/${x}"><h3>${esc(t("ctx")[x][0])}</h3><span class="num">${n.toLocaleString(lang)} <small>${esc(t("docs"))}</small></span><p class="paises"><b>${esc(t("ctx_paises"))}</b> ${esc(nomes)}</p></button>`;
    }).join("");
    const { lus, outros } = paisesOrdenados();
    const opt = (p) => `<option value="${p.iso3}">${esc(nomePais(p))}</option>`;
    const seletor = `<form class="busca pais-form"><select name="pais" aria-label="${esc(t("pais_escolha"))}"><option value="">${esc(t("pais_escolha"))}…</option>
      <optgroup label="${esc(t("lusofonos"))}">${lus.map(opt).join("")}</optgroup><optgroup label="${esc(t("outros_paises"))}">${outros.map(opt).join("")}</optgroup></select><button type="submit">${esc(t("pais_ir"))}</button></form>`;
    const ex = t("ex").map((e) => `<button data-q="${esc(e)}">${esc(e)}</button>`).join(" · ");
    const fmt = (n) => n.toLocaleString(lang);
    const lins = Object.values(S.tax).filter((n) => n.f === "linha");
    const nLin = lins.filter((n) => n.id !== "LIN.CAP").length;
    const numeros = [[S.docs.length, t("n_docs")], [4, t("n_col")], [nLin, t("n_lin")], [S.paises.length, t("n_paises")]]
      .map(([n, r]) => `<div class="capa-num"><b>${fmt(n)}</b><span>${esc(r)}</span></div>`).join("");
    const ent = t("ent");
    const icone = {
      busca: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>',
      col: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="7" height="16" rx="1.5"/><rect x="12" y="4" width="4" height="16" rx="1.5"/><path d="m18 5 3 .8-3.6 14.4-3-.8z"/></svg>',
      pais: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.2 3.8 8.5s-1.2 6.1-3.8 8.5c-2.6-2.4-3.8-5.2-3.8-8.5S9.4 5.9 12 3.5z"/></svg>',
    };
    const entradas = `<div class="entradas">
      <button class="entrada" data-acao="focar-busca">${icone.busca}<h3>${esc(ent.busca[0])}</h3><p>${esc(ent.busca[1])}</p></button>
      <button class="entrada" data-acao="ir-colecoes">${icone.col}<h3>${esc(ent.col[0])}</h3><p>${esc(ent.col[1])}</p></button>
      <div class="entrada">${icone.pais}<h3>${esc(ent.pais[0])}</h3><p>${esc(ent.pais[1])}</p>${seletor}</div></div>`;
    const maxLin = Math.max(...lins.map((n) => S.docs.filter((d) => (d.ln || []).includes(n.id)).length));
    const linhasHtml = lins.map((n) => {
      const k = S.docs.filter((d) => (d.ln || []).includes(n.id)).length;
      return `<button class="linha-cap" data-ir="#/linha/${n.id}"><span class="nome">${esc(rotulo(n.id))}</span>
        <span class="barra"><i style="width:${Math.max(4, Math.round(100 * k / maxLin))}%"></i></span><span class="n">${fmt(k)}</span></button>`;
    }).join("");
    const como = t("como").map(([h, p], i) => `<div class="passo"><span class="i">${i + 1}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join("");
    return `<section class="capa-hero"><div class="capa-in">
        <p class="capa-selo">${esc(t("capa_selo"))}</p>
        <h1>${esc(t("titulo"))}</h1><p class="capa-intro">${esc(t("intro"))}</p>
        ${formBusca("")}<div class="exemplos">${esc(t("exemplos"))} ${ex}</div></div>${copas()}</section>
      <section class="capa-numeros">${numeros}</section>
      <h2 class="secao">${esc(t("comecar"))}</h2>${entradas}
      <h2 class="secao" id="capa-colecoes">${esc(t("colecoes"))}</h2><div class="grade">${cols}</div>
      <h2 class="secao">${esc(t("linhas_tit"))}</h2><div class="linhas-cap">${linhasHtml}</div><p class="nota-capa">${esc(t("linhas_nota"))}</p>
      <h2 class="secao">${esc(t("clima"))}</h2><div class="grade">${climas}</div><p class="nota-capa">${esc(t("ctx_fonte"))}</p>
      <section class="capa-como"><h2>${esc(t("como_tit"))}</h2><div class="passos">${como}</div></section>`;
  }

  // silhueta de copas de árvores (decorativa) na base da abertura
  function copas() {
    const larg = 1200, alt = 90;
    const camada = (raios, base, desloc) => {
      let d = `M0 ${alt} L0 ${base} `, x = -desloc, i = 0;
      while (x < larg) {
        const r = raios[i++ % raios.length];
        d += `L${x} ${base} A${r} ${r * 0.9} 0 0 1 ${x + 2 * r} ${base} `;
        x += 2 * r - r * 0.35;
      }
      return d + `L${larg} ${base} L${larg} ${alt} Z`;
    };
    const fundo = camada([30, 42, 26, 50, 34, 22, 40, 32, 54, 28, 38, 44], 62, 10);
    const frente = camada([22, 30, 18, 34, 26, 16, 28, 24, 36, 20, 26, 32, 18], 80, 30);
    return `<svg class="copas" viewBox="0 0 ${larg} ${alt}" preserveAspectRatio="none" aria-hidden="true"><path class="c1" d="${fundo}"/><path class="c2" d="${frente}"/></svg>`;
  }


  function baseAtual() {
    if (estado.q && SEM.ligada && SEM.cache.has(estado.q)) return SEM.cache.get(estado.q);
    if (estado.q) return buscar(estado.q);
    if (estado.col) return { docs: S.docs.filter((d) => d.c.includes(estado.col)), conceitos: [] };
    if (estado.ctx) return { docs: S.docs.filter((d) => d.x.includes(estado.ctx)), conceitos: [] };
    if (estado.linha) return { docs: S.docs.filter((d) => (d.ln || []).includes(estado.linha)), conceitos: [] };
    if (estado.pais) return docsDoPais(estado.pais);
    return { docs: S.docs, conceitos: [] };
  }
  const FACETAS = [
    ["k", "f_tipo", (d) => [d.k], (v) => t("k")[v]],
    ["lv", "f_nivel", (d) => [d.lv], (v) => t("lv")[v]],
    ["ln", "f_linha", (d) => d.ln || [], (v) => rotulo(v)],
    ["g", "f_esp", (d) => [grupo(d.s)], (v) => (v === "ESP.MUL" ? t("sem_esp") : rotulo(v))],
    ["m", "f_tema", (d) => d.m, (v) => rotulo(v)],
    ["x", "f_clima", (d) => d.x, (v) => t("ctx")[v] ? t("ctx")[v][0] : rotulo(v)],
    ["kg", "f_kg", (d) => d.kg, (v) => kgRot(v)],
    ["rg", "f_regiao", (d) => d.rg, (v) => t("rg")[v] || v],
    ["uf", "f_uf", (d) => d.uf, (v) => v]
  ];
  function passa(d, ignorar) {
    return FACETAS.every(([chave, , val]) => chave === ignorar || estado.f[chave].size === 0 || val(d).some((v) => estado.f[chave].has(v)));
  }

  function htmlResultados() {
    const atual = baseAtual();
    const { docs: base, conceitos } = atual;
    const filtrados = base.filter((d) => passa(d));
    let titulo = "";
    if (estado.q) titulo = `${t("resultados_busca")} “${esc(estado.q)}”`;
    else if (estado.col) titulo = esc((t("col")[estado.col] || [estado.col])[0]);
    else if (estado.ctx) titulo = esc((t("ctx")[estado.ctx] || [estado.ctx])[0]);
    else if (estado.pais && atual.pais) titulo = esc(nomePais(atual.pais));
    else if (estado.linha) titulo = esc(rotulo(estado.linha));

    const cabPais = atual.pais ? `<div class="pais-cab"><b>${esc(t("pais_climas"))}:</b> ${Object.entries(atual.pais.kg).filter(([, f]) => f >= 0.05).map(([k, f]) =>
      `<span class="etq clima${f >= 0.10 ? "" : " fraco"}" title="${esc(kgRot(k))}">${esc(k)} ${Math.round(f * 100)}%</span>`).join(" ")}${atual.nIguais === 0 ? `<p class="aviso">${esc(t("pais_sem_igual"))}</p>` : ""}<p class="pais-esp"><b>${esc(t("pais_esp"))}:</b> ${(atual.pais.especies || []).length ? atual.pais.especies.map((e) => `<i>${esc(e)}</i>`).join(", ") : esc(t("pais_sem_esp"))}</p>
      <label class="incluir-sem"><input type="checkbox" id="so-esp" ${estado.soEsp ? "checked" : ""}> ${esc(t("pais_so_esp"))}</label><label class="incluir-sem"><input type="checkbox" id="incluir-sem" ${estado.semelhantes || atual.nIguais === 0 ? "checked" : ""} ${atual.nIguais === 0 ? "disabled" : ""}> ${esc(t("pais_incluir_sem"))} (+${(atual.nSem || 0).toLocaleString(lang)})</label><p class="mudo">${esc(t("pais_nota"))}</p></div>` : "";
    const interp = conceitos.length ? `<p class="interpretacao">${esc(t("interpretado"))} ${conceitos.map((c) => `<span class="etq ${c.f === "especie" ? "esp" : ""}">${esc(rotulo(c.id))}</span>`).join(" ")}</p>` : "";
    const filtros = FACETAS.map(([chave, nome, val, rot]) => {
      const cont = new Map();
      base.filter((d) => passa(d, chave)).forEach((d) => val(d).forEach((v) => cont.set(v, (cont.get(v) || 0) + 1)));
      if (cont.size === 0) return "";
      const itens = [...cont.entries()].sort((a, b) => b[1] - a[1]).map(([v, n]) =>
        `<label><input type="checkbox" data-f="${chave}" value="${esc(v)}" ${estado.f[chave].has(v) ? "checked" : ""}> ${esc(rot(v))}<span class="c">${n}</span></label>`).join("");
      const aberto = chave === "k" || chave === "lv" || estado.f[chave].size > 0;
      return `<details ${aberto ? "open" : ""}><summary>${esc(t(nome))}</summary>${itens}</details>`;
    }).join("");
    const lista = filtrados.slice(0, estado.n).map(htmlDoc).join("");
    return `<div class="barra-res"><button class="voltar" data-ir="#/">${esc(t("voltar"))}</button><h1>${titulo}</h1></div>
      ${formBusca(estado.q)}${estado.q ? controleSem(atual) : ""}${interp}${cabPais}
      <div class="layout"><aside class="filtros${estado.painel ? " aberto" : ""}"><button class="abre-filtros">${esc(t("mostrar_filtros"))}</button><div class="corpo-filtros">${filtros}</div></aside>
      <section><p class="contagem">${esc(t("contagem")(filtrados.length))}</p>
      ${lista || `<p class="vazio">${esc(t("vazio"))}</p>`}
      ${filtrados.length > estado.n ? `<button class="mais">${esc(t("mais"))}</button>` : ""}</section></div>`;
  }

  function controleSem(atual) {
    if (SEM.ligada) return `<div class="sem-ctrl ativa">✨ ${esc(t("sem_ativa"))} · <button class="link" id="sem-off">${esc(t("sem_desativar"))}</button><span id="status-ia" class="mudo"></span>${atual.sem ? `<div class="mudo">${esc(t("sem_metodo"))}</div>` : ""}</div>`;
    return `<div class="sem-ctrl"><button class="sem-on" id="sem-on">✨ ${esc(t("sem_botao"))}</button> <span class="mudo">${esc(t("sem_aviso"))}</span><span id="status-ia" class="mudo"></span></div>`;
  }
  function htmlDoc(d) {
    const esp = d.s && d.s !== "ESP.MUL" ? `<span class="etq esp">${esc(rotulo(d.s))}</span>` : "";
    const af = d.s && S.tax[d.s] && S.tax[d.s].af === "origem_africana" ? `<span class="etq esp">${esc(t("origem_af"))}</span>` : "";
    const temas = d.m.map((m) => `<span class="etq">${esc(rotulo(m))}</span>`).join("");
    const climas = d.kg.map((k) => `<span class="etq clima" title="${esc(t("clima_kg"))} · ${esc(d.kf === "t" ? t("kg_texto") : t("kg_sede"))}">${esc(kgRot(k))}</span>`).join("");
    const corresp = estado.pais && d._match ? `<span class="complementar">· ${esc(d._match === "i" ? t("pais_igual") : t("pais_semelhante"))}</span>` +
      (d._esp ? ` <span class="etq esp">${esc(t("esp_presente"))}</span>` : "") : "";
    const comp = d.lv === "c" ? `<span class="complementar">· ${esc(d.si === "INT" ? t("comp_int") : t("comp"))}</span>` : "";
    const inv = d.s === "ESP.EXO.SEC" || d.s === "ESP.EXO.ACA" ? `<div class="aviso">${esc(t("invasora"))}</div>` : "";
    const aberto = estado.abertos.has(d.i);
    const sim = aberto ? `<ul class="similares">${(S.sim[d.i] || []).map((j) => S.docs[j]).filter(Boolean).map((o) =>
      `<li><span class="tipo ${o.k}">${esc(t("k")[o.k])}</span> <a href="${esc(o.l)}" target="_blank" rel="noopener">${esc(o.t)}</a> <span class="mudo">(${o.y})</span></li>`).join("")}</ul>` : "";
    return `<article class="doc"><span class="tipo ${d.k}">${esc(t("k")[d.k])}</span>${comp}${corresp}
      <h3><a href="${esc(d.l)}" target="_blank" rel="noopener">${esc(d.t)}</a></h3>
      ${estado.q && SEM.ligada && SEM.cache.has(estado.q) && d._cos != null ? `<div class="prox" title="cos ${d._cos.toFixed(3)}"><span style="width:${Math.max(4, Math.min(100, Math.round((d._cos - 0.2) / 0.5 * 100)))}%"></span></div>` : ""}
      <div class="meta">${esc(d.y)}${d.u ? " · " + esc(d.u) : ""} · <span title="SBERT">${esc(d.r ? t("revisado") : t("auto"))}</span></div>
      ${d.a ? `<p class="resumo">${esc(d.a)}</p>` : ""}
      ${d.uf.length ? `<div class="territorio" title="${esc(d.tf === "t" ? t("ter_texto") : t("ter_sede"))}">📍 ${esc(d.tf === "t" && d.mu ? d.mu : d.uf.join(", "))} <span class="mudo">· ${esc(d.tf === "t" ? t("ter_texto") : t("ter_sede"))}</span></div>` : ""}
      <div class="etiquetas">${esp}${af}${temas}${climas}</div>${inv}
      <div class="acoes"><a href="${esc(d.l)}" target="_blank" rel="noopener">${esc(t("abrir"))}</a><button data-sim="${d.i}" aria-expanded="${aberto}">${esc(aberto ? t("ocultar") : t("semelhantes"))}</button></div>${sim}</article>`;
  }

  function ligarEventos(app) {
    app.querySelectorAll("[data-ir]").forEach((b) => b.addEventListener("click", () => ir(b.dataset.ir)));
    app.querySelectorAll("[data-q]").forEach((b) => b.addEventListener("click", () => ir("#/busca/" + encodeURIComponent(b.dataset.q))));
    app.querySelectorAll('[data-acao="focar-busca"]').forEach((b) => b.addEventListener("click", () => {
      const inp = app.querySelector(".capa-hero input[name=q]");
      if (inp) { window.scrollTo({ top: 0, behavior: "smooth" }); inp.focus({ preventScroll: true }); }
    }));
    app.querySelectorAll('[data-acao="ir-colecoes"]').forEach((b) => b.addEventListener("click", () => {
      const alvo = document.getElementById("capa-colecoes");
      if (alvo) alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    app.querySelectorAll("form.pais-form").forEach((f) => f.addEventListener("submit", (e) => {
      e.preventDefault(); if (f.pais.value) ir("#/pais/" + f.pais.value);
    }));
    app.querySelectorAll("form.busca:not(.pais-form)").forEach((f) => f.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = f.q.value.trim();
      if (q) ir("#/busca/" + encodeURIComponent(q));
    }));
    app.querySelectorAll("input[data-f]").forEach((c) => c.addEventListener("change", () => {
      const s = estado.f[c.dataset.f];
      c.checked ? s.add(c.value) : s.delete(c.value);
      estado.n = 20; render();
    }));
    const soEsp = app.querySelector("#so-esp");
    if (soEsp) soEsp.addEventListener("change", () => { estado.soEsp = soEsp.checked; estado.n = 20; render(); });
    const on = app.querySelector("#sem-on"), off = app.querySelector("#sem-off");
    if (on) on.addEventListener("click", () => {
      SEM.ligada = true; try { localStorage.setItem("fp-sem", "1"); } catch (e) { /* */ }
      render(); buscarSignificado(estado.q).then(() => render()).catch(() => { SEM.ligada = false; render(); avisoSem(t("sem_erro")); });
    });
    if (off) off.addEventListener("click", () => { SEM.ligada = false; try { localStorage.setItem("fp-sem", "0"); } catch (e) { /* */ } render(); });
    const sem = app.querySelector("#incluir-sem");
    if (sem) sem.addEventListener("change", () => { estado.semelhantes = sem.checked; estado.n = 20; render(); });
    const mais = app.querySelector(".mais");
    if (mais) mais.addEventListener("click", () => { estado.n += 20; render(); });
    const abre = app.querySelector(".abre-filtros");
    if (abre) abre.addEventListener("click", () => { estado.painel = !estado.painel; abre.parentElement.classList.toggle("aberto", estado.painel); });
    app.querySelectorAll("[data-sim]").forEach((b) => b.addEventListener("click", () => {
      const i = +b.dataset.sim;
      estado.abertos.has(i) ? estado.abertos.delete(i) : estado.abertos.add(i);
      const y = window.scrollY; render(); window.scrollTo(0, y);
    }));
  }
})();
