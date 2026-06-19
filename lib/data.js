// ─────────────────────────────────────────────────────────────────────────
// EL CROCO — site content
//
// STREAMING LINKS: these are placeholders. Drop in the real artist/album URLs
// and every CTA across the site updates. (Search "REPLACE" to find them all.)
// ─────────────────────────────────────────────────────────────────────────

export const ARTIST = {
  name: "EL CROCO",
  location: "Miami, FL",
  roles: "Artist · Collector · Curator",
};

export const LINKS = {
  spotify: "https://open.spotify.com/", // REPLACE with El Croco artist/album URL
  apple: "https://music.apple.com/", // REPLACE with El Croco artist/album URL
  instagram: "https://instagram.com/", // REPLACE with El Croco handle
  youtube: "https://youtube.com/", // REPLACE (optional)
  inquiries: "mailto:hello@elcroco.com", // REPLACE — "Collect" / private acquisition inquiries
};

export const ALBUM = {
  title: "ORO PURO",
  year: "2026",
  // Museum-plaque medium line — the album described as a material object.
  medium: "Gold, Diamonds, Sound",
  cover: "/img/album/oro-puro.jpg",
  spotify: LINKS.spotify, // REPLACE with the album URL specifically
  apple: LINKS.apple, // REPLACE with the album URL specifically
};

// The two signature artifacts + the designer-toy line.
// Treated as museum acquisitions, never as products.
export const COLLECTION = [
  {
    title: "Iced Croc",
    edition: "Singular work · White diamonds, gold",
    medium: "Diamond-encrusted sculpture on pedestal",
    image: "/img/collection/iced-croc.jpg",
  },
  {
    title: "CrocoDice",
    edition: "Pair · Crystal, gold, reptilian eye",
    medium: "Collectible object",
    image: "/img/collection/dice.jpg",
  },
  {
    title: "Croco Figures",
    edition: "Designer toy series · Blank & Graffiti editions",
    medium: "Cast vinyl",
    image: "/img/collection/toys.jpg",
  },
];

// Editorial archive — large image compositions, minimal captions.
export const GALLERY = [
  { image: "/img/gallery/g-blue-sky.jpg", caption: "Blue Sky" },
  { image: "/img/gallery/g-troll-tag.jpg", caption: "Troll Tag" },
  { image: "/img/gallery/g-orange-sky.jpg", caption: "Orange Sky" },
  { image: "/img/gallery/g-el-cucuy.jpg", caption: "El Cucuy" },
  { image: "/img/gallery/g-evening.jpg", caption: "Evening" },
  { image: "/img/gallery/g-la-paletera.jpg", caption: "La Paletera" },
];

// Discography. Track titles inferred from artwork filenames — correct freely.
export const TRACKS = [
  { title: "Aye Aye A.I.", image: "/img/music/aye-aye-ai.jpg" },
  { title: "Aye Aye A.I.", note: "Nyla Mix", image: "/img/music/aye-aye-ai-nyla.jpg" },
  { title: "Blue Sky", image: "/img/music/blue-sky.jpg" },
  { title: "El Cucuy", image: "/img/music/el-cucuy.jpg" },
  { title: "Este Robot No Sabe Bailar", image: "/img/music/este-robot.jpg" },
  { title: "Evening", image: "/img/music/evening.jpg" },
  { title: "Everybody's Hopping", image: "/img/music/everybodys-hopping.jpg" },
  { title: "Kind Face", image: "/img/music/kind-face.jpg" },
  { title: "La Paletera", image: "/img/music/la-paletera.jpg" },
  { title: "Let's Go", image: "/img/music/lets-go.jpg" },
  { title: "Madera", image: "/img/music/madera.jpg" },
  { title: "Orange Sky", image: "/img/music/orange-sky.jpg" },
  { title: "Sigue Luchando", image: "/img/music/sigue-luchando.jpg" },
  { title: "Troll Tag", image: "/img/music/troll-tag.jpg" },
];

// Hero artifacts — slow cross-fade between the two signature objects.
export const HERO_ARTIFACTS = [
  { image: "/img/hero/iced-croc.jpg", alt: "Iced Croc — diamond-encrusted crocodile sculpture on a museum pedestal" },
  { image: "/img/hero/dice.jpg", alt: "Croco Dice — crystal dice with gold detailing and a reptilian eye" },
];
