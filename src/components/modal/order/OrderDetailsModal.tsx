import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DetailItem from "@/components/order/DetailItem";
import { TOrderStatus } from "@/types/order.type";

interface IProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  status: TOrderStatus;
  orderId: string;
  leftContent: React.ReactNode;
  rightContent?: React.ReactNode;
  priceBreakdown?: { label: string; value: string }[];
}

const OrderDetailsModal = ({
  title,
  orderId,
  leftContent,
  rightContent,
  priceBreakdown,
  open,
  onOpenChange
}: IProps) => {
  //const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* <Eye
        onClick={() => setModalOpen(true)}
        className="h-6 w-4 text-gray-600 hover:text-gray-700 cursor-pointer"
      /> */}

      <Dialog open={open} onOpenChange={onOpenChange}>
        {/* Modal Content */}
        <DialogContent
          className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-4xl"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-gray-900">
              {title}
            </DialogTitle>
          </DialogHeader>
          {/* Content */}
          <div className="px-6 py-4">
            <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
              {/* Left Column */}
              <div className="space-y-4">
                <DetailItem label="Order ID" value={orderId} />
                {leftContent}
              </div>

              {/* Right Column */}
              {rightContent && <div className="space-y-4">{rightContent}</div>}
            </div>

            {/* Price Breakdown */}
            {priceBreakdown && priceBreakdown.length > 0 && (
              <div className="mt-6 border-t pt-4">
                <h3 className="mb-3 text-sm font-semibold text-gray-900">
                  Price breakdown
                </h3>
                <div className="space-y-2">
                  {priceBreakdown.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-medium text-gray-900">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderDetailsModal;
