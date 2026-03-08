import {
  LayoutDashboard,
  Users,
  TrendingUp,
  ShieldCheck,
  Crown,
  FolderTree,
  Settings,
} from "lucide-react";

export const menuItems = [
  {
    title: "Home",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: Users,
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: TrendingUp,
  },
  {
    title: "Invoice",
    href: "/invoices",
    icon: ShieldCheck,
  },
  {
    title: "Assistant",
    href: "/assistant",
    icon: Crown,
  },
  {
    title: "Academy",
    href: "/academy",
    icon: FolderTree,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    submenu: [
      // {
      //   title: "Profile",
      //   href: "/settings/profile",
      // },
      {
        title: "Change Password",
        href: "/settings/change-password",
      },
      {
        title: "Privacy-Policy",
        href: "/settings/privacy-policy",
      },
      {
        title: "About-Us",
        href: "/settings/about-us",
      },
      {
        title: "Terms & Condition",
        href: "/settings/terms-condition",
      },
      // {
      //   title: 'Faqs',
      //   href: '/settings/faqs',
      // },
    ],
  },
];
