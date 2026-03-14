import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit } from "lucide-react";

const EditFaqModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="text-green-600 hover:text-green-700 transition-colors"
        aria-label="Edit FAQ"
      >
        <Edit className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        {/* Modal Content */}
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Edit FAQ</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium mb-2 block">Question</label>
              <Input
                placeholder="Enter the question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Answer</label>
              <Textarea
                placeholder="Enter the answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows={4}
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
                Save Changes
              </Button>
            </div>
          </form>                                                   
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditFaqModal;
