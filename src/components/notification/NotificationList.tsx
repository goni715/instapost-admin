/* eslint-disable react/no-unescaped-entities */
"use client";
import { DUMMY_NOTIFICATIONS } from "@/data/notification.data";
import { Bell } from "lucide-react";
import NotificationItem from "./NotificationItem";



const NotificationList = () => {
  return (
    <>
      {/* Notifications List */}
      <div className="space-y-3 sm:space-y-4">
        {DUMMY_NOTIFICATIONS.map((notification) => (
          <NotificationItem key={notification.id} notification={notification}/>
        ))}
      </div>

      {/* Empty State (optional) */}
      {DUMMY_NOTIFICATIONS.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card/50 px-4 py-16 text-center sm:py-24">
          <Bell className="mb-4 h-12 w-12 text-muted-foreground/30" />
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            No notifications
          </h3>
          <p className="text-muted-foreground">
            You're all caught up! Check back later for new updates.
          </p>
        </div>
      )}
    </>
  );
};

export default NotificationList;
