import { productionBrowserSourceMaps } from "../next.config";

const desserts = [
  {
    id: "1",
    name: "Tartufo",
    description: "nice",
    time: 20,
    category: "",
  },
  {
    id: "2",
    name: "Wackelpudding",
    description: "wackelt",
    time: 10,
    category: "pudding",
  },
  {
    id: "3",
    name: "Vla",
    description: "schön gelb",
    time: 1,
    category: "pudding",
  },
  {
    id: "4",
    name: "Schokoladen-Mousse",
    description: "classic",
    time: 20,
    category: "schokolade",
  },
];

export async function getAllDesserts() {
  return desserts;
}

export async function getDessertsById(id) {
  return desserts.find((dessert) => dessert.id === id);
}
