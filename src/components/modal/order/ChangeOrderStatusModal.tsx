import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TOrderStatus } from "@/types/order.type";
import { STATUS_ACTIONS } from "@/data/order.data";
import { SuccessToast } from "@/helpers/ValidationHelper";
import OrderStatusBadge from "@/components/badge/OrderStatusBadge";

type TProps = {
  currentStatus: TOrderStatus;
};

const ChangeOrderStatusModal = ({ currentStatus }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleStatusUpdate = async (newStatus: TOrderStatus) => {
    SuccessToast(newStatus);
    setModalOpen(false);
  };

  // Filter out the current status from available actions
  const availableActions = STATUS_ACTIONS.filter(
    (action) => action.status !== currentStatus,
  );

  return (
    <>
      <OrderStatusBadge
        status={currentStatus}
        onClick={() => setModalOpen(true)}
      />

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md" showCloseButton={true}>
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
                className={`h-12 text-white font-medium text-base rounded-lg cursor-pointer transition-all ${action.bgColor} ${action.hoverColor}`}
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
