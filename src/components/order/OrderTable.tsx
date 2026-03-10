import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import type { IMeta } from "@/types/global.type";
import CustomPagination from "../ui/CustomPagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { PAGE_SIZE_OPTIONS } from "@/constants/global.constant";
import { IOrder, TOrderStatus } from "@/types/order.type";
import { Eye } from "lucide-react";
import ChangeOrderStatusModal from "../modal/order/ChangeOrderStatusModal";
import { SignInstallationModal } from "../modal/order/SignInstallationModal";
import { useState } from "react";

type TProps = {
  orders: IOrder[];
  meta: IMeta;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};

const OrderTable = ({
  orders,
  meta,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
}: TProps) => {
  const startIndex = (currentPage - 1) * pageSize;
  const [signInstallationOpen, setSignInstallationOpen] = useState(false);
  const [signInstallationStatus, setSignInstallationStatus] =
    useState<TOrderStatus>("Scheduled");

  return (
    <>
      <div className="border border-border rounded-xl bg-card overflow-hidden">
        <div className="min-h-70 max-h-162.5 overflow-y-auto">
          <Table className="min-w-275">
            <TableHeader className="bg-blue-50">
              <TableRow>
                <TableHead>S.N.</TableHead>
                <TableHead>Order Id</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={order.id}>
                  <TableCell className="w-16 text-muted-foreground">
                    {Number(index + 1) + (meta?.page - 1) * pageSize}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {order.id}
                  </TableCell>

                  <TableCell>{order.type}</TableCell>

                  <TableCell className="text-muted-foreground">
                    {order.address}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/profile_placeholder.png"
                        alt="agent"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      {order.agent}
                    </div>
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {order.orderDate}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {order.dueDate}
                  </TableCell>

                  <TableCell className="text-blue-600 font-medium">
                    {order.price}
                  </TableCell>
                  <TableCell>
                    <ChangeOrderStatusModal currentStatus={order.status} />
                  </TableCell>

                  <TableCell>
                    <Eye
                      size={18}
                      className="cursor-pointer text-muted-foreground"
                      onClick={() => {
                        setSignInstallationStatus("Scheduled");
                        setSignInstallationOpen(true);
                      }}
                    />
                    <SignInstallationModal
                      open={signInstallationOpen}
                      onOpenChange={setSignInstallationOpen}
                      status={signInstallationStatus}
                      orderId="#124544"
                      scheduledDate="25-02-2026"
                      address="1600 Pennsylvania Avenue NW, Washington, DC 20500"
                      unitApt="205"
                      id="50"
                      dueDate="20/05/2026"
                      occupant="Nm sujon"
                      note="Please install the post as soon as possible"
                      propertyType="Duplex"
                      whereToPlace="In front of the house"
                      gateCode="In front of the house"
                      addressConfirmed="Accurate"
                      lockbox="24564556"
                      siteWarnings={[
                        "1. Underground sprinkler system",
                        "2. Restricted/gated access",
                      ]}
                      addOnServices={[
                        "1. Underground sprinkler system",
                        "2. Restricted/gated access",
                      ]}
                      installer={
                        signInstallationStatus === "Completed"
                          ? {
                              name: "Nm Sujon",
                              avatar:
                                "https://api.dicebear.com/7.x/avataaars/svg?seed=Nm",
                            }
                          : undefined
                      }
                      postType="3 feet, steel metal frame, black"
                      installType="Single install"
                      riderSize='24x48"'
                      riderMaterial="ABS"
                      mainPanelSize='24x30"'
                      mainPanelMaterial="ABS"
                      propertyImages={[
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop",
                        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=200&fit=crop",
                        "https://images.unsplash.com/photo-1600566753376-12c8ab7d1c0e?w=300&h=200&fit=crop",
                      ]}
                      completionImages={
                        signInstallationStatus === "Completed"
                          ? [
                              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=100&fit=crop",
                              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&h=100&fit=crop",
                              "https://images.unsplash.com/photo-1600566753376-12c8ab7d1c0e?w=100&h=100&fit=crop",
                            ]
                          : undefined
                      }
                      priceBreakdown={[
                        { label: "Post install", value: "$50.00" },
                        { label: "Total", value: "$50.00" },
                      ]}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      {/* {orders.length > pageSize && ( */}
      {pageSize && (
        <div className="mt-6 rounded-lg border border-border bg-card p-4 flex flex-col space-y-4 md:space-y-0 items-center md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Showing
            <span className="font-medium ml-1">
              {startIndex + 1}-{Math.min(startIndex + pageSize, orders.length)}
            </span>
            of
            <span className="font-medium ml-1">{orders.length}</span>
          </p>

          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={meta.totalPages}
            dataLength={orders.length}
          />

          <Select
            value={String(pageSize)}
            onValueChange={(val) => {
              setCurrentPage(1);
              setPageSize(Number(val));
            }}
          >
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Items per page" />
            </SelectTrigger>

            <SelectContent>
              {PAGE_SIZE_OPTIONS.map((size) => (
                <SelectItem key={size} value={String(size)}>
                  {size} / page
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </>
  );
};

export default OrderTable;
