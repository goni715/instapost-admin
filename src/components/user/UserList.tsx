import { useState, type ReactNode } from "react";
import ListHeader from "../common/ListHeader";
import useDebounce from "@/hooks/useDebounce";
import ListLoading from "../loader/ListLoading";
import TableOverlayLoading from "../loader/TableOverlayLoading";
import UserTable from "./UserTable";
import { DUMMY_USERS, ROLE_OPTIONS, USER_META_DATA } from "@/data/user.data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CreateUserModal from "../modal/user/CreateUserModal";

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [status, setStatus] = useState("");

  const {} = useDebounce({ searchQuery, setCurrentPage });

  const isLoading = false;
  const isFetching = false;
  const isError = false;

  const meta = USER_META_DATA;

  let content: ReactNode;

  if (isLoading) {
    content = <ListLoading />;
  }

  if (!isLoading && isError) {
    content = <h1 className="text-red-500">Something went wrong</h1>;
  }

  if (!isLoading && !isError) {
    content = (
      <UserTable
        users={DUMMY_USERS}
        meta={meta}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    );
  }

  return (
    <div className="w-full mx-auto relative">
      <ListHeader
        title="All User"
        total={meta.total}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoading={isLoading}
        isFetching={isFetching}
        leftField={
          <>
            <Select
              value={status === "all" ? "" : status}
              onValueChange={(val) => {
                setStatus(val);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-full sm:w-45">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  {ROLE_OPTIONS.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </>
        }
      >
        <CreateUserModal />
      </ListHeader>

      <div className="relative">
        {content}
        {!isLoading && isFetching && <TableOverlayLoading />}
      </div>
    </div>
  );
};

export default UserList;
