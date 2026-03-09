import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import type { IMeta } from "@/types/global.type";
import type { IAdmin } from "@/types/admin.type";
import Image from "next/image";
import CustomPagination from "../ui/CustomPagination";
import DeleteAdminModal from "../modal/admin/DeleteAdminModal";
import EditAdminModal from "../modal/admin/EditAdminModal";
import ChangeStatusModal from "../modal/auth/ChangeStatusModal";
import { PAGE_SIZE_OPTIONS } from "@/constants/global.constant";

type TProps = {
  admins: IAdmin[];
  meta: IMeta;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};

const AdminTable = ({
  admins,
  meta,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
}: TProps) => {
  const startIndex = (currentPage - 1) * pageSize;

  return (
    <>
      <div className="border border-border rounded-lg bg-card overflow-hidden">
        {/* Single table container with synchronized scrolling */}
        <div className="min-h-70 max-h-162.5 overflow-y-auto">
          <Table className="min-w-200">
            <TableHeader className="sticky top-0 z-20 bg-blue-50 border-b">
              <TableRow className="hover:bg-yellow-50">
                <TableHead className="w-16 bg-blue-50">S.N.</TableHead>
                <TableHead className="min-w-48 bg-blue-50">Name</TableHead>
                <TableHead className="min-w-32 bg-blue-50">Image</TableHead>
                <TableHead className="min-w-48 bg-blue-50">Email</TableHead>
                <TableHead className="min-w-24 bg-blue-50">Status</TableHead>
                <TableHead className="min-w-24 bg-blue-50">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {admins?.length > 0 ? (
                admins?.map((admin, index) => (
                  <TableRow
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-muted/30"}
                  >
                    <TableCell className="w-16 text-muted-foreground">
                      {Number(index + 1) + (meta?.page - 1) * pageSize}
                    </TableCell>
                    <TableCell className="min-w-48 text-muted-foreground">
                      {admin?.fullName}
                    </TableCell>
                    <TableCell className="min-w-32 font-medium text-foreground">
                      <Image
                        src={"/profile_placeholder.png"}
                        alt="caandidate_img"
                        className="h-10 w-11.25 rounded"
                        width={600}
                        height={600}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/profile_placeholder.png";
                        }}
                      />
                    </TableCell>
                    <TableCell className="min-w-32 text-muted-foreground truncate">
                      {admin?.email || "-"}
                    </TableCell>
                    <TableCell className="min-w-24">
                      <ChangeStatusModal
                        status={admin?.status}
                        userId={admin?.userId}
                        key={admin.userId}
                      />
                    </TableCell>
                    <TableCell className="min-w-24">
                      <div
                        className="flex items-center gap-2"
                        key={admin.userId}
                      >
                        <EditAdminModal />
                        <DeleteAdminModal adminId={admin.userId} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-8 text-muted-foreground"
                  >
                    No admins found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      {/* Pagination part */}
      {admins.length > pageSize && (
        <div className="mt-6 rounded-lg border border-border bg-card p-4 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground text-center md:text-left text-nowrap">
            Showing{" "}
            <span className="font-medium">
              {startIndex + 1}-{Math.min(startIndex + pageSize, admins.length)}
            </span>{" "}
            of <span className="font-medium">{admins.length}</span>
          </p>

          <div className="flex justify-center">
            <CustomPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              // totalPages={meta.totalPages}
              totalPages={3}
              dataLength={admins.length}
            />
          </div>

          {admins.length > 0 && (
            <div className="hidden md:flex justify-end">
              <Select
                aria-label="Results per page"
                value={String(pageSize)}
                onValueChange={(val) => {
                  setCurrentPage(1);
                  setPageSize(Number(val));
                }}
              >
                <SelectTrigger
                  id="results-per-page"
                  className="w-fit whitespace-nowrap"
                >
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

          {/* ==== Mobile Device ===*/}
          <div className="flex md:hidden justify-center">
            <Select
              aria-label="Results per page"
              value={String(pageSize)}
              onValueChange={(val) => {
                setCurrentPage(1);
                setPageSize(Number(val));
              }}
            >
              <SelectTrigger
                id="results-per-page"
                className="w-fit whitespace-nowrap"
              >
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
        </div>
      )}
    </>
  );
};

export default AdminTable;
