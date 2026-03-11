export interface IInvoice {
  id: string;
  invoiceNo: string;
  orderId: string;
  type: string;
  orderDate: string;
  payment: "Paid" | "Unpaid";
}
