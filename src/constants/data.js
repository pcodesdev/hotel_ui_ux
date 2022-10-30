import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "Ksh 56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "Ksh 59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "Ksh 44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "Ksh 31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "Ksh 26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "Ksh 20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "Ksh 16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "Ksh 10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "Ksh 31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "Ksh 26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
