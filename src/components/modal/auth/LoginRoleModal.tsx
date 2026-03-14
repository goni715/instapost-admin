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

const LoginRoleModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleStatusUpdate = async (newStatus: TOrderStatus) => {
    setModalOpen(false);
    if (newStatus === "Assigned") {
      return;
    }
    if (newStatus === "Scheduled") {
      return;
    }
  };

  // Filter out the current status from available actions
  const availableActions = STATUS_ACTIONS.filter(
    (action) => action.status !== "Pending",
  );

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        className="w-full h-11 text-base bg-primary hover:bg-primary/90 text-white mb-6"
      >
        Sign In
      </Button>

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
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginRoleModal;
