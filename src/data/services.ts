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
    shortDescription: "Resultatinriktad massage som löser upp stelhet och stöttar återhämtning.",
    fullDescription: "En kraftfull massage som anpassas efter var du känner spänningar. Behandlingen lindrar stelhet, förebygger skador och ger musklerna ny energi.",
    benefits: ["Lindrar muskelspänningar", "Ökar rörlighet", "Snabbar upp återhämtning", "Förebygger skador"],
    durations: [
      { minutes: 20, price: "545 kr" },
      { minutes: 50, price: "945 kr" },
      { minutes: 80, price: "1 245 kr" },
      { minutes: 110, price: "1 645 kr" }
    ],
    recommendedFrequency: "Vid behov eller i samband med träning"
  },
  {
    id: "hybridmassage",
    title: "Hybridmassage – Anpassad för just dina behov",
    shortDescription: "Flexibel behandling där vi kombinerar tekniker för din perfekta upplevelse.",
    fullDescription: "En skräddarsydd kombination av klassisk, terapeutisk och avslappnande massage baserat på din kropps status.",
    benefits: ["Personligt anpassad", "Minskar stress", "Ökar cirkulationen", "Djupgående avslappning"],
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
    shortDescription: "Lugn och effektiv massage som mjukar upp musklerna och ger avkoppling.",
    fullDescription: "Klassisk massage med långa, rytmiska grepp som förbättrar cirkulationen och sänker stressnivåerna.",
    benefits: ["Djup avslappning", "Mjukar upp stela muskler", "Förbättrar sömn", "Sänker stress"],
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
    fullDescription: "En lyxig upplevelse med fokus på lugn och återhämtning med hjälp av varma oljor.",
    benefits: ["Total avkoppling", "Minskar oro", "Mjukare hud", "Vardagslyx"],
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
    fullDescription: "Anpassad behandling som lindrar ryggont och svullnad under graviditetens olika stadier.",
    benefits: ["Lindrar bäckensmärta", "Minskar svullnad", "Bättre sömn", "Trygg miljö"],
    durations: [
      { minutes: 20, price: "545 kr" },
      { minutes: 50, price: "945 kr" },
      { minutes: 80, price: "1 245 kr" }
    ]
  },
  {
    id: "hotstone",
    title: "Hot Stone Massage",
    shortDescription: "Värmande massage med heta stenar som löser spänningar på djupet.",
    fullDescription: "Kombination av varma lavastenar och massagegrepp för en omslutande känsla av lugn.",
    benefits: ["Djup värme", "Löser upp spänningar", "Ökad blodcirkulation", "Stresslindring"],
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
    fullDescription: "Effektiv behandling som mjukar upp bindväven och hjälper kroppen att rensa ut slaggprodukter.",
    benefits: ["Ökat lymfflöde", "Reducerar vätska", "Löser bindvävsspänningar", "Energigivande"],
    durations: [{ minutes: 50, price: "945 kr" }]
  },
  {
    id: "maderoterapi",
    title: "Maderoterapi (Trämassage)",
    shortDescription: "Formande behandling som boostar lymfsystemet och ger ny spänst.",
    fullDescription: "Träverktyg används för att skulptera kroppen och reducera celluliter på ett naturligt sätt.",
    benefits: ["Lymfdränage", "Reducerar celluliter", "Formar kroppen", "Naturlig metod"],
    durations: [
      { minutes: 50, price: "1 150 kr" },
      { minutes: 80, price: "1 450 kr" }
    ]
  },
  {
    id: "detox",
    title: "Detox & Cirkulationsmassage",
    shortDescription: "Djupgående behandling som stimulerar flödet och rensar ut.",
    fullDescription: "Fokuserar på att stötta kroppens naturliga detox och minska svullnad.",
    benefits: ["Minskar svullnad", "Stöttar utrensning", "Lyster i huden", "Lättare känsla"],
    durations: [{ minutes: 50, price: "995 kr" }]
  },
  {
    id: "skräddarsydd-lyx",
    title: "Skräddarsydd LYX – Kundens Val",
    shortDescription: "Vår mest exklusiva behandling för total återhämtning.",
    fullDescription: "Hela 140 minuter där vi kombinerar de tekniker du önskar för en total nollställning.",
    benefits: ["Maximal tid", "Skräddarsydd plan", "Total avslappning", "Exklusiv upplevelse"],
    durations: [{ minutes: 140, price: "2 345 kr" }]
  }
];
