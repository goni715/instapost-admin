import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Package,
  Route,
  Tag,
  UserCog,
  Warehouse,
  Megaphone,
  ShoppingCart,
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
    icon: ShoppingCart,
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: Package,
  },
  {
    title: "Invoice",
    href: "/invoices",
    icon: FileText,
  },
  {
    title: "Installer Routing",
    href: "/installer-routing",
    icon: Route,
  },
  {
    title: "Items & Pricing",
    icon: Tag,
    submenu: [
      {
        title: "Items",
        href: "/items",
      },
      {
        title: "Materials",
        href: "/materials",
      },
      {
        title: "Option",
        href: "/option",
      },
      {
        title: "Services",
        href: "/services",
      },
      {
        title: "Installer Charge",
        href: "/installer-charge",
      },
      {
        title: "Trip Charge",
        href: "/trip-charge",
      },
      {
        title: "Size",
        href: "/size",
      },
    ],
  },
  {
    title: "Manage Warehouse",
    href: "/warehouse",
    icon: Warehouse,
  },
  {
    title: "Make Admin",
    href: "/admins",
    icon: UserCog,
  },
  {
    title: "Announcement",
    href: "/announcements",
    icon: Megaphone,
  },
  {
    title: "Settings",
    icon: Settings,
    submenu: [
      {
        title: "About Us",
        href: "/settings/about-us",
      },
      // {
      //   title: "Change Password",
      //   href: "/settings/change-password",
      // },
      {
        title: "Privacy-Policy",
        href: "/settings/privacy-policy",
      },
      {
        title: "Terms & Condition",
        href: "/settings/terms-condition",
      },
      {
        title: "Contact Us",
        href: "/settings/contact-us",
      },
      {
        title: "FAQs",
        href: "/settings/faqs",
      },
      {
        title: "Academy",
        href: "/settings/academy",
      },
    ],
  },
];
