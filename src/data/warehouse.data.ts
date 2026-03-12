import { ISingleWarehouse, IWarehouse } from "@/types/warehouse.type";

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

export const DUMMY_SINGLE_WAREHOUSE_DATA: ISingleWarehouse[] = [
  { id: "1", name: "Nm sujon", designation: "Installer" },
  { id: "2", name: "Osman Goni", designation: "Warehouse Manger" },
  { id: "3", name: "Efaz", designation: "Installer" },
];

export const SINGLE_WAREHOUSE_META_DATA = {
  page: 1,
  limit: 10,
  total: 3,
  totalPages: 1
};


