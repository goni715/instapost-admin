"use client";

import { useState } from "react";
import MapContainer from "@/components/installerRouting/MapContainer";
import RouteHeader from "@/components/installerRouting/RouteHeader";
import MobileRouteList from "@/components/installerRouting/MobileRouteList";

const InstallerRoutingPage = () => {
  const [showMobileList, setShowMobileList] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full bg-background">
      {/* Header */}
      <RouteHeader
        onMobileMenuClick={() => setShowMobileList(!showMobileList)}
      />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Map */}
        <div className="flex-1 w-full relative">
          <MapContainer />
        </div>

        {/* Mobile Route List Overlay */}
        {showMobileList && (
          <div className="absolute inset-0 z-40 lg:hidden">
            <MobileRouteList onClose={() => setShowMobileList(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallerRoutingPage;
