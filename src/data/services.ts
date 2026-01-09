export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  contraindications?: string[];
  durations: {
    minutes: number;
    price: string;
  }[];
  recommendedFrequency?: string;
}

export const services: ServiceData[] = [
  {
    id: "idrottsport",
    title: "Idrott / sport / terapeutisk massage",
    shortDescription:
      "Resultatinriktad massage som löser upp stelhet, förbättrar rörlighet och stöttar din återhämtning.",
    fullDescription:
      "En kraftfull massage som anpassas efter var du känner spänningar – oavsett om de kommer från träning, vardagsstress eller stillasittande. Behandlingen lindrar stelhet, förebygger skador och ger musklerna ny energi så att du kan prestera och må bättre.",
    benefits: [
      "Lindrar stelhet och muskelspänningar",
      "Ökar rörlighet och smidighet",
      "Snabbar upp återhämtningen efter träning",
      "Förebygger belastningsskador",
      "Ger ny energi och ork"
    ],
    durations: [
      { minutes: 20, price: "545 kr" },
      { minutes: 50, price: "945 kr" },
      { minutes: 80, price: "1 245 kr" },
      { minutes: 110, price: "1 645 kr" }
    ],
    recommendedFrequency: "Inför eller efter träning samt vid behov"
  },
  {
    id: "hybridmassage",
    title: "Hybridmassage – Anpassad för just dina behov",
    shortDescription:
      "Flexibel behandling där vi kombinerar tekniker för att skapa din perfekta massageupplevelse.",
    fullDescription:
      "Hybridmassage är ett skräddarsytt möte mellan klassisk, terapeutisk och avslappnande massage. Vi lyssnar in din kropp och väljer rätt teknik – från mjuka, lugna rörelser till djupare tryck – för att lösa upp spänningar, minska stress och ge dig total återhämtning.",
    benefits: [
      "Personligt anpassad behandling varje gång",
      "Skapar balans mellan avslappning och djupare arbete",
      "Ökar cirkulationen och minskar stress",
      "Mjukar upp ömma och stela områden",
      "Ger en skräddarsydd upplevelse"
    ],
    durations: [
      { minutes: 20, price: "545 kr" },
      { minutes: 50, price: "945 kr" },
      { minutes: 80, price: "1 245 kr" },
      { minutes: 110, price: "1 645 kr" }
    ],
    recommendedFrequency: "När du vill ha en massage som följer dagsformen"
  },
  {
    id: "klassisk",
    title: "Svensk Klassisk Massage",
    shortDescription:
      "Lugn och effektiv helkroppsmassage som mjukar upp musklerna och ger djup avkoppling.",
    fullDescription:
      "Svensk klassisk massage är perfekt när du vill varva ned och samtidigt få hjälp med spända muskler. Långa, rytmiska grepp förbättrar cirkulationen, minskar stress och lämnar kroppen lättare och mjukare.",
    benefits: [
      "Ger djup avslappning",
      "Mjukar upp stela muskler",
      "Förbättrar blodcirkulationen",
      "Sänker stressnivåer",
      "Bidrar till bättre sömn"
    ],
    durations: [
      { minutes: 20, price: "545 kr" },
      { minutes: 50, price: "945 kr" },
      { minutes: 80, price: "1 245 kr" },
      { minutes: 110, price: "1 645 kr" }
    ],
    recommendedFrequency: "Varannan till var fjärde vecka eller vid behov"
  },
  {
    id: "spa",
    title: "SPA massage",
    shortDescription:
      "Mjuk, omsorgsfull massage med varm olja som får stressen att smälta bort.",
    fullDescription:
      "En spa-inspirerad upplevelse med långa, följsamma rörelser och varm olja. Perfekt när du behöver en paus från vardagen, vill hitta lugn och ge kroppen tid att återhämta sig.",
    benefits: [
      "Djup avslappning för kropp och sinne",
      "Minskar stress och oro",
      "Förbättrar återhämtning och sömn",
      "Ger mjukare hud och bättre cirkulation",
      "Skapar en lyxig stund för dig själv"
    ],
    durations: [
      { minutes: 50, price: "945 kr" },
      { minutes: 80, price: "1 245 kr" },
      { minutes: 110, price: "1 645 kr" }
    ],
    recommendedFrequency: "När du behöver återhämtning eller vardagslyx"
  },
  {
    id: "gravid",
    title: "Gravidmassage – Klassisk eller Terapeutisk",
    shortDescription:
      "Skonsam massage som lindrar vanliga graviditetsbesvär och ger kroppen ny energi.",
    fullDescription:
      "Gravidmassagen anpassas efter trimester och dina önskemål. Vi arbetar varsamt med att lindra ryggont, svullnad och trötthet samtidigt som du får en stund av lugn och avkoppling.",
    benefits: [
      "Lindrar rygg-, höft- och bäckensmärta",
      "Minskar svullnad i ben och fötter",
      "Ger bättre sömn och avslappning",
      "Ökar cirkulationen på ett skonsamt sätt",
      "Ger tid för återhämtning under graviditeten"
    ],
    durations: [
      { minutes: 20, price: "545 kr" },
      { minutes: 50, price: "945 kr" },
      { minutes: 80, price: "1 245 kr" }
    ],
    recommendedFrequency: "Vid behov under hela graviditeten"
  },
  {
    id: "hotstone",
    title: "Hot Stone Massage",
    shortDescription:
      "Värmande massage där heta stenar och mjuka rörelser släpper på spänningar på djupet.",
    fullDescription:
      "Hot stone-massage kombinerar varma lavastenar med behagliga massagegrepp. Värmen mjukar upp musklerna, ökar cirkulationen och ger en omslutande känsla av lugn.",
    benefits: [
      "Djup avslappning och stresslindring",
      "Ökar blodcirkulationen",
      "Löser upp spända muskler",
      "Ger en varm och trygg upplevelse",
      "Perfekt när du behöver återhämtning"
    ],
    durations: [
      { minutes: 50, price: "995 kr" },
      { minutes: 80, price: "1 395 kr" },
      { minutes: 110, price: "1 695 kr" }
    ],
    recommendedFrequency: "När du vill unna dig extra värme och avslappning"
  },
  {
    id: "detox",
    title: "Detox & Cirkulationsmassage",
    shortDescription:
      "En djupgående behandling som stimulerar flödet och hjälper kroppen att rensa ut.",
    fullDescription:
      "En specialiserad massage som fokuserar på att öka cirkulationen och stötta kroppens naturliga detoxprocesser. Perfekt för att reducera svullnad och ge ny lätthet i kroppen.",
    benefits: [
      "Ökar blod- och lymfstatus",
      "Reducerar vätskeansamlingar",
      "Främjar utrensning av slaggprodukter",
      "Ger huden mer lyster och spänst",
      "Motverkar stelhet i bindväven"
    ],
    durations: [{ minutes: 50, price: "995 kr" }],
    recommendedFrequency: "Som kur eller när kroppen känns tung och svullen"
  },
  {
    id: "skräddarsydd-lyx",
    title: "Skräddarsydd LYX – Kundens Val",
    shortDescription:
      "Vår mest exklusiva behandling där du får totalt fokus och maximal återhämtning.",
    fullDescription:
      "En generös behandlingstid på 140 minuter där vi kombinerar de allra bästa teknikerna helt efter dina önskemål. En komplett upplevelse för både kropp och själ.",
    benefits: [
      "Maximal tid för djupgående arbete",
      "Fullständig avslappning",
      "Kombination av flera massagetekniker",
      "Personligt anpassat in i minsta detalj",
      "Den ultimata återhämtningen"
    ],
    durations: [{ minutes: 140, price: "2 345 kr" }],
    recommendedFrequency: "När du behöver en total nollställning"
  }
];
