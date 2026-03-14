export const STATUS_ACTIONS: {
  label: string;
  status: string;
  bgColor: string;
  hoverColor: string;
}[] = [
  {
    label: "Mark As Scheduled",
    status: "Scheduled",
    bgColor: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
  },
  {
    label: "Mark As Assigned",
    status: "Assigned",
    bgColor: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
  },
  {
    label: "Mark As Canceled",
    status: "Canceled",
    bgColor: "bg-red-500",
    hoverColor: "hover:bg-red-600",
  },
  {
    label: "Mark As Completed",
    status: "Completed",
    bgColor: "bg-green-500",
    hoverColor: "hover:bg-green-600",
  },
];
