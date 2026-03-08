import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ActivityCard from "./ActivityCard";

export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  link?: string;
}

interface ActivityListProps {
  activities: ActivityItem[];
}

const ActivityList = ({ activities }: ActivityListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityList;
