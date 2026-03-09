import { ReactNode } from "react";

export type TChildren = {
  children: ReactNode;
};

export interface IParam {
  name: string;
  value: string;
}

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
