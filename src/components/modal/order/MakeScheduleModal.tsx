import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
type TProps = {
  scheduledModalOpen: boolean;
  setScheduledModalOpen: Dispatch<SetStateAction<boolean>>;
};

const MakeScheduleModal = ({
  scheduledModalOpen,
  setScheduledModalOpen,
}: TProps) => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleSubmit = () => {
    if (selectedDate) {
      setSelectedDate("");
      setScheduledModalOpen(false);
    }
  };

  const handleCancel = () => {
    setSelectedDate("");
    setScheduledModalOpen(false);
  };

  return (
    <>
      <Dialog open={scheduledModalOpen} onOpenChange={setScheduledModalOpen}>
        <DialogContent className="sm:max-w-md" showCloseButton={true}>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Scheduled Date
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Date
              </label>
              <div className="relative">
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="h-12 border-gray-200 pr-10"
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
             <Button
                variant="outline"
                className="flex-1 h-11 border-primary text-primary hover:bg-blue-50 cursor-pointer"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 h-11 bg-primary hover:bg-primary/90 text-white cursor-pointer"
                onClick={handleSubmit}
                disabled={!selectedDate}
              >
                <span>Submit</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MakeScheduleModal;
