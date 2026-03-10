import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Eye, Mail, MapPin, Phone } from "lucide-react";
import PlanBadge from "@/components/badge/PlanBadge";
import { TPlan } from "@/types/subscriber.type";

type TProps = {
  plan: TPlan;
};

const ViewSubscriberModal = ({ plan }: TProps) => {
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
            <DialogTitle>Subscriber Info</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              {/* Company Card */}
              <div className="border border-gray-200 rounded-lg p-6 mb-6 bg-white">
                <div className="flex items-start gap-4">
                  {/* Company Logo/Avatar */}
                  <Avatar className="h-16 w-16 shrink-0">
                    <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MbVMEtXjF0eT9SZPSa06NY4HQ0qn10.png" />
                    <AvatarFallback>IT</AvatarFallback>
                  </Avatar>

                  {/* Company Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Instasign Tracker
                      </h3>
                      <PlanBadge plan={plan}/>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <span>jhon@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <span>+7876556990064</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <span>Alabama, USA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-sm text-gray-500 mb-1">Total Orders</p>
                  <p className="text-2xl font-semibold text-gray-900">50</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-sm text-gray-500 mb-1">Inventory Item</p>
                  <p className="text-2xl font-semibold text-gray-900">100</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-sm text-gray-500 mb-1">Completed Order</p>
                  <p className="text-2xl font-semibold text-gray-900">50</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-sm text-gray-500 mb-1">Total Staff</p>
                  <p className="text-2xl font-semibold text-gray-900">50</p>
                </div>
              </div>
            </div>

            {/* Account Owner Info Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Account Owner Info
              </h2>

              {/* Owner Card */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white">
                <div className="flex items-start gap-4">
                  {/* Owner Avatar */}
                  <Avatar className="h-16 w-16 shrink-0">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" />
                    <AvatarFallback>NS</AvatarFallback>
                  </Avatar>

                  {/* Owner Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      John Doe
                    </h3>

                    {/* Contact Info */}
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <span>jhon@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <span>+7876556990064</span>
                      </div>
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

export default ViewSubscriberModal;
