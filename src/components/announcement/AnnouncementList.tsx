import { Card } from "@/components/ui/card";
import { DUMMY_ANNOUNCEMENTS } from "@/data/announcement.data";
import AnnouncementItem from "./AnnouncementItem";

const AnnouncementList = () => {
  return (
    <>
      <div className="space-y-4">
        {DUMMY_ANNOUNCEMENTS.length === 0 ? (
          <Card className="p-8 sm:p-12 text-center border-dashed">
            <p className="text-muted-foreground">
              No announcements yet. Create one to get started.
            </p>
          </Card>
        ) : (
          DUMMY_ANNOUNCEMENTS.map((announcement) => (
            <AnnouncementItem
              key={announcement.id}
              announcement={announcement}
            />
          ))
        )}
      </div>
    </>
  );
};

export default AnnouncementList;
