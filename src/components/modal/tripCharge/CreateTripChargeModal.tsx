import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";


const CreateTripChargeModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [area, setArea] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      area,
      amount,
    };

    console.log(data);

    setArea("");
    setAmount("");
    setModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        className="bg-primary w-full sm:w-auto hover:bg-primary/90 text-white cursor-pointer"
      >
        Add Charge
      </Button>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Set Trip Charges by Area</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Area
              </label>
              <Input
                type="text"
                placeholder="0-10 km"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Amount Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Charge Amount
              </label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
                Add
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateTripChargeModal;
