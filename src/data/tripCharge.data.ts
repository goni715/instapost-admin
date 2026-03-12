import { ITripCharge } from "@/types/tripCharge.type";

export const DUMMY_TRIP_CHARGES: ITripCharge[] = [
  { id: "1", area: "0-10 km", amount: 120 },
  { id: "2", area: "10-15 km", amount: 95 },
];

export const TRIP_CHARGE_META_DATA = {
  page: 1,
  limit: 10,
  total: 2,
  totalPages: 1,
};
