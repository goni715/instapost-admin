import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Eye, Mail, Phone } from "lucide-react";
import { TViewUser } from "@/types/user.type";

type TProps = {
  user: TViewUser;
};

const ViewUserModal = ({ user }: TProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Eye
        onClick={() => setModalOpen(true)}
        className="h-6 w-4 text-gray-600 hover:text-gray-700 cursor-pointer"
      />

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        {/* Modal Content */}
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader className="hidden">
            <DialogTitle>User Info</DialogTitle>
          </DialogHeader>
          {/* user Avatar and Info */}
          <div className="flex flex-col items-center mt-4">
            <Avatar className="w-20 h-20 mb-4">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-linear-to-br from-blue-500 to-blue-600 text-white text-lg font-semibold">
                {user.initials || user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <h2 className="text-xl font-semibold text-gray-900 text-center">
              {user.name}
            </h2>
            <p className="text-sm text-gray-600 mt-1 text-center">
              {user.role}
            </p>

            {/* Contact Info */}
            <div className="mt-4 w-full space-y-2 border-t border-gray-200 pt-4">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="break-all">{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{user.phone}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 w-full space-y-3">
              {user.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-start"
                >
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ViewUserModal;
