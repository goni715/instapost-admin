"use client";

import { useState, type ReactNode } from "react";
import ListHeader from "../common/ListHeader";
import ListLoading from "../loader/ListLoading";
import TableOverlayLoading from "../loader/TableOverlayLoading";
import CreateWarehouseModal from "../modal/warehouse/CreateWarehouseModal";
import WarehouseDetailsTable from "./WarehouseDetailsTable";
import { DUMMY_SINGLE_WAREHOUSE_DATA, SINGLE_WAREHOUSE_META_DATA } from "@/data/warehouse.data";

const WarehouseDetailsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);


  const isLoading = false;
  const isFetching = false;
  const isError = false;

  const meta = SINGLE_WAREHOUSE_META_DATA;

  let content: ReactNode;

  if (isLoading) {
    content = <ListLoading />;
  }

  if (!isLoading && isError) {
    content = <h1 className="text-red-500">Something went wrong</h1>;
  }

  if (!isLoading && !isError) {
    content = (
      <WarehouseDetailsTable
        warehouses={DUMMY_SINGLE_WAREHOUSE_DATA}
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
        title="Warehouse-01"
        total={meta.total}
        backButton
        isLoading={isLoading}
        isFetching={isFetching}
      >
        <CreateWarehouseModal />
      </ListHeader>

      <div className="relative">
        {content}
        {!isLoading && isFetching && <TableOverlayLoading />}
      </div>
    </div>
  );
};

export default WarehouseDetailsList;
