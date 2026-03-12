import { IWarehouse } from "@/types/warehouse.type";

export const DUMMY_WAREHOUSES: IWarehouse[] = [
  { id: "1", name: "Warehouse-1", location: "location-1" },
  { id: "2", name: "Warehouse-2", location: "location-2" },
];

export const WAREHOUSE_META_DATA = {
  page: 1,
  limit: 10,
  total: 2,
  totalPages: 1
};
