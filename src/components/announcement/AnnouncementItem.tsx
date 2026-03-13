import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";
import EditAnnouncementModal from "../modal/announcement/EditAnnouncementModal";
import DeleteAnnouncementModal from "../modal/announcement/DeleteAnnouncementModal";
import { IAnnouncement } from "@/types/announcement.type";

type TProps = {
  announcement: IAnnouncement;
};

const AnnouncementItem = ({ announcement }: TProps) => {
  return (
    <>
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
            <EditAnnouncementModal />
            <DeleteAnnouncementModal announcementId={announcement.id} />
          </div>
        </div>
      </Card>
    </>
  );
};

export default AnnouncementItem;
