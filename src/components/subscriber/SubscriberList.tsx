"use client";
import { useState, type ReactNode } from "react";
import ListHeader from "../common/ListHeader";
import useDebounce from "@/hooks/useDebounce";
import ListLoading from "../loader/ListLoading";
import TableOverlayLoading from "../loader/TableOverlayLoading";
import SubscriberTable from "./SubscriberTable";
import {
  DUMMY_SUBSCRIBERS,
  PLAN_OPTIONS,
  SUBSCRIBER_META_DATA,
} from "@/data/subscriber.data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SubscriberList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [plan, setPlan] = useState("");

  const {} = useDebounce({ searchQuery, setCurrentPage });

  const isLoading = false;
  const isFetching = false;
  const isError = false;

  const meta = SUBSCRIBER_META_DATA;

  let content: ReactNode;

  if (isLoading) {
    content = <ListLoading />;
  }

  if (!isLoading && isError) {
    content = <h1 className="text-red-500">Something went wrong</h1>;
  }

  if (!isLoading && !isError) {
    content = (
      <SubscriberTable
        subscribers={DUMMY_SUBSCRIBERS}
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
        title="Subscriber Management"
        total={meta.total}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoading={isLoading}
        isFetching={isFetching}
        leftField={
          <>
            <Select
              value={plan === "all" ? "" : plan}
              onValueChange={(val) => {
                setPlan(val);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-full sm:w-45">
                <SelectValue placeholder="Filter by plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  {PLAN_OPTIONS.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </>
        }
      />
      <div className="relative">
        {content}
        {!isLoading && isFetching && <TableOverlayLoading />}
      </div>
    </div>
  );
};

export default SubscriberList;
