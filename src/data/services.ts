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
      { minutes: 20, price: "449 kr" },
      { minutes: 50, price: "699 kr" },
      { minutes: 80, price: "999 kr" }
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
      { minutes: 20, price: "449 kr" },
      { minutes: 50, price: "699 kr" },
      { minutes: 80, price: "999 kr" }
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
      { minutes: 20, price: "449 kr" },
      { minutes: 50, price: "699 kr" },
      { minutes: 80, price: "999 kr" }
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
      { minutes: 20, price: "449 kr" },
      { minutes: 50, price: "699 kr" },
      { minutes: 80, price: "999 kr" }
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
      { minutes: 20, price: "449 kr" },
      { minutes: 50, price: "699 kr" },
      { minutes: 80, price: "949 kr" }
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
      { minutes: 50, price: "799 kr" },
      { minutes: 80, price: "999 kr" },
      { minutes: 110, price: "1 399 kr" }
    ],
    recommendedFrequency: "När du vill unna dig extra värme och avslappning"
  },
  {
    id: "koppning",
    title: "Koppningsmassage",
    shortDescription:
      "Traditionell koppning som stimulerar blodcirkulationen och frigör spänningar.",
    fullDescription:
      "Med hjälp av vakuumkoppar ökar vi blodflödet, mjukar upp bindväven och hjälper kroppen att släppa på spänningar och slaggprodukter. En effektiv behandling för stela och trötta muskler.",
    benefits: [
      "Stimulerar lymfsystem och blodcirkulation",
      "Löser upp spända områden",
      "Kan minska celluliter och vätskeansamling",
      "Ger mer energi och lättare känsla",
      "Komplement till annan massage"
    ],
    durations: [{ minutes: 50, price: "799 kr" }],
    recommendedFrequency: "Som kur eller vid behov"
  },
  {
    id: "maderoterapi",
    title: "Maderoterapi",
    shortDescription:
      "Formande träbehandling som boostar lymfsystemet och ger kroppen ny spänst.",
    fullDescription:
      "Maderoterapi utförs med specialdesignade träverktyg som stimulerar lymfsystemet, minskar vätska och hjälper till att forma kroppen. Perfekt för dig som vill arbeta med cirkulation, celluliter och kroppskontur.",
    benefits: [
      "Främjar lymfdränage och detox",
      "Reducerar celluliter och vätskeansamling",
      "Skulpterar och formar kroppen",
      "Ger en energigivande känsla",
      "Kan kombineras med andra behandlingar"
    ],
    durations: [{ minutes: 45, price: "1 299 kr" }],
    recommendedFrequency: "Gärna som kur för bästa resultat"
  }
];
