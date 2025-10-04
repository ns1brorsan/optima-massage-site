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
    id: "klassisk",
    title: "Klassisk massage",
    shortDescription: "Traditionell svensk massage för avslappning och återhämtning.",
    fullDescription: "Klassisk massage är en mjuk och avslappnande behandling som använder långa, flytande rörelser för att förbättra cirkulationen, minska muskelspänningar och främja djup avkoppling. Perfekt för dig som vill ha en helkroppsbehandling eller fokusera på specifika områden.",
    benefits: [
      "Förbättrad blodcirkulation",
      "Minskad muskelspänning",
      "Ökad flexibilitet",
      "Stressreducering och avslappning",
      "Förbättrad sömnkvalitet"
    ],
    contraindications: [
      "Akut inflammation",
      "Feber",
      "Öppna sår"
    ],
    durations: [
      { minutes: 45, price: "650 kr" },
      { minutes: 60, price: "850 kr" },
      { minutes: 90, price: "1 200 kr" }
    ],
    recommendedFrequency: "Varje 2-4 vecka för underhåll"
  },
  {
    id: "djupgaende",
    title: "Djupgående massage",
    shortDescription: "Intensiv behandling för kroniska spänningar och djupa muskelgrupper.",
    fullDescription: "Djupgående massage arbetar med djupare lager av muskulaturen med hjälp av långsammare rörelser och större tryck. Idealisk för dig med kroniska spänningar, smärta eller för idrottsutövare som behöver intensivare behandling.",
    benefits: [
      "Löser upp djupt sittande spänningar",
      "Lindrar kronisk smärta",
      "Förbättrar rörligheten",
      "Återställer muskulär balans",
      "Förebygger skador"
    ],
    contraindications: [
      "Nyligen opererad",
      "Osteoporos",
      "Blodförtunnande medicin"
    ],
    durations: [
      { minutes: 60, price: "900 kr" },
      { minutes: 75, price: "1 100 kr" },
      { minutes: 90, price: "1 300 kr" }
    ],
    recommendedFrequency: "Varje 1-2 vecka vid akuta besvär"
  },
  {
    id: "idrott",
    title: "Idrottsmassage",
    shortDescription: "Specialiserad massage för aktiva och idrottsutövare.",
    fullDescription: "Idrottsmassage kombinerar olika tekniker för att förbereda kroppen inför aktivitet, främja återhämtning eller behandla idrottsrelaterade skador. Behandlingen anpassas efter dina specifika behov och träningsintensitet.",
    benefits: [
      "Förbättrad prestation",
      "Snabbare återhämtning",
      "Skadeförebyggande",
      "Ökad flexibilitet",
      "Minskad muskelstelhet"
    ],
    durations: [
      { minutes: 45, price: "700 kr" },
      { minutes: 60, price: "900 kr" },
      { minutes: 75, price: "1 100 kr" }
    ],
    recommendedFrequency: "1-2 gånger per vecka vid intensiv träning"
  },
  {
    id: "gravid",
    title: "Gravidmassage",
    shortDescription: "Skonsam och trygg massage anpassad för gravida.",
    fullDescription: "Gravidmassage är speciellt utformad för att lindra de vanliga besvären under graviditeten såsom ryggvärk, svullna ben och trötthet. Behandlingen utförs i säkra positioner med särskild hänsyn till din och barnets hälsa.",
    benefits: [
      "Lindrar rygg- och bäckensmärta",
      "Minskar svullnad i ben och fötter",
      "Förbättrar sömnen",
      "Reducerar stress och ångest",
      "Ökar välbefinnandet"
    ],
    contraindications: [
      "Högrisksgraviditet",
      "Första trimestern (konsultera läkare)",
      "Svår högt blodtryck"
    ],
    durations: [
      { minutes: 45, price: "700 kr" },
      { minutes: 60, price: "900 kr" }
    ],
    recommendedFrequency: "Varje 2-3 vecka under graviditeten"
  },
  {
    id: "triggerpunkt",
    title: "Triggerpunktsterapi",
    shortDescription: "Precis behandling av smärtpunkter och muskelknutor.",
    fullDescription: "Triggerpunktsterapi fokuserar på att hitta och behandla triggerpunkter - små knutor i muskulaturen som orsakar smärta och begränsad rörlighet. Genom precist tryck och stretching löses dessa punkter upp för långvarig smärtlindring.",
    benefits: [
      "Effektiv smärtlindring",
      "Löser muskelknutor",
      "Förbättrar rörlighet",
      "Lindrar huvudvärk och migrän",
      "Behandlar referred pain"
    ],
    contraindications: [
      "Akut skada",
      "Inflammation i behandlingsområdet"
    ],
    durations: [
      { minutes: 30, price: "500 kr" },
      { minutes: 45, price: "700 kr" },
      { minutes: 60, price: "900 kr" }
    ],
    recommendedFrequency: "Varje vecka tills smärtan avtar"
  },
  {
    id: "avslappning",
    title: "Avslappningsmassage",
    shortDescription: "Lugn och skonsam massage för total avkoppling.",
    fullDescription: "Avslappningsmassage är en mjuk och lugnande behandling som fokuserar på att skapa djup avslappning för både kropp och sinne. Med lätta, rytmiska rörelser och behagligt tryck får du släppa alla spänningar.",
    benefits: [
      "Djup mental avslappning",
      "Minskar stress och ångest",
      "Förbättrar sömnkvalitet",
      "Sänker blodtryck",
      "Ökar välbefinnande"
    ],
    durations: [
      { minutes: 60, price: "800 kr" },
      { minutes: 75, price: "1 000 kr" },
      { minutes: 90, price: "1 200 kr" }
    ],
    recommendedFrequency: "Efter behov, ofta 1-2 gånger per månad"
  }
];