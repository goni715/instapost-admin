import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TOrderStatus } from "@/types/order.type";

type TProps = {
  status: TOrderStatus;
};

const ChangeOrderStatusModal = ({ userId }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleStatusUpdate = async (newStatus: OrderStatus) => {
    setIsLoading(true);
    try {
      // Call your API here to update the status
      onStatusChange(newStatus);
      onOpenChange(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter out the current status from available actions
  const availableActions = STATUS_ACTIONS.filter(
    (action) => action.status !== currentStatus,
  );

  return (
    <>
      <Trash2
        onClick={() => setModalOpen(true)}
        className="h-6 w-4 text-red-600 hover:text-red-700 cursor-pointer"
      />

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-semibold">
              Update Order Status
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-3 py-4">
            {availableActions.map((action) => (
              <Button
                key={action.status}
                onClick={() => handleStatusUpdate(action.status)}
                disabled={isLoading}
                className={`h-14 text-white font-medium text-base rounded-lg transition-all ${action.bgColor} ${action.hoverColor}`}
              >
                {action.label}
              </Button>
            ))}
          </div>

          <div className="text-center text-xs text-gray-500">
            Current status:{" "}
            <span className="font-semibold">{currentStatus}</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChangeOrderStatusModal;
