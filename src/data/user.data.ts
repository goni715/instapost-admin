import { IUser, TViewUser } from "@/types/user.type";

export const DUMMY_USERS: IUser[] = [
  {
    id: "1",
    name: "Nm Sujon",
    email: "nsujon8@gmail.com",
    role: "Agent",
    phone: "+8564564654",
    joinDate: "02/20/2026",
  },
  {
    id: "2",
    name: "Nm Sujon",
    email: "nsujon8@gmail.com",
    role: "Team Lead",
    phone: "+8564564654",
    joinDate: "02/20/2026",
  },
  {
    id: "3",
    name: "Nm Sujon",
    email: "nsujon8@gmail.com",
    role: "Assistant",
    phone: "+8564564654",
    joinDate: "02/20/2026",
  },
  {
    id: "4",
    name: "Nm Sujon",
    email: "nsujon8@gmail.com",
    role: "Installer",
    phone: "+8564564654",
    joinDate: "02/20/2026",
  },
  {
    id: "5",
    name: "Nm Sujon",
    email: "nsujon8@gmail.com",
    role: "Warehouse manager",
    phone: "+8564564654",
    joinDate: "02/20/2026",
  },
  {
    id: "6",
    name: "Insta sign tracker",
    email: "nsujon8@gmail.com",
    role: "Sign company",
    phone: "+8564564654",
    joinDate: "02/20/2026",
  },
  {
    id: "7",
    name: "John Carter",
    email: "john@gmail.com",
    role: "Agent",
    phone: "+880171234567",
    joinDate: "02/19/2026",
  },
  {
    id: "8",
    name: "Sarah Ahmed",
    email: "sarah@gmail.com",
    role: "Assistant",
    phone: "+880171234568",
    joinDate: "02/18/2026",
  },
  {
    id: "9",
    name: "Michael Brown",
    email: "michael@gmail.com",
    role: "Team Lead",
    phone: "+880171234569",
    joinDate: "02/18/2026",
  },
  {
    id: "10",
    name: "Daniel Smith",
    email: "daniel@gmail.com",
    role: "Installer",
    phone: "+880171234560",
    joinDate: "02/17/2026",
  },
  {
    id: "11",
    name: "Emma Watson",
    email: "emma@gmail.com",
    role: "Agent",
    phone: "+880171234561",
    joinDate: "02/16/2026",
  },
  {
    id: "12",
    name: "Olivia Taylor",
    email: "olivia@gmail.com",
    role: "Assistant",
    phone: "+880171234562",
    joinDate: "02/15/2026",
  },
  {
    id: "13",
    name: "James Wilson",
    email: "james@gmail.com",
    role: "Team Lead",
    phone: "+880171234563",
    joinDate: "02/15/2026",
  },
  {
    id: "14",
    name: "Liam Anderson",
    email: "liam@gmail.com",
    role: "Installer",
    phone: "+880171234564",
    joinDate: "02/14/2026",
  },
  {
    id: "15",
    name: "Sophia Lee",
    email: "sophia@gmail.com",
    role: "Agent",
    phone: "+880171234565",
    joinDate: "02/13/2026",
  },
  {
    id: "16",
    name: "Noah Martinez",
    email: "noah@gmail.com",
    role: "Warehouse manager",
    phone: "+880171234566",
    joinDate: "02/13/2026",
  },
  {
    id: "17",
    name: "Lucas Garcia",
    email: "lucas@gmail.com",
    role: "Assistant",
    phone: "+880171234567",
    joinDate: "02/12/2026",
  },
  {
    id: "18",
    name: "Mia Rodriguez",
    email: "mia@gmail.com",
    role: "Agent",
    phone: "+880171234568",
    joinDate: "02/11/2026",
  },
  {
    id: "19",
    name: "Ethan Clark",
    email: "ethan@gmail.com",
    role: "Installer",
    phone: "+880171234569",
    joinDate: "02/10/2026",
  },
  {
    id: "20",
    name: "Ava Lewis",
    email: "ava@gmail.com",
    role: "Sign company",
    phone: "+880171234570",
    joinDate: "02/09/2026",
  },
];
export const USER_META_DATA = {
  page: 1,
  limit: 10,
  totalPages: 2,
  total: 20,
};

export const ROLE_OPTIONS = [
  { label: "Agent", value: "Agent" },
  { label: "Team Lead", value: "Team Lead" },
  { label: "Assistant", value: "Assistant" },
  { label: "Installer", value: "Installer" },
  { label: "Warehouse manger", value: "Warehouse manger" },
  { label: "Sign company", value: "Sign company" },
];

export const DUMMUY_AGENT: TViewUser = {
  name: "Nm Sujon",
  role: "Agent",
  email: "jhon@gmail.com",
  phone: "+78765569900064",
  initials: "NS",
  stats: [
    { label: "Total Orders", value: "50" },
    { label: "Assistant", value: "1" },
    { label: "Office", value: "Real estate office" },
    { label: "Brokerage", value: "Brokerage office" },
  ],
};

export const DUMMY_TEAM_LEAD = {
  name: "Nm Sujon",
  role: "Team Lead",
  email: "jhon@gmail.com",
  phone: "+78765569900064",
  initials: "NS",
  stats: [
    { label: "Total Orders", value: "50" },
    { label: "Total Agent", value: "10" },
    { label: "Inventory Items", value: "100" },
    { label: "Office", value: "Real estate office" },
    { label: "Brokerage", value: "Brokerage office" },
  ],
};

export const DUMMY_WARE_HOUSE = {
  name: "Nm Sujon",
  role: "Warehouse manger",
  email: "jhon@gmail.com",
  phone: "+78765569900064",
  initials: "NS",
  stats: [{ label: "Warehouse", value: "Warehouse-01" }],
};

export const DUMMY_INSTALLER = {
  name: "Nm Sujon",
  role: "Installer",
  email: "jhon@gmail.com",
  phone: "+78765569900064",
  initials: "NS",
  stats: [
    { label: "Total Orders", value: "50" },
    { label: "Total Completed", value: "10" },
    { label: "Warehouse", value: "Warehouse-01" },
  ],
};

export const DUMMY_ASSISTANT = {
  name: "Nm Sujon",
  role: "Assistant",
  email: "jhon@gmail.com",
  phone: "+78765569900064",
  initials: "NS",
  stats: [
    { label: "Total Orders", value: "50" },
    { label: "Agent", value: "Sujon" },
    { label: "Office", value: "Real estate office" },
  ],
};

export const DUMMY_COMPANY = {
  name: "Inseasign Tracker",
  email: "jhon@gmail.com",
  phone: "+78765569900064",
  location: "Alabama, USA",
  plan: "Premium plan",
  stats: [
    { label: "Total Orders", value: "50" },
    { label: "Inventory Item", value: "100" },
    { label: "Completed Order", value: "50" },
    { label: "Total Staff", value: "50" },
  ],
  accountOwner: {
    name: "NM sujon",
    email: "jhon@gmail.com",
    phone: "+78765569900064",
    initials: "NM",
  },
};
