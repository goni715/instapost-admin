export type TOrderType =
  | "Sign install"
  | "Removals"
  | "Open house"
  | "Media service"
  | "Sign change"
  | "Sign Printing";

export type TOrderStatus =
  | "Pending"
  | "Scheduled"
  | "Assigned"
  | "Completed"
  | "Canceled";

export type IOrder = {
  id: string;
  type: TOrderType;
  address: string;
  agent: string;
  orderDate: string;
  dueDate: string;
  price: string;
  status: TOrderStatus;
};
