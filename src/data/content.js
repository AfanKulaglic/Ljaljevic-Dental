// Centralizovani podaci za stomatološku ordinaciju
// Realna ordinacija: Specijalistička ordinacija za stomatološku protetiku vl. Ljaljević Emir
// Adresa: Bardakčije 23, Sarajevo

import {
  Stethoscope,
  Sparkles,
  Smile,
  Bone,
  Activity,
  Shield,
  Baby,
  Crown,
} from "lucide-react";

export const CLINIC = {
  name: "Ljaljević",
  fullName: "Specijalistička ordinacija za stomatološku protetiku sa polivalentnom stomatologijom — vl. Ljaljević Emir",
  tagline: "Specijalistička protetika i opšta stomatologija u Sarajevu",
  phone: "+387 33 567 890",
  phoneRaw: "+38733567890",
  whatsapp: "+387 61 567 890",
  email: "info@ljaljevic-dental.ba",
  address: "Bardakčije 23, 71000 Sarajevo",
  addressShort: "Bardakčije 23, Sarajevo",
  hours: [
    { day: "Pon – Pet", time: "09:00 – 19:00" },
    { day: "Subota", time: "09:00 – 14:00" },
    { day: "Nedjelja", time: "Pozivom" },
  ],
  mapsQuery: "Bardakčije 23, Sarajevo, Bosnia and Herzegovina",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const NAV_LINKS = [
  { label: "Usluge", href: "#usluge" },
  { label: "O nama", href: "#o-nama" },
  { label: "Rezultati", href: "#rezultati" },
  { label: "Tim", href: "#tim" },
  { label: "Tehnologija", href: "#tehnologija" },
  { label: "Kontakt", href: "#kontakt" },
];

export const TRUST_ITEMS = [
  "Specijalista za protetiku",
  "Metalokeramičke i cirkon krunice",
  "Totalne i parcijalne proteze",
  "Estetske restauracije",
  "Liječenje kanala korena",
  "Dječija stomatologija",
];

export const SERVICES = [
  {
    icon: Crown,
    title: "Protetika",
    slug: "protetika",
    description:
      "Cirkonske i metalokeramičke krunice, mostovi i proteze — vraćamo funkciju i estetiku osmijeha dugotrajnim rješenjima.",
    points: ["Cirkon i metalokeramičke krunice", "Mostovi i totalne proteze", "Besmetalne restauracije"],
    accent: "gold",
  },
  {
    icon: Sparkles,
    title: "Estetska stomatologija",
    slug: "estetika",
    description:
      "Kompozitne fasete, izbjeljivanje i poliranje — poboljšavamo oblik i boju zuba uz prirodan rezultat.",
    points: ["Kompozitne fasete", "Profesionalno izbjeljivanje", "Poliranje i estetske korekcije"],
    accent: "teal",
  },
  {
    icon: Activity,
    title: "Endodoncija",
    slug: "endodoncija",
    description:
      "Liječenje kanala korena zuba — gangrena, retretman neuspjelih kanala i spašavanje zuba koji izgledaju izgubljeno.",
    points: ["Liječenje kanala korena", "Retretman neuspjelih kanala", "Gangrena i pulpitis"],
    accent: "gold",
  },
  {
    icon: Stethoscope,
    title: "Konzervativna stomatologija",
    slug: "konzervativna",
    description:
      "Pregledi, intervencije, plombe i nadogradnje — stručno i povoljno, sa trajnim materijalima.",
    points: ["Kompozitne plombe", "Nadogradnje zuba", "Konsultacije i pregledi"],
    accent: "teal",
  },
  {
    icon: Bone,
    title: "Oralna hirurgija",
    slug: "hirurgija",
    description:
      "Ekstrakcije zuba, nivelacije alveolarne kosti i hirurško liječenje — bezbolno i stručno.",
    points: ["Ekstrakcije i vađenje umnjaka", "Nivelacija alveolarne kosti", "Hirurške intervencije"],
    accent: "gold",
  },
  {
    icon: Shield,
    title: "Parodontologija",
    slug: "parodontologija",
    description:
      "Kiretaže, drenaže i gingivektomija — liječenje bolesti desni i potpornog aparata zuba.",
    points: ["Kiretaže i drenaže", "Gingivektomija", "Liječenje paradentoze"],
    accent: "teal",
  },
  {
    icon: Baby,
    title: "Dječija stomatologija",
    slug: "djeca",
    description:
      "Zalivanje fisura, uklanjanje naslaga i plombe na mliječnim zubima — prvi pregled bez straha.",
    points: ["Zalivanje fisura", "Uklanjanje mekih naslaga", "Plombe na mliječnim zubima"],
    accent: "gold",
  },
  {
    icon: Smile,
    title: "Oralna medicina",
    slug: "oralna-medicina",
    description:
      "Dijagnostika i liječenje bolesti usne šupljine — od afti do leukoplakija, sa stručnom procjenom.",
    points: ["Dijagnostika sluzokože", "Liječenje afti i lezija", "Prevencija oralnih bolesti"],
    accent: "teal",
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "Godina iskustva" },
  { value: 8000, suffix: "+", label: "Zadovoljnih pacijenata" },
  { value: 95, suffix: "%", label: "Uspešnost tretmana" },
  { value: 6, suffix: "", label: "Disciplina na jednoj adresi" },
];

export const TEAM = [
  {
    name: "dr. Emir Ljaljević",
    role: "Specijalista stomatološke protetike",
    spec: "Protetika & Polivalentna stomatologija",
    bio: "Vlasnik ordinacije. Specijalista za cirkon i metalokeramičke krunice, mostove i proteze.",
    initials: "EL",
    accent: "teal",
  },
  {
    name: "dr. Amela Ljaljević",
    role: "Stomatolog — opšta praksa",
    spec: "Konzervativna stomatologija & Endodoncija",
    bio: "Liječenje kanala korena i konzervativne restauracije sa trajnim materijalima.",
    initials: "AL",
    accent: "gold",
  },
  {
    name: "dr. Mirza Hasanbegović",
    role: "Oralni hirurg",
    spec: "Oralna hirurgija & Ekstrakcije",
    bio: "Složene ekstrakcije i nivelacija alveolarne kosti — bezbolno i stručno.",
    initials: "MH",
    accent: "teal",
  },
  {
    name: "dr. Lejla Kovač",
    role: "Dječiji stomatolog",
    spec: "Dječija & Preventivna stomatologija",
    bio: "Zalivanje fisura i prvi pregledi bez straha za najmlađe pacijente.",
    initials: "LK",
    accent: "gold",
  },
];

export const TECHNOLOGY = [
  {
    title: "Intraoralni RTG",
    description: "Dentalni rendgen na licu mjesta — brza dijagnostika bez čekanja.",
  },
  {
    title: "Cirkon keramika",
    description: "Besmetalne krunice sa prirodnim probojem svjetlosti.",
  },
  {
    title: "Kompozitni materijali",
    description: "Trajne estetske plombe koje prate boju prirodnog zuba.",
  },
  {
    title: "Sterilizacija klase B",
    description: "Najviši standard dezinfekcije instrumenata — po EU propisu.",
  },
  {
    title: "Digitalna dijagnostika",
    description: "Pregled i plan terapije uz vizuelne pokazatelje.",
  },
  {
    title: "Lokalna anestezija",
    description: "Bezbolni zahvat uz najsavremenije anestetike.",
  },
];

export const BEFORE_AFTER = [
  {
    title: "Cirkonske krunice",
    desc: "Metal-free restauracije sa prirodnim probojem svjetlosti.",
    before: "Stare metalokeramičke krunice sa vidljivim metalnim rubom",
    after: "Cirkon krunice sa prirodnim prijelazom i bojom",
  },
  {
    title: "Kompozitne fasete",
    desc: "Korekcija boje i oblika bez skidanja zubne supstance.",
    before: "Zuti, nepravilni rezci sa popunjenim rubovima",
    after: "Prirodno bijeli, simetrični rezci sa kompozitnim facetama",
  },
  {
    title: "Totalna proteza",
    desc: "Povratak funkcije žvakanja i estetike osmijeha.",
    before: "Bezzubi kraj vilice sa starom labavom protezom",
    after: "Stabilna totalna proteza sa prirodnim izgledom",
  },
];

export const TESTIMONIALS = [
  {
    name: "Mirza Hasanbegović",
    role: "Pacijent od 2019.",
    quote:
      "Došao sam sa starim krunicama koje su propadale. Dr. Ljaljević mi je napravio cirkon krunice — izgledaju kao moji prirodni zubi, a prije su bili crni.",
    rating: 5,
  },
  {
    name: "Ana Ivanković-Latifović",
    role: "Kompozitne fasete",
    quote:
      "Bojala sam se da će zubi izgledati vještački. Dobila sam prirodan osmijeh u jednoj posjeti, bez skidanja zubne supstance.",
    rating: 5,
  },
  {
    name: "Porodica Marković",
    role: "Porodični pacijenti",
    quote:
      "Dvoje djece, suprug i ja ista ordinacija. Sin od 6 godina sam otvara usta — to je jedini argument koji mi treba.",
    rating: 5,
  },
  {
    name: "Sabanović Mensur",
    role: "Totalna proteza",
    quote:
      "Nakon godina sa labavom protezom, konačno mogu normalno jesti. Cijena je bila fer, sve transparentno.",
    rating: 5,
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Poziv i termin",
    desc: "Zovete, mi nalazimo termin u roku 48h. Hitni slučajevi isti dan.",
  },
  {
    step: "02",
    title: "Pregled i dijagnostika",
    desc: "RTG snimak, pregled i procjena stanja. Plan na licu mjesta.",
  },
  {
    step: "03",
    title: "Plan i ponuda",
    desc: "Dobijate pisani plan tretmana sa fiksnom cijenom — bez iznenađenja.",
  },
  {
    step: "04",
    title: "Tretman",
    desc: "Bezbolno uz lokalnu anesteziju i trajne materijale.",
  },
  {
    step: "05",
    title: "Kontrola",
    desc: "Redovne kontrole osiguravaju trajnost rada.",
  },
];

export const FAQ = [
  {
    q: "Radite li hitne preglede?",
    a: "Da. Zovete na glavni broj prije 19h, a za akutni bol i traume nalazimo termin isti dan.",
  },
  {
    q: "Koje vrste krunica radite?",
    a: "Radimo metalokeramičke, cirkonske i besmetalne krunice. Izbor zavisi od stanja zuba i vaših želja — preporuku dobijate nakon pregleda.",
  },
  {
    q: "Da li radite proteze?",
    a: "Da, izrađujemo parcijalne i totalne proteze, kao i skeletirane proteze. Protetika je naša primarna specijalnost.",
  },
  {
    q: "Radite li s djecom?",
    a: "Da, imamo stomatologa za dječiju i preventivnu stomatologiju. Zalijevamo fisure, radimo plombe na mliječnim zubima i uklanjamo naslage.",
  },
  {
    q: "Da li je anestezija uključena?",
    a: "Da, lokalna anestezija je uključena u cijenu zahvata. Radimo bezbolno uz najsavremenije anestetike.",
  },
];
