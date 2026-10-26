export interface ServiceItem {
  id: string;
  category: 'hidrologia' | 'hidraulica' | 'subterraneas' | 'calidad' | 'riego' | 'ambiental';
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge: string;
  deliverables: string[];
  software: string[];
  regulations: string[];
}

export interface BibliographicResource {
  id: string;
  title: string;
  author: string;
  institution?: string;
  image: string;
  coreApplication: string;
  fullDetails: string;
  keyTopics: string[];
}

export interface EnvironmentalInstrument {
  acronym: string;
  name: string;
  entity: string;
  description: string;
  objective: string;
}

export const COMPANY_INFO = {
  name: "WRE Consultoría S.A.S.",
  shortName: "WRE Consultoría",
  tagline: "Ingeniería del agua para un futuro sostenible",
  headline: "Consultoría en Recursos Hídricos y Estudios Ambientales",
  subheadline: "Soluciones de alta precisión técnica en hidrología, modelación hidráulica 2D, hidrogeología y gestión ambiental estratégica en Colombia.",
  address: "Bogotá, D.C., Colombia",
  phone: "+57 316 438 7493",
  phoneRaw: "573164387493",
  email: "wreconsultoriasas@gmail.com",
  schedule: "Lunes a Sábado: 07:00 am - 06:00 pm",
  linkedin: "https://www.linkedin.com/in/wre-consultoria-34122634b/",
  whatsappLink: "https://wa.me/573164387493"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "hidrologia",
    category: "hidrologia",
    title: "Estudios de Hidrología",
    tagline: "Análisis del ciclo hidrológico y regímenes de caudales",
    shortDesc: "Evaluación integral del ciclo del agua, precipitación, escorrentía superficial, evaporación e infiltración para planificación hídrica y control de avenidas.",
    fullDesc: "Nuestros estudios hidrológicos determinan con rigor matemático las variables del ciclo hídrico en cuencas hidrográficas. Mediante análisis estadísticos de series hidroclimatológicas del IDEAM y modelos de transformación lluvia-escorrentía, estimamos caudales de diseño para diferentes periodos de retorno, balances hídricos y curvas IDF indispensables en el diseño de obras de infraestructura y gestión del riesgo.",
    image: "/images/service_hidrologia.png",
    badge: "Hidrología Superficial",
    deliverables: [
      "Curvas Intensidad-Duración-Frecuencia (IDF)",
      "Análisis de frecuencias y periodos de retorno (Gumbel, Log-Pearson III)",
      "Modelación lluvia-escorrentía de cuencas",
      "Balances hídricos mensuales y multianuales",
      "Estimación de caudales máximos instantáneos y de estiaje"
    ],
    software: ["HEC-HMS", "QGIS", "HydroGNOMON", "Python / R Hidrológico"],
    regulations: ["Guías Técnicas IDEAM", "Decreto 1076 de 2015", "Normas RAS"]
  },
  {
    id: "hidraulica",
    category: "hidraulica",
    title: "Estudios de Hidráulica",
    tagline: "Modelación hidrodinámica 1D/2D y diseño de obras hidráulicas",
    shortDesc: "Modelación y simulación del agua en movimiento en cauces naturales, canales, tuberías y estructuras de control, delimitando zonas de inundación.",
    fullDesc: "Realizamos simulaciones hidrodinámicas unidimensionales y bidimensionales de alta resolución para determinar niveles de agua, velocidades y patrones de flujo en ríos, quebradas y llanuras de inundación. Diseñamos sistemas de conducción, box-culverts, presas, vertederos de excesos y disipadores de energía, cumpliendo estrictamente los requisitos de las corporaciones autónomas regionales.",
    image: "/images/service_hidraulica.jpg",
    badge: "Hidrodinámica & Obras",
    deliverables: [
      "Modelación hidráulica bidimensional (Iber 2D)",
      "Modelación hidráulica unidimensional (HEC-RAS 1D)",
      "Mapas de amenaza y zonificación por inundación",
      "Delimitación técnica de rondas hídricas",
      "Diseño hidráulico de puentes, pontones, canales y vertederos"
    ],
    software: ["Iber 2D", "HEC-RAS", "EPA-SWMM", "AutoCAD Civil 3D"],
    regulations: ["Guía Metodológica de Rondas Hídricas MinAmbiente", "Criterios INVÍAS"]
  },
  {
    id: "aguas-subterraneas",
    category: "subterraneas",
    title: "Estudios de Aguas Subterráneas",
    tagline: "Hidrogeología, pruebas de bombeo y gestión de acuíferos",
    shortDesc: "Investigación de la distribución, dinámica y calidad del agua en el subsuelo, evaluando la sostenibilidad de acuíferos y concesiones subterráneas.",
    fullDesc: "Especializados en la caracterización hidrogeológica de formaciones acuíferas, diseño e interpretación de pruebas de bombeo a caudal constante y escalonado, cálculo de transmisividad, almacenamiento y radio de influencia de pozos. Desarrollamos modelos de flujo subterráneo y evaluamos la vulnerabilidad a la contaminación para garantizar extracciones sustentables.",
    image: "/images/service_aguas_subterraneas.png",
    badge: "Hidrogeología",
    deliverables: [
      "Diseño y supervisión de pruebas de bombeo",
      "Cálculo de parámetros hidráulicos (T, S, K)",
      "Modelación numérica de flujo y transporte",
      "Mapas de vulnerabilidad de acuíferos (GOD, DRASTIC)",
      "Trámite técnico de concesión de aguas subterráneas"
    ],
    software: ["MODFLOW", "AQTESOLV", "RockWorks", "GIS Hidrogeológico"],
    regulations: ["Decreto 1076/2015", "Términos de Referencia ANLA / CAR"]
  },
  {
    id: "calidad-agua",
    category: "calidad",
    title: "Estudios de Calidad del Agua",
    tagline: "Caracterización, modelación QUAL2K y permisos de vertimiento",
    shortDesc: "Evaluación físico-química y microbiológica del recurso hídrico para verificar aptitud de uso, capacidad de asimilación y cumplimiento de vertimientos.",
    fullDesc: "Brindamos soporte técnico para la toma de muestras compuestas y puntuales, análisis estadístico de parámetros físico-químicos (DBO, DQO, SST, nutrientes, metales) y modelación de la calidad del agua en corrientes receptoras. Determinamos la capacidad de asimilación y dilución de ríos y estructuramos expedientes para la obtención o renovación de permisos de vertimiento.",
    image: "/images/service_calidad_agua.jpg",
    badge: "Calidad & Vertimientos",
    deliverables: [
      "Planes de monitoreo y caracterización de agua superficial",
      "Modelación de calidad de agua superficial (QUAL2K)",
      "Estudios de capacidad de asimilación y carga contaminante",
      "Expedientes para Permiso de Vertimientos",
      "Evaluación del Índice de Calidad del Agua (ICA)"
    ],
    software: ["QUAL2K", "EPA WASP", "R Bioestadística"],
    regulations: ["Resolución 0631 de 2015", "Resolución 1207 de 2014", "Dec. 1076/2015"]
  },
  {
    id: "riego-drenaje",
    category: "riego",
    title: "Estudios de Riego y Drenaje Agrícola",
    tagline: "Optimización hídrica agropecuaria y control de salinidad",
    shortDesc: "Diseño y planificación de redes de riego presurizado o gravedad, y sistemas de drenaje superficial y subterráneo para agricultura sostenible.",
    fullDesc: "Maximizamos la eficiencia en el uso del agua en proyectos agroindustriales y distritos de riego. Calculamos las necesidades netas y brutas de riego según coeficientes de cultivo (Kc) y evapotranspiración (ETo), diseñamos canales principales, laterales y redes de drenaje para abatir niveles freáticos y prevenir la salinización de suelos agrícolas.",
    image: "/images/service_riego_drenaje.png",
    badge: "Agroingeniería",
    deliverables: [
      "Determinación de demandas hídricas de cultivos (FAO-56)",
      "Diseño hidráulico de canales y tuberías de riego",
      "Planificación y dimensionamiento de drenaje agrícola",
      "Balances de sales y control de freática",
      "Planes de uso eficiente y ahorro del agua (PUEAA agrícola)"
    ],
    software: ["CROPWAT", "EPANET", "Drainage Design Tool", "Civil 3D"],
    regulations: ["Metodologías FAO", "Lineamientos ADR / MinAgricultura"]
  },
  {
    id: "estudios-ambientales",
    category: "ambiental",
    title: "Estudios Ambientales e Instrumentos",
    tagline: "EIA, PMA, POMCA, PUEAA, PSMV y gestión de licencias",
    shortDesc: "Elaboración de expedientes ambientales integrales para licenciamiento, permisos y planificación territorial ante la ANLA y Corporaciones Autónomas Regionales.",
    fullDesc: "Acompañamos a empresas y entidades públicas en la estructuración de todos los instrumentos de regulación ambiental exigidos en Colombia. Desde Estudios de Impacto Ambiental (EIA) y Planes de Manejo Ambiental (PMA), hasta Planes de Ordenación de Cuencas (POMCA), PUEAA, planes de saneamiento y análisis de riesgo hídrico, garantizando viabilidad técnica y legal.",
    image: "/images/service_estudios_ambientales.jpg",
    badge: "Gestión Ambiental",
    deliverables: [
      "Estudios de Impacto Ambiental (EIA) y PMA",
      "Diagnósticos Ambientales de Alternativas (DAA)",
      "Programas para el Uso Eficiente del Agua (PUEAA)",
      "Planes de Ordenación de Cuencas Hidrográficas (POMCA)",
      "Planes de Saneamiento y Manejo de Vertimientos (PSMV)"
    ],
    software: ["ArcGIS Pro", "QGIS", "GeoDataBase ANLA", "Metodologías MinAmbiente"],
    regulations: ["Ley 99 de 1993", "Decreto Único Reglamentario 1076 de 2015"]
  }
];

export const ENVIRONMENTAL_INSTRUMENTS: EnvironmentalInstrument[] = [
  {
    acronym: "EIA",
    name: "Estudio de Impacto Ambiental",
    entity: "ANLA / CARs",
    description: "Instrumento básico para la toma de decisiones sobre los proyectos, obras o actividades que requieren licencia ambiental.",
    objective: "Identificar, prevenir y mitigar impactos ambientales significativos en proyectos minero-energéticos, de infraestructura o agroindustriales."
  },
  {
    acronym: "PMA",
    name: "Plan de Manejo Ambiental",
    entity: "Autoridades Ambientales",
    description: "Conjunto detallado de medidas preventivas, de mitigación, corrección y compensación formuladas en el estudio ambiental.",
    objective: "Garantizar la ejecución de acciones concretas de conservación y monitoreo durante la construcción y operación del proyecto."
  },
  {
    acronym: "PORH",
    name: "Plan de Ordenamiento del Recurso Hídrico",
    entity: "CARs / Autoridades Ambientales Urbanas",
    description: "Instrumento de planificación para fijar la destinación y usos de los cuerpos de agua continentales superficiales y subterráneos.",
    objective: "Establecer normas de calidad, objetivos de calidad y límites máximos permisibles para tramos fluviales."
  },
  {
    acronym: "POMCA",
    name: "Plan de Ordenación y Manejo de Cuencas",
    entity: "Corporaciones Autónomas Regionales",
    description: "Instrumento a través del cual se planifica el uso y manejo sostenible de los recursos naturales renovables de la cuenca hidrográfica.",
    objective: "Zonificar ambientalmente la cuenca y definir directrices para la preservación, restauración y uso sostenible de los recursos."
  },
  {
    acronym: "DAA",
    name: "Diagnóstico Ambiental de Alternativas",
    entity: "ANLA",
    description: "Evaluación comparativa de diferentes trazados o localizaciones para un proyecto antes de su diseño definitivo.",
    objective: "Suministrar la información para evaluar y comparar las diferentes opciones bajo las cuales sea posible desarrollar el proyecto."
  },
  {
    acronym: "PUEAA",
    name: "Programa de Uso Eficiente y Ahorro del Agua",
    entity: "CARs / MinAmbiente",
    description: "Conjunto de proyectos y acciones obligatorias para todo concesionario de agua superficial o subterránea (Ley 373 de 1997).",
    objective: "Reducir pérdidas hídricas, implementar tecnologías ahorradoras y promover la conservación de fuentes abastecedoras."
  },
  {
    acronym: "PMAA",
    name: "Plan de Manejo Ambiental de Acuíferos",
    entity: "CARs",
    description: "Instrumento específico orientado a la protección, recarga y extracción sostenible en acuíferos vulnerables.",
    objective: "Evitar la sobreexplotación, el descenso del nivel piezométrico y la contaminación de las reservas de agua subterránea."
  },
  {
    acronym: "PSMV",
    name: "Plan de Saneamiento y Manejo de Vertimientos",
    entity: "Municipios / Empresas de Servicios Públicos",
    description: "Conjunto de programas, proyectos y actividades encaminados a avanzar en el saneamiento y tratamiento de aguas residuales.",
    objective: "Planificar obras de interceptores, colectores y plantas de tratamiento de aguas residuales (PTAR) urbanas."
  },
  {
    acronym: "PIGCCS",
    name: "Plan Integral de Cambio Climático Sectorial",
    entity: "Ministerios / Sectores Productivos",
    description: "Herramienta que define medidas prioritarias de mitigación de gases de efecto invernadero y adaptación al cambio climático.",
    objective: "Incorporar resiliencia climática y reducción de vulnerabilidad frente a sequías o precipitaciones extremas."
  },
  {
    acronym: "PGIRS",
    name: "Plan de Gestión Integral de Residuos Sólidos",
    entity: "Alcaldías Municipales",
    description: "Instrumento municipal de planificación para la gestión integral de residuos sólidos en el territorio.",
    objective: "Promover el aprovechamiento, reciclaje y disposición final adecuada protegiendo rondas hídricas de vertederos clandestinos."
  },
  {
    acronym: "PDA",
    name: "Plan Departamental de Agua",
    entity: "Gobernaciones / Gestores Departamentales",
    description: "Estrategia de articulación de recursos y proyectos para agua potable y saneamiento básico en municipios.",
    objective: "Aumentar coberturas, continuidad y calidad del agua en zonas urbanas y rurales de Colombia."
  },
  {
    acronym: "AVR",
    name: "Análisis de Vulnerabilidad y Riesgo",
    entity: "Gestión del Riesgo / CARs",
    description: "Evaluación probabilística de amenazas por avenidas torrenciales, crecientes súbitas e inundaciones lentas.",
    objective: "Determinar el riesgo sobre comunidades e infraestructuras y diseñar medidas estructurales y no estructurales."
  },
  {
    acronym: "ICA",
    name: "Índice de Calidad del Agua",
    entity: "IDEAM / CARs",
    description: "Indicador numérico normalizado que califica el estado de pureza o alteración de una corriente superficial.",
    objective: "Sintetizar múltiples parámetros fisicoquímicos en una escala de 0 a 1 para evaluar la salud del ecosistema acuático."
  }
];

export const BIBLIOGRAPHIC_RESOURCES: BibliographicResource[] = [
  {
    id: "hidrologia-villon",
    title: "Hidrología Estocástica",
    author: "Máximo Villón Béjar",
    institution: "Instituto Tecnológico de Costa Rica",
    image: "/images/book_hidrologia_villon.jpg",
    coreApplication: "Permite a WRE calcular con precisión los periodos de retorno para obras de infraestructura (puentes, presas, canales de riego), minimizando el riesgo de subdimensionamiento o sobrecostos innecesarios.",
    fullDetails: "Fundamento matemático para el análisis de series hidrológicas multianuales, distribución de probabilidad extremal (Gumbel, Pearson III, Log-Normal), generación sintética de caudales mensuales y cálculo de riesgos hidrológicos para vida útil de obras civiles.",
    keyTopics: ["Ajuste de funciones de densidad", "Test Kolmogorov-Smirnov", "Periodos de retorno", "Series sintéticas de precipitación"]
  },
  {
    id: "iber-guide",
    title: "Iber Applications Basic Guide",
    author: "Universidade da Coruña & GEAMA",
    institution: "Centro de Estudios Hidrográficos del CEDEX",
    image: "/images/book_iber_guide.jpg",
    coreApplication: "Mapas de Inundabilidad de Alta Precisión: A diferencia de la modelación 1D, Iber permite ver hacia dónde se desplaza el agua en terrenos llanos. Vital para delimitar rondas hídricas y zonas de riesgo.",
    fullDetails: "Modelo hidrodinámico bidimensional basado en las ecuaciones de Saint-Venant 2D mediante volúmenes finitos. Simulación de rotura de presas, transporte de sedimentos en suspensión, inundaciones en confluencias fluviales y zonas de llanura aluvial complejas.",
    keyTopics: ["Mallas no estructuradas", "Ecuaciones 2D Saint-Venant", "Cálculo de calados y velocidades", "Zonificación de rondas hídricas"]
  },
  {
    id: "ramalho-aguas",
    title: "Tratamiento de Aguas Residuales",
    author: "R.S. Ramalho",
    institution: "Université Laval, Quebec",
    image: "/images/book_ramalho_aguas.jpg",
    coreApplication: "Realizar diagnósticos de vertimientos, diseñar sistemas de tratamiento para comunidades rurales o proyectos agrícolas, y garantizar que los proyectos cumplan con la normativa de calidad de agua.",
    fullDetails: "Diseño riguroso de procesos unitarios: desarenadores, reactores biológicos de lodos activados, lagunas de estabilización, filtros anaeróbicos de flujo ascendente (FAFA) y sistemas de desinfección conforme a la Resolución 0631 de 2015 en Colombia.",
    keyTopics: ["Cinética bioquímica DBO/DQO", "Sistemas aerobios y anaerobios", "Sedimentación primaria y secundaria", "Cumplimiento normativo Res. 0631"]
  },
  {
    id: "chapra-quality",
    title: "Surface Water Quality Modeling",
    author: "Steven C. Chapra",
    institution: "Tufts University",
    image: "/images/book_chapra_surface.jpg",
    coreApplication: "Permisos de Vertimientos, Gestión de Aguas Subterráneas y Superficiales, Implementación de Software (QUAL2K) y Sostenibilidad Ambiental.",
    fullDetails: "Modelación matemática del balance de oxígeno disuelto (curva de déficit de Streeter-Phelps), ciclos biogeoquímicos de nitrógeno y fósforo, eutrofización en embalses y cálculo de la capacidad de asimilación de contaminantes para otorgamiento de licencias.",
    keyTopics: ["Modelación QUAL2K", "Déficit de Oxígeno Disuelto", "Cinética de Nutrientes", "Capacidad de Asimilación de Ríos"]
  },
  {
    id: "urban-drainage",
    title: "Urban Drainage (4th Edition)",
    author: "David Butler, Christopher Digman, Christos Makropoulos, John W. Davies",
    institution: "Imperial College London",
    image: "/images/book_urban_drainage.png",
    coreApplication: "Diseño y modelación de sistemas de drenaje pluvial y sanitario, Sistemas Urbanos de Drenaje Sostenible (SUDS), y prevención de anegamientos en cascos urbanos e infraestructura vial.",
    fullDetails: "Tratamiento moderno de la gestión de escorrentía en áreas impermeabilizadas. Dimensionamiento de cunetas, pozos de infiltración, tanques de tormenta y modelación numérica de redes complejas mediante motores hidrodinámicos como EPA-SWMM.",
    keyTopics: ["Sistemas SUDS", "Modelación EPA-SWMM", "Hidráulica de colectores pluviales", "Mitigación de anegamientos urbanos"]
  },
  {
    id: "debris-flow",
    title: "Debris-flow Hazards and Related Phenomena",
    author: "O. Hungr, M. Jakob, D.M. Cruden",
    institution: "Springer Praxis Books in Geophysical Sciences",
    image: "/images/book_debris_flow.jpg",
    coreApplication: "Evaluación y modelación de avenidas torrenciales, flujos de detritos y fenómenos de remoción en masa en cuencas de montaña andinas para planes de gestión del riesgo y licencias.",
    fullDetails: "Metodologías para la predicción de volúmenes de detritos, cálculo de velocidad de arrastre y delimitación de distancias de alcance (run-out). Esencial para estudios de amenaza y vulnerabilidad en quebradas de alta pendiente en Colombia.",
    keyTopics: ["Mapeo de avenidas torrenciales", "Reología de flujos densos", "Zonificación de amenaza y riesgo", "Obras de disipación torrencial"]
  }
];

export const TECHNICAL_PILLARS = [
  {
    title: "Excelencia Técnica & Rigor Numérico",
    desc: "Aplicamos modelos matemáticos e hidrodinámicos validados internacionalmente (Iber, HEC-RAS, MODFLOW, QUAL2K) para garantizar diagnósticos irrefutables.",
    icon: "calculator"
  },
  {
    title: "Sostenibilidad & Equilibrio Ecológico",
    desc: "Cada proyecto concilia la viabilidad productiva e infraestructural con la preservación estricta de rondas hídricas, acuíferos y biodiversidad.",
    icon: "leaf"
  },
  {
    title: "Cumplimiento Normativo Colombiano",
    desc: "Total apego al Decreto 1076/2015, guías ANLA, términos de referencia de CARs, resoluciones de vertimientos 0631 y directrices MinAmbiente.",
    icon: "shield"
  },
  {
    title: "Equipo Multidisciplinario Experto",
    desc: "Ingenieros civiles, especialistas en recursos hídricos, hidrogeólogos, biólogos, ingenieros ambientales y analistas GIS de amplia trayectoria.",
    icon: "users"
  }
];
