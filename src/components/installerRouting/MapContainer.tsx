/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

type Waypoint = {
  id: string;
  name: string;
  type: "warehouse" | "stop";
  lat: number;
  lng: number;
};

type RouteData = {
  waypoints: Waypoint[];
  routePath: [number, number][];
};

const routeData: RouteData = {
  waypoints: [
    {
      id: "warehouse1",
      name: "Ware House -2",
      type: "warehouse",
      lat: 32.35,
      lng: -87.45,
    },
    {
      id: "stop1",
      name: "Manlysville",
      type: "stop",
      lat: 32.45,
      lng: -87.55,
    },
    {
      id: "stop2",
      name: "Marbury",
      type: "stop",
      lat: 32.38,
      lng: -87.35,
    },
    {
      id: "stop3",
      name: "Wetumpka",
      type: "stop",
      lat: 32.33,
      lng: -86.95,
    },
    {
      id: "stop4",
      name: "Tallassee",
      type: "stop",
      lat: 32.42,
      lng: -86.78,
    },
    {
      id: "stop5",
      name: "Shorter",
      type: "stop",
      lat: 32.36,
      lng: -86.55,
    },
    {
      id: "warehouse2",
      name: "Ware House -1",
      type: "warehouse",
      lat: 32.36,
      lng: -87.15,
    },
  ],
  routePath: [
    [32.35, -87.45],
    [32.45, -87.55],
    [32.38, -87.35],
    [32.33, -86.95],
    [32.42, -86.78],
    [32.36, -86.55],
    [32.36, -87.15],
  ],
};

// Dynamic import for Leaflet map
const MapComponent = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-muted">
      <div className="text-muted-foreground">Loading map...</div>
    </div>
  ),
});

export default function MapContainer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <div className="text-muted-foreground">Initializing...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <MapComponent
        waypoints={routeData.waypoints}
        routePath={routeData.routePath}
      />
    </div>
  );
}
