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
    shortDescription: "Resultatinriktad massage som löser upp stelhet och stöttar din återhämtning.",
    fullDescription: "En kraftfull massage som anpassas efter var du känner spänningar. Behandlingen lindrar stelhet, förebygger skador och ger musklerna ny energi.",
    benefits: [
      "Lindrar stelhet och muskelspänningar",
      "Ökar rörlighet och smidighet",
      "Snabbar upp återhämtningen efter träning",
      "Förebygger belastningsskador"
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
    shortDescription: "Flexibel behandling där vi kombinerar tekniker för din perfekta massageupplevelse.",
    fullDescription: "Hybridmassage är ett skräddarsytt möte mellan klassisk, terapeutisk och avslappnande massage baserat på din kropps aktuella behov.",
    benefits: [
      "Personligt anpassad behandling",
      "Balans mellan avslappning och djupare arbete",
      "Minskar stress",
      "Ökar cirkulationen"
    ],
    durations: [
      { minutes: 20, price: "545 kr" },
      { minutes: 50, price: "945 kr" },
      { minutes: 80, price: "1 245 kr" },
      { minutes: 110, price: "1 645 kr" }
    ]
  },
  {
    id: "klassisk",
    title: "Svensk Klassisk Massage",
    shortDescription: "Lugn och effektiv massage som mjukar upp musklerna och ger djup avkoppling.",
    fullDescription: "Klassisk massage med rytmiska grepp som förbättrar cirkulationen, minskar stress och lämnar kroppen mjukare.",
    benefits: [
      "Ger djup avslappning",
      "Mjukar upp stela muskler",
      "Förbättrar blodcirkulationen",
      "Sänker stressnivåer"
    ],
    durations: [
      { minutes: 20, price: "545 kr" },
      { minutes: 50, price: "945 kr" },
      { minutes: 80, price: "1 245 kr" },
      { minutes: 110, price: "1 645 kr" }
    ]
  },
  {
    id: "spa",
    title: "SPA massage",
    shortDescription: "Mjuk massage med varm olja som får stressen att smälta bort.",
    fullDescription: "En lyxig och avslappnande upplevelse med långa, följsamma rörelser och varm olja för total återhämtning.",
    benefits: [
      "Total avkoppling för kropp och sinne",
      "Minskar stress och oro",
      "Förbättrar sömnen",
      "Vardagslyx"
    ],
    durations: [
      { minutes: 50, price: "945 kr" },
      { minutes: 80, price: "1 245 kr" },
      { minutes: 110, price: "1 645 kr" }
    ]
  },
  {
    id: "gravid",
    title: "Gravidmassage – Klassisk eller Terapeutisk",
    shortDescription: "Skonsam massage som lindrar vanliga graviditetsbesvär.",
    fullDescription: "Anpassad behandling som lindrar ryggont, svullnad och trötthet under graviditetens olika stadier.",
    benefits: [
      "Lindrar rygg- och bäckensmärta",
      "Minskar svullnad i ben och fötter",
      "Bättre sömn",
      "Trygg och avslappnad miljö"
    ],
    durations: [
      { minutes: 20, price: "545 kr" },
      { minutes: 50, price: "945 kr" },
      { minutes: 80, price: "1 245 kr" }
    ]
  },
  {
    id: "hotstone",
    title: "Hot Stone Massage",
    shortDescription: "Värmande massage där heta stenar löser på spänningar på djupet.",
    fullDescription: "Kombinerar varma lavastenar med mjuka massagegrepp för en omslutande känsla av lugn och värme.",
    benefits: [
      "Djup avslappning",
      "Ökar blodcirkulationen",
      "Löser upp spända muskler",
      "Perfekt för kalla dagar"
    ],
    durations: [
      { minutes: 50, price: "995 kr" },
      { minutes: 80, price: "1 395 kr" },
      { minutes: 110, price: "1 695 kr" }
    ]
  },
  {
    id: "koppning",
    title: "Koppningsmassage",
    shortDescription: "Vakuumkoppar som stimulerar cirkulationen och frigör spänningar.",
    fullDescription: "Med hjälp av koppar ökar vi blodflödet och mjukar upp bindväven för att rensa ut slaggprodukter.",
    benefits: [
      "Stimulerar lymfsystemet",
      "Löser upp djupa spänningar",
      "Minskar vätskeansamling",
      "Ger en lättare känsla i kroppen"
    ],
    durations: [
      { minutes: 50, price: "945 kr" }
    ]
  },
  {
    id: "maderoterapi",
    title: "Maderoterapi (Trämassage)",
    shortDescription: "Formande träbehandling som boostar lymfsystemet och ger ny spänst.",
    fullDescription: "Specialdesignade träverktyg används för att skulptera kroppen, minska celluliter och boosta cirkulationen.",
    benefits: [
      "Främjar lymfdränage",
      "Reducerar celluliter",
      "Skulpterar och formar kroppen",
      "Naturlig metod för spänst"
    ],
    durations: [
      { minutes: 50, price: "1 150 kr" },
      { minutes: 80, price: "1 450 kr" }
    ]
  },
  {
    id: "detox",
    title: "Detox & Cirkulationsmassage",
    shortDescription: "Djupgående behandling som stimulerar flödet och rensar ut.",
    fullDescription: "Specialiserad massage för att öka cirkulationen och stötta kroppens naturliga utrensningsprocesser.",
    benefits: [
      "Minskar svullnad",
      "Stöttar detox",
      "Ger huden mer lyster",
      "Motverkar stelhet"
    ],
    durations: [
      { minutes: 50, price: "995 kr" }
    ]
  },
  {
    id: "skräddarsydd-lyx",
    title: "Skräddarsydd LYX – Kundens Val",
    shortDescription: "Vår mest exklusiva behandling för total återhämtning.",
    fullDescription: "Hela 140 minuter där vi kombinerar de allra bästa teknikerna helt efter dina önskemål.",
    benefits: [
      "Maximal tid för återhämtning",
      "Fullständigt personligt anpassad",
      "Total avslappning",
      "Den ultimata lyxen"
    ],
    durations: [
      { minutes: 140, price: "2 345 kr" }
    ]
  }
];
