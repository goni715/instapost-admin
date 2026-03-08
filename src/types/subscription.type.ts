export interface ISubscription {
  id: string;
  userName: string;
  image: string;
  email: string;
  status: "paid" | "expired" | "pending";
  plan: "Monthly" | "6 Months" | "Yearly";
  expirationDate: string;
  autoRenew: boolean;
  paymentProvider: "stripe" | "paypal" | "square" | "razorpay";
  invoiceUrl?: string;
  receiptUrl?: string;
  gracePeriodDays: number;
  gracePeriodEndDate?: string;
}
