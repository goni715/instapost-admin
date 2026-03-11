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
import { IService } from "@/types/service.type";
import DeleteServiceModal from "../modal/service/DeleteServiceModal";
import EditServiceModal from "../modal/service/EditServiceModal";

type TProps = {
  services: IService[];
  meta: IMeta;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};

const ServiceTable = ({
  services,
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
                <TableHead>Price</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.length > 0 ? (
                services.map((service, index) => (
                  <TableRow key={service.id}>
                    <TableCell className="text-muted-foreground">
                      {Number(index + 1) + (meta?.page - 1) * pageSize}
                    </TableCell>
                    <TableCell className="font-medium">{service.name}</TableCell>

                    <TableCell className="text-muted-foreground">
                      ${service.price}
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-3">
                        <EditServiceModal />
                        <DeleteServiceModal serviceId={service.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-10">
                    No services found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {services.length > pageSize && (
        <div className="mt-6 rounded-lg border border-border bg-card p-4 flex flex-col space-y-4 md:space-y-0 items-center md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Showing
            <span className="font-medium ml-1">
              {startIndex + 1}-{Math.min(startIndex + pageSize, services.length)}
            </span>
            of
            <span className="font-medium ml-1">{services.length}</span>
          </p>

          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={meta.totalPages}
            dataLength={services.length}
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

export default ServiceTable;
