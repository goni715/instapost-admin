"use client";

import CreateAnnouncementModal from "@/components/modal/announcement/CreateAnnouncementModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Trash2, Edit } from "lucide-react";

interface Announcement {
  id: string;
  title: string;
  description: string;
}

const announcements: Announcement[] = [
  {
    id: "1",
    title: "Announcement-1",
    description:
      "We Will Be Operating With A Reduced Team On 24th December And December 31st Our Office Will Be Closed On December 25 And January 1st",
  },
  {
    id: "2",
    title: "Announcement-02",
    description:
      "We Will Be Operating With A Reduced Team On 24th December And December 31st Our Office Will Be Closed On December 25 And January 1st",
  },
];

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
        <div className="space-y-4">
          {announcements.length === 0 ? (
            <Card className="p-8 sm:p-12 text-center border-dashed">
              <p className="text-muted-foreground">
                No announcements yet. Create one to get started.
              </p>
            </Card>
          ) : (
            announcements.map((announcement) => (
              <Card
                key={announcement.id}
                className="p-4 sm:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg text-foreground mb-2 wrap-break-word">
                      {announcement.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed wrap-break-word">
                      {announcement.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground hover:text-foreground"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground hover:text-foreground"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 sm:h-10 sm:w-10 text-destructive hover:text-destructive/90"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default AnnouncementsPage;
