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
  sizeId: string;
};

const DeleteSizeModal = ({ sizeId }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const isLoading = false;

  const handleClick = () => {
    console.log(sizeId);
    setModalOpen(false);
  };

  return (
    <>
      <Trash2
        onClick={() => setModalOpen(true)}
        className="h-6 w-4 text-red-600 hover:text-red-700 cursor-pointer"
      />
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

export default DeleteSizeModal;
