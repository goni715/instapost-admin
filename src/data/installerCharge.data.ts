import { IInstallerCharge } from "@/types/installerCharge.type";

export const DUMMY_INSTALLER_CHARGES: IInstallerCharge[] = [
  { id: "1", type: "Install", amount: 120 },
  { id: "2", type: "Removals", amount: 95 },
];

export const INSTALLER_CHARGE_META_DATA = {
  page: 1,
  limit: 10,
  total: 2,
  totalPages: 1,
};
