export interface IJob {
  id: string;
  title: string;
  customerName: string;
  image: string;
  category: string;
  price: number;
  preferredDate: string;
  status: "pending" | "in-progress" | "completed" | "cancelled";
}

export type TAttachment = {
  id: string;
  name: string;
  type: string;
};

export interface ISingleJob {
  id: string;
  title: string;
  customerName: string;
  image: string;
  category: string;
  price: number;
  dueDate: string;
  status: "pending" | "in-progress" | "completed";
  providerAssigned?: string;
  location?: string;
  jobTimeline?: string;
  disputeFlag?: boolean;
  paymentStatus?: "escrow" | "paid" | "refund";
  attachments?: TAttachment[];
}
