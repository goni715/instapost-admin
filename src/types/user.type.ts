export type UserStatus = "active" | "suspended";
export type KYCStatus = "verified" | "pending" | "rejected";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  userType: "Client" | "Provider";
  joinedDate: string;
  avatar?: string;
  status: UserStatus;
  kycStatus: KYCStatus;
  location: string;
  lastLogin: string;
}
