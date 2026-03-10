import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Eye, Mail, MapPin, Phone } from "lucide-react";
import { TViewCompany } from "@/types/user.type";

type TProps = {
  company: TViewCompany;
};

const ViewCompanyModal = ({ company }: TProps) => {
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
          <DialogHeader>
            <DialogTitle>Company Info</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Company Header with Logo and Plan Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={company.logo} alt={company.name} />
                  <AvatarFallback className="bg-linear-to-br from-blue-500 to-blue-600 text-white font-semibold">
                    {company.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {company.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{company.plan}</p>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                {company.plan}
              </span>
            </div>

            {/* Company Contact Info */}
            <div className="space-y-2 border-t border-gray-200 pt-4">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="break-all">{company.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{company.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{company.location}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 mt-4">
              {company.stats.map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Account Owner Section */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h4 className="font-semibold text-sm text-gray-900 mb-3">
                Account Owner Info
              </h4>
              <div className="flex items-start gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src={company.accountOwner.avatar}
                    alt={company.accountOwner.name}
                  />
                  <AvatarFallback className="bg-linear-to-br from-blue-500 to-blue-600 text-white font-semibold">
                    {company.accountOwner.initials ||
                      company.accountOwner.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">
                    {company.accountOwner.name}
                  </p>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Mail className="w-3 h-3 text-gray-400" />
                      <span className="break-all">
                        {company.accountOwner.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Phone className="w-3 h-3 text-gray-400" />
                      <span>{company.accountOwner.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ViewCompanyModal;
