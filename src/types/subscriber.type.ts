export type TPlan = "Premium" | "Gold" | "Basic";

export interface ISubscriber {
  id: string;
  name: string;
  email: string;
  plan: TPlan;
  phone: string;
  joinDate: string;
  image?: string;
}
