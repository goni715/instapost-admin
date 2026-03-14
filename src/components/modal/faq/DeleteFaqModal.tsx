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

type TProps = {
  faqId: string;
};

const DeleteFaqModal = ({ faqId }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const isLoading = false;

  const handleClick = () => {
    console.log(faqId);
    setModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="text-red-500 hover:text-red-600 transition-colors"
        aria-label="Delete FAQ"
      >
        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
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

export default DeleteFaqModal;
