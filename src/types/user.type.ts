export type TBlockStatus = "active" | "blocked";

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  joinDate: string;
  image?: string;
}

export type TViewUser = {
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar?: string;
  initials?: string;
  stats: {
    label: string;
    value: string | number;
  }[];
};

export type TViewCompany = {
  name: string;
  logo?: string;
  email: string;
  phone: string;
  location: string;
  plan: string;
  stats: {
    label: string;
    value: string | number;
  }[];
  accountOwner: {
    name: string;
    avatar?: string;
    initials?: string;
    email: string;
    phone: string;
  };
};
