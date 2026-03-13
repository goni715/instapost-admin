import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Edit, Upload } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const EditAnnouncementModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setUploadedFileName(file.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle("");
    setMessage("");
    setImage(null);
    console.log(image);
    setUploadedFileName("");
  };

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        variant="ghost"
        size="icon"
        className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 hover:text-green-700 cursor-pointer"
        title="Edit"
      >
        <Edit className="w-4 h-4" />
      </Button>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Edit Announcement</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label
                htmlFor="title"
                className="text-sm font-medium text-gray-900"
              >
                Title
              </Label>
              <Input
                id="title"
                type="text"
                placeholder="Type Here.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 bg-gray-50 placeholder:text-gray-400"
              />
            </div>

            {/* Upload Image Field */}
            <div className="space-y-2">
              <Label
                htmlFor="upload"
                className="text-sm font-medium text-gray-900"
              >
                Upload Image
              </Label>
              <button
                type="button"
                onClick={handleUploadClick}
                className="flex w-full items-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-600 hover:bg-gray-100"
              >
                <Upload className="h-5 w-5" />
                <span>{uploadedFileName || "Upload"}</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-sm font-medium text-gray-900"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type Here.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-32 border border-gray-300 bg-gray-50 placeholder:text-gray-400"
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

export default EditAnnouncementModal;
