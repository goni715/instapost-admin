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
import { IUser } from "@/types/user.type";
import EditUserModal from "../modal/user/EditUserModal";
import DeleteUserModal from "../modal/user/DeleteUserModal";
import ViewAgentModal from "../modal/user/ViewUserModal";
import {
  DUMMUY_AGENT,
  DUMMY_ASSISTANT,
  DUMMY_COMPANY,
  DUMMY_INSTALLER,
  DUMMY_TEAM_LEAD,
  DUMMY_WARE_HOUSE,
} from "@/data/user.data";
import ViewCompanyModal from "../modal/user/ViewCompanyModal";

type TProps = {
  users: IUser[];
  meta: IMeta;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};

const roleStyles: Record<string, string> = {
  Agent: "bg-blue-100 text-blue-700",
  "Team Lead": "bg-purple-100 text-purple-700",
  Assistant: "bg-green-100 text-green-700",
  Installer: "bg-orange-100 text-orange-700",
  "Warehouse manager": "bg-indigo-100 text-indigo-700",
  "Sign company": "bg-pink-100 text-pink-700",
};

const UserTable = ({
  users,
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
              {users.length > 0 ? (
                users.map((user, index) => (
                  <TableRow key={user.id}>
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

                        <span className="font-medium">{user.name}</span>
                      </div>
                    </TableCell>

                    <TableCell className="text-muted-foreground">
                      {user.email}
                    </TableCell>

                    <TableCell>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-md ${roleStyles[user.role]}`}
                      >
                        {user.role}
                      </span>
                    </TableCell>

                    <TableCell className="text-muted-foreground">
                      {user.phone}
                    </TableCell>

                    <TableCell className="text-muted-foreground">
                      {user.joinDate}
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-2" key={user.id}>
                        {user.role === "Agent" && (
                          <ViewAgentModal user={DUMMUY_AGENT} />
                        )}
                        {user.role === "Team Lead" && (
                          <ViewAgentModal user={DUMMY_TEAM_LEAD} />
                        )}
                        {user.role === "Warehouse manager" && (
                          <ViewAgentModal user={DUMMY_WARE_HOUSE} />
                        )}
                        {user.role === "Installer" && (
                          <ViewAgentModal user={DUMMY_INSTALLER} />
                        )}
                        {user.role === "Assistant" && (
                          <ViewAgentModal user={DUMMY_ASSISTANT} />
                        )}
                        {user.role === "Sign company" && (
                          <ViewCompanyModal company={DUMMY_COMPANY} />
                        )}
                        <EditUserModal />
                        <DeleteUserModal userId={user.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10">
                    No users found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}

      {users.length > pageSize && (
        <div className="mt-6 rounded-lg border border-border bg-card p-4 flex flex-col space-y-4 md:space-y-0 items-center md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            Showing
            <span className="font-medium ml-1">
              {startIndex + 1}-{Math.min(startIndex + pageSize, users.length)}
            </span>
            of
            <span className="font-medium ml-1">{users.length}</span>
          </p>

          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={meta.totalPages}
            dataLength={users.length}
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

export default UserTable;
