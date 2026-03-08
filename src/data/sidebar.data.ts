import {
  LayoutDashboard,
  Users,
  TrendingUp,
  ShieldCheck,
  FolderTree,
  Settings,
} from "lucide-react";

export const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Users Management",
    icon: Users,
    submenu: [
      {
        title: "All User",
        href: "/users",
      },
      {
        title: "Approval",
        href: "/approvals",
      },
      {
        title: "Subscriber Management",
        href: "/subscribers",
      },
    ],
  },
  {
    title: "Orders Management",
    href: "/orders",
    icon: TrendingUp,
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: ShieldCheck,
  },
  {
    title: "Invoice",
    href: "/invoices",
    icon: ShieldCheck,
  },
  {
    title: "Installer Routing",
    href: "/installer-routing",
    icon: ShieldCheck,
  },
  {
    title: "Items & Pricing",
    icon: Settings,
    submenu: [
      {
        title: "Privacy-Policy",
        href: "/settings/privacy-policy",
      },
      {
        title: "About-Us",
        href: "/settings/about-us",
      },
    ],
  },
  {
    title: "Manage Warehouse",
    href: "/warehouse",
    icon: FolderTree,
  },
  {
    title: "Make Admin",
    href: "/admins",
    icon: FolderTree,
  },
  {
    title: "Announcement",
    href: "/announcements",
    icon: FolderTree,
  },
  {
    title: "Settings",
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
