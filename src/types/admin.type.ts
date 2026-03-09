export type AdminRole = "Support" | "Finance" | "Verifier";
export type AdminStatus = "Active" | "Disabled" | "Inactive";

export interface IAdmin {
  fullName: ReactNode;
  profileImg: any;
  userId: any;
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  status: AdminStatus;
  lastLogin: string;
  avatar?: string;
  joinedDate: string;
  phone?: string;
}

export interface AuditLog {
  id: string;
  adminName: string;
  action: string;
  details: string;
  timestamp: string;
  adminId: string;
}
