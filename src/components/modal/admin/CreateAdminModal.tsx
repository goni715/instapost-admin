import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface AdminData {
  name: string;
  email: string;
  password: string;
  userType: string;
  permissions: Record<string, boolean>;
}


const PERMISSIONS = [
  'Financial',
  'User Management',
  'Order Management',
  'Inventory Management',
  'Invoice',
  'Installer Routing',
  'Items & Pricing',
  'Manage Warehouse',
  'Announcement',
  'Settings',
];


const CreateAdminModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<AdminData>({
    name: "",
    email: "",
    password: "",
    userType: "Admin",
    permissions: Object.fromEntries(PERMISSIONS.map((perm) => [perm, true])),
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePermissionChange = (permission: string) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: !prev.permissions[permission],
      },
    }));
  };

  const handleAdd = () => {
    // Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      userType: "Admin",
      permissions: Object.fromEntries(PERMISSIONS.map((perm) => [perm, true])),
    });
    setModalOpen(false);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        className="bg-cyan-600 w-full sm:w-auto hover:bg-cyan-700 text-white"
      >
        Add Admin
      </Button>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        {/* Modal Content */}
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Add Admin</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <Input
                type="text"
                placeholder="Type here..."
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="Type here..."
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="Type here..."
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="w-full"
              />
            </div>

            {/* User Type Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User type
              </label>
              <Input
                type="text"
                value={formData.userType}
                readOnly
                className="w-full bg-gray-50"
              />
            </div>

            {/* User Access Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                User Access
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                {PERMISSIONS.map((permission) => (
                  <div
                    key={permission}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                  >
                    <span className="text-sm text-gray-700">{permission}</span>
                    <button
                      onClick={() => handlePermissionChange(permission)}
                      className={`h-6 w-11 rounded-full transition-colors ${
                        formData.permissions[permission]
                          ? "bg-blue-400"
                          : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`h-5 w-5 rounded-full bg-white transition-transform ${
                          formData.permissions[permission]
                            ? "translate-x-5"
                            : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-50"
            >
              Close
            </Button>
            <Button
              onClick={handleAdd}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
            >
              Add
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateAdminModal;
