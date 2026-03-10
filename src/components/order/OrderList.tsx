"use client";

import { useState, type ReactNode } from "react";
import ListHeader from "../common/ListHeader";
import useDebounce from "@/hooks/useDebounce";
import ListLoading from "../loader/ListLoading";
import TableOverlayLoading from "../loader/TableOverlayLoading";
import OrderTable from "./OrderTable";

import { DUMMY_ORDERS, ORDER_META_DATA } from "@/data/order.data";

const ORDER_TABS = [
  "All",
  "Installations",
  "Removals",
  "Services",
  "Printing",
  "Media",
  "Open House",
  "Sign Change",
  "For sale",
];

const OrderList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeTab, setActiveTab] = useState("All");

  useDebounce({ searchQuery, setCurrentPage });

  const isLoading = false;
  const isFetching = false;
  const isError = false;

  const meta = ORDER_META_DATA;

  let content: ReactNode;

  if (isLoading) {
    content = <ListLoading />;
  }

  if (!isLoading && isError) {
    content = (
      <h1 className="text-red-500 text-center py-10">Something went wrong</h1>
    );
  }

  if (!isLoading && !isError) {
    content = (
      <OrderTable
        orders={DUMMY_ORDERS}
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
        title="Order Management"
        total={meta.total}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoading={isLoading}
        isFetching={isFetching}
        leftField={
          <div className="flex flex-wrap gap-2">
            {ORDER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                className={`px-4 py-1.5 text-sm rounded-md border transition ${
                  activeTab === tab
                    ? "bg-primary text-white border-primary"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        }
      />

      <div className="relative">
        {content}
        {!isLoading && isFetching && <TableOverlayLoading />}
      </div>
    </div>
  );
};

export default OrderList;
