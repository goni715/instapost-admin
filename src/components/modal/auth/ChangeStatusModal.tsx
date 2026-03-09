import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DeleteButton from "@/components/form/DeleteButton";
import { useState } from "react";
import { MdOutlineBlock } from "react-icons/md";
import { BsFillStopCircleFill } from "react-icons/bs";
import type { TBlockStatus } from "@/types/user.type";
import NoButton from "@/components/form/NoButton";

type TProps = {
  userId: string;
  status: TBlockStatus;
};

const ChangeStatusModal = ({ userId, status }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [changeStatus, { isLoading, isSuccess }] = useChangeStatusMutation();
  const isLoading = false;

  // useEffect(() => {
  //   if (!isLoading) {
  //     setModalOpen(false);
  //   }
  // }, [isLoading, isSuccess]);

  const handleClick = () => {
    // changeStatus({
    // id: userId,
    // data: {
    //   status: status === "active" ? "blocked" : "active"
    // }
    // })
    console.log({
      id: userId,
      data: {
        status: status === "active" ? "blocked" : "active",
      },
    });
  };

  return (
    <>
      <>
        <button
          onClick={() => setModalOpen(true)}
          className={`inline-flex items-center gap-2 px-4 py-1 rounded-2xl font-medium transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer ${
            status !== "active"
              ? "bg-red-50 text-red-700 hover:bg-red-100 focus:ring-red-300"
              : "bg-green-50 text-green-700 hover:bg-green-100 focus:ring-green-300"
          }`}
        >
          {status !== "active" ? (
            <>
              <MdOutlineBlock className="w-4 h-4" />
              <span>Blocked</span>
            </>
          ) : (
            <>
              <BsFillStopCircleFill className="w-4 h-4" />
              <span>Active</span>
            </>
          )}
        </button>
      </>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e) => e.preventDefault()}
          showCloseButton={false}
        >
          <DialogHeader>
            <DialogTitle>
              Are you sure, you want to{" "}
              {status === "active" ? "block" : "active"}?
            </DialogTitle>
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

export default ChangeStatusModal;
