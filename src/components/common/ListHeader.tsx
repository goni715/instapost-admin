import { RefreshCw, Search } from "lucide-react";
import { Input } from "../ui/input";
import type React from "react";

type TProps = {
  total: number;
  title: string;
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  children?: React.ReactNode;
  onRefresh?: () => void;
  isFetching?: boolean;
  isLoading?: boolean;
  leftField?: React.ReactNode;
};

const ListHeader = ({
  total,
  title,
  searchQuery,
  setSearchQuery,
  children,
  onRefresh,
  isFetching,
  isLoading,
  leftField,
}: TProps) => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto] md:items-center">
      {/* LEFT: Title + Total */}
      <div className="flex justify-between items-start md:flex-col lg:flex-row lg:items-center lg:justify-start gap-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 text-nowrap">
          {title}
        </h1>

        <div className="flex items-center">
          <span className="text-sm text-gray-600">Total:</span>
          <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 font-semibold rounded-full text-sm">
            {total || 0}
          </span>
        </div>
      </div>

      {/* RIGHT: Controls */}
      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:justify-end">
        {/* Filters (leftField) */}
        {leftField && (
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {leftField}
          </div>
        )}

        {/* Search */}
        {setSearchQuery && (
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        )}

        {/* Extra actions */}
        {children}

        {/* Refresh */}
        {onRefresh && (
          <button
            onClick={onRefresh}
            disabled={isFetching}
            title="Refresh"
            className="w-full sm:w-auto px-4 py-2.5 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
          >
            <RefreshCw
              className={`h-4 w-4 ${
                !isLoading && isFetching ? "animate-spin" : ""
              }`}
            />
            <span className="sm:hidden">Refresh</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ListHeader;
