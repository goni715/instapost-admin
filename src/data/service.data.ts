import { IService } from "@/types/service.type";

export const DUMMY_SERVICES: IService[] = [
  { id: "1", name: "2 Hole Top", price: 120 },
  { id: "2", name: "2 hole slider", price: 95 },
  { id: "3", name: "Side Hole", price: 75 },
];

export const SERVICE_META_DATA = {
  page: 1,
  limit: 10,
  total: 3,
  totalPages: 1,
};
