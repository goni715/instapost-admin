import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AssignStaffModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      type,
      amount,
    };

    console.log(data);

    setType("");
    setAmount("");
    setModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        className="bg-primary w-full sm:w-auto hover:bg-primary/90 text-white cursor-pointer"
      >
        Assign Staff
      </Button>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Assign Staff</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Staff
              </label>
              <Select value={type} onValueChange={(value) => setType(value)}>
                <SelectTrigger className="border border-gray-300 w-full rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sujon">Nm Sujon</SelectItem>
                  <SelectItem value="Goni">Osman Goni</SelectItem>
                  <SelectItem value="efaz">Efaz</SelectItem>
                  <SelectItem value="nurulla">Nurulla Hasan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Buttons */}
            <div className="flex gap-3 mt-8 pt-4">
              <Button
                variant="outline"
                onClick={() => setModalOpen(false)}
                className="flex-1 border-primary text-primary hover:bg-blue-50 cursor-pointer"
              >
                Close
              </Button>

              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90 text-white cursor-pointer"
              >
                Assign
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AssignStaffModal;
