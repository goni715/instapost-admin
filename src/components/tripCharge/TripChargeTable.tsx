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
import { ITripCharge } from "@/types/tripCharge.type";
import EditTripChargeModal from "../modal/tripCharge/EditTripChargeModal";
import DeleteTripChargeModal from "../modal/tripCharge/DeleteTripChargeModal";

type TProps = {
  tripCharges: ITripCharge[];
  meta: IMeta;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};

const TripChargeTable = ({
  tripCharges,
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
                <TableHead>Area</TableHead>
                <TableHead>Charge Amount</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {tripCharges.length > 0 ? (
                tripCharges.map((charge, index) => (
                  <TableRow key={charge.id}>
                    <TableCell className="text-muted-foreground">
                      {Number(index + 1) + (meta?.page - 1) * pageSize}
                    </TableCell>
                    <TableCell className="font-medium">{charge.area}</TableCell>

                    <TableCell className="text-muted-foreground">
                      ${charge.amount}
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-3">
                        <EditTripChargeModal />
                        <DeleteTripChargeModal tripChargeId={charge.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-10">
                    No charges found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {tripCharges.length > pageSize && (
        <div className="mt-6 rounded-lg border border-border bg-card p-4 flex flex-col space-y-4 md:space-y-0 items-center md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Showing
            <span className="font-medium ml-1">
              {startIndex + 1}-{Math.min(startIndex + pageSize, tripCharges.length)}
            </span>
            of
            <span className="font-medium ml-1">{tripCharges.length}</span>
          </p>

          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={meta.totalPages}
            dataLength={tripCharges.length}
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

export default TripChargeTable;
