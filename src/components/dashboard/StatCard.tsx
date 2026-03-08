import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  iconColor?: string;
  bgColor?: string;
}

const StatCard = ({
  icon: Icon,
  label,
  value,
  iconColor = "text-blue-500",
  bgColor
}: StatCardProps) => {
  return (
    <Card className={`flex-1 min-w-full sm:min-w-0 ${bgColor}`}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl sm:text-3xl font-bold mt-2">{value}</p>
          </div>
          <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${iconColor}`} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
