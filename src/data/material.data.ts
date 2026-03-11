import { IMaterial } from "@/types/material.type";

export const DUMMY_MATERIALS: IMaterial[] = [
  { id: "1", name: "Aluminum Sheet", price: 120 },
  { id: "2", name: "Acrylic Board", price: 95 },
  { id: "3", name: "PVC Foam Board", price: 75 },
  { id: "4", name: "LED Strip", price: 45 },
  { id: "5", name: "Steel Frame", price: 150 },
  { id: "6", name: "Glass Panel", price: 180 },
  { id: "7", name: "Vinyl Sticker Roll", price: 60 },
  { id: "8", name: "Wooden Panel", price: 110 },
  { id: "9", name: "Backlit Flex", price: 85 },
  { id: "10", name: "LED Driver", price: 55 },
];

export const MATERIAL_META_DATA = {
  page: 1,
  limit: 10,
  total: 10,
  totalPages: 1,
};
