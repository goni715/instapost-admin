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
import { IOrder } from "@/types/order.type";
import { Eye } from "lucide-react";
import OrderStatusBadge from "../badge/OrderStatusBadge";

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
                    <OrderStatusBadge status={order.status} />
                  </TableCell>

                  <TableCell>
                    <Eye
                      size={18}
                      className="cursor-pointer text-muted-foreground"
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
