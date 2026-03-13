import { INotification } from "@/types/notification.type";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


type TProps = {
    notification: INotification
}

const NotificationItem = ({ notification } : TProps) => {
  return (
    <>
      <Card
        key={notification.id}
        className="border border-border bg-card p-4 sm:p-6 transition-all hover:shadow-md"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="mb-2 text-sm text-muted-foreground truncate">
              {notification.subtitle}
            </p>
            <h3 className="mb-3 text-base font-semibold text-foreground sm:mb-0 sm:text-lg line-clamp-2">
              {notification.title}
            </h3>
          </div>

          {/* Timestamp and Button Container */}
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs text-muted-foreground whitespace-nowrap sm:text-sm">
              {notification.timestamp}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="shrink-0 text-xs sm:text-sm text-primary border-primary cursor-pointer"
            >
              View
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default NotificationItem;
