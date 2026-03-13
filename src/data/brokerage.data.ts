import { IBrokerage } from "@/types/brokerage.type";


export const DUMMY_BROKERAGES: IBrokerage[] = [
  { id: "1", name: "Keller Williams" },
  { id: "2", name: "RE/MAX" },
  { id: "3", name: "John Doe" }
];

export const BROKERAGE_META_DATA = {
  page: 1,
  limit: 10,
  total: 3,
  totalPages: 1,
};
