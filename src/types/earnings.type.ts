export interface IEarnings {
  id: string;
  reqId: string;
  providerName: string;
  amount: number;
  requestDate: string;
  status: "pending" | "approved" | "rejected" | "completed";
  providerImage?: string;
  payoutMethod?: "bank_transfer" | "paypal" | "stripe" | "check";
  bankDetailsStatus?: "verified" | "pending" | "unverified";
  fees?: number;
  grossAmount?: number;
  netAmount?: number;
  batchId?: string;
  batchStatus?: "pending" | "approved" | "processing" | "completed";
}
