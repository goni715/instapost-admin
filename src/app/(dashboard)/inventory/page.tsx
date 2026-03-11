"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableViewComponent from "@/components/inventory/TableView";
import WarehouseViewComponent from "@/components/inventory/WarehouseView";
import OfficeViewComponent from "@/components/inventory/OfficeView";
import AgentViewComponent from "@/components/inventory/AgentView";
import CardGridViewComponent from "@/components/inventory/CardGridView";
import { Plus } from "lucide-react";

const InventoryPage = () => {
  const [activeTab, setActiveTab] = useState("table");

  return (
    <main className="min-h-screen bg-white shadow rounded-md">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between px-4 py-6 md:px-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 text-nowrap">
              Inventory Management
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Track and manage all inventory items
            </p>
          </div>
          <Button
            size="lg"
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Plus className="h-4 w-4" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-card">
        <div className="px-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="flex w-full gap-2 bg-transparent p-0 overflow-x-auto flex-nowrap shrink-0">
              <TabsTrigger
                value="table"
                className="whitespace-nowrap rounded-md px-4 py-3 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="hidden sm:inline">Table View</span>
                <span className="sm:hidden ">Table</span>
              </TabsTrigger>

              <TabsTrigger
                value="agent"
                className="whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md px-4 py-3 text-sm font-medium"
              >
                <span className="hidden sm:inline">Agent</span>
                <span className="sm:hidden">Agent</span>
              </TabsTrigger>

              <TabsTrigger
                value="office"
                className="whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md px-4 py-3 text-sm font-medium"
              >
                <span className="hidden sm:inline">Office</span>
                <span className="sm:hidden">Office</span>
              </TabsTrigger>

              <TabsTrigger
                value="warehouse"
                className="whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md px-4 py-3 text-sm font-medium"
              >
                <span className="hidden sm:inline">Warehouse</span>
                <span className="sm:hidden">Store</span>
              </TabsTrigger>

              <TabsTrigger
                value="grid"
                className="whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md px-4 py-3 text-sm font-medium"
              >
                <span className="hidden sm:inline">My Inventory</span>
                <span className="sm:hidden">Inventory</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="table" className="space-y-6">
            <TableViewComponent />
          </TabsContent>
          <TabsContent value="agent" className="space-y-6">
            <AgentViewComponent />
          </TabsContent>
          <TabsContent value="office" className="space-y-6">
            <OfficeViewComponent />
          </TabsContent>
          <TabsContent value="warehouse" className="space-y-6">
            <WarehouseViewComponent />
          </TabsContent>
          <TabsContent value="grid" className="space-y-6">
            <CardGridViewComponent />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default InventoryPage;
