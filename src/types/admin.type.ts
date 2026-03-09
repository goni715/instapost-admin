import { TBlockStatus } from "./user.type";

export type AdminRole = "Support" | "Finance" | "Verifier";
export type AdminStatus = "Active" | "Disabled" | "Inactive";

export interface IAdmin {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  profileImg: string;
  status: TBlockStatus;
  createdAt: string;
}


export interface AuditLog {
  id: string;
  adminName: string;
  action: string;
  details: string;
  timestamp: string;
  adminId: string;
}
