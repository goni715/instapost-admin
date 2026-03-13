"use client";

import AnnouncementList from "@/components/announcement/AnnouncementList";
import CreateAnnouncementModal from "@/components/modal/announcement/CreateAnnouncementModal";

const AnnouncementsPage = () => {

  return (
    <div className="min-h-screen bg-linear-to-br from-background to-secondary/5 p-4 sm:p-6 lg:p-8">
      <div className="">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Announcements
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Send Updates And Important Notices To All Users Under Your
              Company.
            </p>
          </div>
          {/*  */}
          <CreateAnnouncementModal/>
        </div>

        {/* Announcements List */}
        <AnnouncementList/>
      </div>
    </div>
  );
};
export default AnnouncementsPage;
