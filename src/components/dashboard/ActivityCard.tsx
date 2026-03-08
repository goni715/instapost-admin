import { Button } from "../ui/button";
import { ActivityItem } from "./ActivityList";

type TProps = {
  activity: ActivityItem;
};

const ActivityCard = ({ activity }: TProps) => {
  return (
    <>
      <div className="flex items-start justify-between gap-4 pb-4 border-b last:border-0 last:pb-0">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-primary">
            {activity.title}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            {activity.subtitle}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="shrink-0 text-xs sm:text-sm text-primary border-primary cursor-pointer"
        >
          View
        </Button>
      </div>
    </>
  );
};

export default ActivityCard;
