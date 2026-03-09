import { lazy, Suspense, useState, type ReactNode } from "react";
import ListLoading from "../loader/ListLoading";
import TableOverlayLoading from "../loader/TableOverlayLoading";
import useDebounce from "@/hooks/useDebounce";
import ListHeader from "../common/ListHeader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import AuthenticationCard from "../card/AuthenticationCard";
import { useGetAdminsQuery } from "@/redux/features/admin/adminApi";
import CreateAdminModal from "../modal/admin/CreateAdminModal";
const AdminTable = lazy(() => import("./AdminTable"));

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const { searchTerm } = useDebounce({ searchQuery, setCurrentPage }); //debounce handled
  const { data, isLoading, isFetching, isError, refetch, error } =
    useGetAdminsQuery([
      { name: "page", value: currentPage },
      { name: "limit", value: pageSize },
      { name: "searchTerm", value: searchTerm },
      { name: "status", value: status === "all" ? "" : status },
    ]);

  const fetchError = error as FetchBaseQueryError;
  const admins = data?.data || [];
  const meta = data?.meta || {};

  let content: ReactNode;

  if (isLoading) {
    content = <ListLoading />;
  }
  if (!isLoading && isError && fetchError?.status === 401) {
    content = <AuthenticationCard />;
  }

  if (!isLoading && isError) {
    content = <h1 className="text-red-500">Something Went Wrong</h1>;
  }

  if (!isLoading && !isError) {
    content = (
      <Suspense fallback={<ListLoading />}>
        <AdminTable
          admins={admins}
          meta={meta}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </Suspense>
    );
  }

  return (
    <div className="w-full mx-auto relative">
      {/* Header Part */}
      <ListHeader
        title="Admin List"
        total={meta?.total}
        onRefresh={refetch}
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
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </>
        }
      >
        <CreateAdminModal />
      </ListHeader>

      {/* table part */}
      <div className="relative">
        {content}
        {!isLoading && isFetching && <TableOverlayLoading />}
      </div>
    </div>
  );
};

export default UserList;
