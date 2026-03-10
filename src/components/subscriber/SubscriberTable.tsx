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
import { ISubscriber } from "@/types/subscriber.type";
import { Eye } from "lucide-react";
import PlanBadge from "../badge/PlanBadge";
import ViewSubscriberModal from "../modal/subscriber/ViewSubscriberModal";
import DeleteSubscriberModal from "../modal/subscriber/DeleteSubscriberModal";

type TProps = {
  subscribers: ISubscriber[];
  meta: IMeta;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};

const SubscriberTable = ({
  subscribers,
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
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {subscribers.length > 0 ? (
                subscribers.map((subscriber, index) => (
                  <TableRow key={subscriber.id}>
                    <TableCell className="w-16 text-muted-foreground">
                      {Number(index + 1) + (meta?.page - 1) * pageSize}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Image
                          src="/profile_placeholder.png"
                          alt="avatar"
                          width={36}
                          height={36}
                          className="rounded-full"
                        />

                        <span className="font-medium">{subscriber.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {subscriber.email}
                    </TableCell>
                    <TableCell>
                      <PlanBadge plan={subscriber.plan} />
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {subscriber.phone}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {subscriber.joinDate}
                    </TableCell>
                    <TableCell>
                      <div
                        className="flex items-center gap-2"
                        key={subscriber.id}
                      >
                        <ViewSubscriberModal plan={subscriber.plan} />
                        <DeleteSubscriberModal subscriberId={subscriber.id} /> 
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10">
                    No subscribers found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}

      {subscribers.length > pageSize && (
        <div className="mt-6 rounded-lg border border-border bg-card p-4 flex flex-col space-y-4 md:space-y-0 items-center md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Showing
            <span className="font-medium ml-1">
              {startIndex + 1}-
              {Math.min(startIndex + pageSize, subscribers.length)}
            </span>
            of
            <span className="font-medium ml-1">{subscribers.length}</span>
          </p>

          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={meta.totalPages}
            dataLength={subscribers.length}
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

export default SubscriberTable;
