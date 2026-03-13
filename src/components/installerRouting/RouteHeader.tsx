import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, Menu, Zap } from "lucide-react";

interface RouteHeaderProps {
  onMobileMenuClick: () => void;
}

const RouteHeader = ({ onMobileMenuClick }: RouteHeaderProps) => {
  return (
    <header className="border-b border-border bg-card px-4 sm:px-6 py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Title and Mobile Menu */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMobileMenuClick}
              className="text-foreground"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <h1 className="text-xl font-semibold text-foreground">
            Installer Routing
          </h1>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          {/* All Installer Dropdown */}
          <div className="min-w-40">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-40 bg-white text-foreground border-border">
                <SelectValue placeholder="All Installer" />
                <ChevronDown className="h-4 w-4 opacity-50" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Installer</SelectItem>
                <SelectItem value="installer1">Installer 1</SelectItem>
                <SelectItem value="installer2">Installer 2</SelectItem>
                <SelectItem value="installer3">Installer 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reorder Route Dropdown */}
          <div className="min-w-40">
            <Select defaultValue="optimize">
              <SelectTrigger className="w-full sm:w-40 bg-white text-foreground border-border">
                <SelectValue placeholder="Reorder Route" />
                <ChevronDown className="h-4 w-4 opacity-50" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="optimize">Reorder Route</SelectItem>
                <SelectItem value="shortest">Shortest Distance</SelectItem>
                <SelectItem value="fastest">Fastest Time</SelectItem>
                <SelectItem value="manual">Manual Order</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Generate Route Button */}
          <Button
            className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            size="default"
          >
            <Zap className="h-4 w-4" />
            <span>Generate route</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default RouteHeader;
