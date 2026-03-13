"use client";

import NotificationList from "@/components/notification/NotificationList";
import { Bell } from "lucide-react";


const NotificationsPage = () => {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <Bell className="h-8 w-8 text-foreground" />
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Notifications
          </h1>
        </div>
        <NotificationList />
      </div>
    </main>
  );
};

export default NotificationsPage;
