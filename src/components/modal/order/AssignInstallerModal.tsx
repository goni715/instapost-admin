import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TProps = {
  installerModalOpen: boolean;
  setInstallerModalOpen: Dispatch<SetStateAction<boolean>>;
};

const AssignInstallerModal = ({
  installerModalOpen,
  setInstallerModalOpen,
}: TProps) => {
  const [selectedInstaller, setSelectedInstaller] = useState<string>("");
  const installers = ["Goni", "Shakib", "Shishir", "Nasir"];

  const handleSubmit = () => {
    if (selectedInstaller) {
      setSelectedInstaller("");
      setInstallerModalOpen(false);
    }
  };

  const handleCancel = () => {
    setSelectedInstaller("");
    setInstallerModalOpen(false);
  };

  return (
    <>
      <Dialog open={installerModalOpen} onOpenChange={setInstallerModalOpen}>
        <DialogContent className="sm:max-w-md" showCloseButton={true}>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Assigned Installer
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Assign Installer
              </label>
              <Select
                value={selectedInstaller}
                onValueChange={setSelectedInstaller}
              >
                <SelectTrigger className="h-12 border-gray-200 w-full bg-gray-50">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {installers.map((installer) => (
                    <SelectItem key={installer} value={installer}>
                      {installer}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                disabled={!selectedInstaller}
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

export default AssignInstallerModal;
