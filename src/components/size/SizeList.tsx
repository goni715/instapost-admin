"use client";

import { useState, type ReactNode } from "react";
import ListHeader from "../common/ListHeader";
import useDebounce from "@/hooks/useDebounce";
import ListLoading from "../loader/ListLoading";
import TableOverlayLoading from "../loader/TableOverlayLoading";
import { DUMMY_SIZES, SIZE_META_DATA } from "@/data/size.data";
import SizeTable from "./SizeTable";
import CreateSizeModal from "../modal/size/CreateSizeModal";

const SizeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {} = useDebounce({ searchQuery, setCurrentPage });

  const isLoading = false;
  const isFetching = false;
  const isError = false;

  const meta = SIZE_META_DATA;

  let content: ReactNode;

  if (isLoading) {
    content = <ListLoading />;
  }

  if (!isLoading && isError) {
    content = <h1 className="text-red-500">Something went wrong</h1>;
  }

  if (!isLoading && !isError) {
    content = (
      <SizeTable
        sizes={DUMMY_SIZES}
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
        title="Size"
        total={meta.total}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoading={isLoading}
        isFetching={isFetching}
      >
        <CreateSizeModal />
      </ListHeader>

      <div className="relative">
        {content}
        {!isLoading && isFetching && <TableOverlayLoading />}
      </div>
    </div>
  );
};

export default SizeList;
