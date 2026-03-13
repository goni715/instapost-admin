import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";

const EditTopicModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg transition-colors"
        aria-label="Edit"
      >
        <Edit className="w-4 h-4 text-green-600" />
      </button>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        {/* Modal Content */}
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Edit Topic</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <Input
                type="text"
                placeholder="Type here.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-gray-50  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Url Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                YouTube URL
              </label>
              <Input
                type="text"
                placeholder="Type here.."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-gray-50  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Description Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <Input
                type="text"
                placeholder="Type here.."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-gray-50  focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default EditTopicModal;
