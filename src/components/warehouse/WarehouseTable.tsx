import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
import { IWarehouse } from "@/types/warehouse.type";
import DeleteWarehouseModal from "../modal/warehouse/DeleteWarehouseModal";
import EditWarehouseModal from "../modal/warehouse/EditWarehouseModal";
import { Eye } from "lucide-react";

type TProps = {
  warehouses: IWarehouse[];
  meta: IMeta;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};

const WarehouseTable = ({
  warehouses,
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
          <Table className="min-w-200">
            <TableHeader className="sticky top-0 z-20 bg-blue-50 border-b">
              <TableRow>
                <TableHead>S.N.</TableHead>
                <TableHead>Name</TableHead>
                {/* <TableHead>Price</TableHead> */}
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {warehouses.length > 0 ? (
                warehouses.map((warehouse, index) => (
                  <TableRow key={warehouse.id}>
                    <TableCell className="text-muted-foreground">
                      {Number(index + 1) + (meta?.page - 1) * pageSize}
                    </TableCell>
                    <TableCell className="font-medium">
                      {warehouse.name}
                    </TableCell>

                    {/* <TableCell className="text-muted-foreground">
                      ${warehouse.price}
                    </TableCell> */}

                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Eye
                          className="h-6 w-4 text-gray-600 hover:text-gray-700 cursor-pointer"
                        />
                        <EditWarehouseModal />
                        <DeleteWarehouseModal warehouseId={warehouse.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-10">
                    No warehouses found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {warehouses.length > pageSize && (
        <div className="mt-6 rounded-lg border border-border bg-card p-4 flex flex-col space-y-4 md:space-y-0 items-center md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Showing
            <span className="font-medium ml-1">
              {startIndex + 1}-
              {Math.min(startIndex + pageSize, warehouses.length)}
            </span>
            of
            <span className="font-medium ml-1">{warehouses.length}</span>
          </p>

          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={meta.totalPages}
            dataLength={warehouses.length}
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

export default WarehouseTable;
