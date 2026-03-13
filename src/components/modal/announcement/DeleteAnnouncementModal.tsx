import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import DeleteButton from "@/components/form/DeleteButton";
import { useState } from "react";
import NoButton from "@/components/form/NoButton";
import { Button } from "@/components/ui/button";

type TProps = {
  announcementId: string;
};

const DeleteAnnouncementModal = ({ announcementId }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const isLoading = false;

  const handleClick = () => {
    console.log(announcementId);
    setModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        variant="ghost"
        size="icon"
        className="h-8 w-8 sm:h-10 sm:w-10 text-destructive hover:text-destructive/90"
        title="Delete"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Are you sure, you want to delete?</DialogTitle>
          </DialogHeader>

          <div className="flex justify-end gap-2">
            <NoButton onClick={() => setModalOpen(false)} />
            <DeleteButton onClick={handleClick} isLoading={isLoading} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteAnnouncementModal;
