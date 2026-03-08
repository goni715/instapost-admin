"use client";

import HolidayBanner from "@/components/dashboard/HolidayBanner";
import ServiceItem from "@/components/dashboard/ServiceItem";
import SignInstallItem from "@/components/dashboard/SignInstallItem";
import {
  Zap,
  Shield,
  Printer,
  CircleOff,
  RefreshCw,
  Home,
  FileText,
  Brush,
} from "lucide-react";
import { useState } from "react";

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgColor: string;
};

function StatCard({ icon, value, label, bgColor }: StatCardProps) {
  return (
    <div
      className={`${bgColor} rounded-lg p-6 sm:p-8 flex flex-col justify-start shadow-sm`}
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
        {value}
      </h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}


const DashboardPage = () => {
  const [dismissBanner, setDismissBanner] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <StatCard
            icon={<Zap className="w-6 h-6" />}
            value="1000"
            label="Current Install Sign"
            bgColor="bg-emerald-50"
          />
          <StatCard
            icon={<Shield className="w-6 h-6" />}
            value="500"
            label="Total Orders"
            bgColor="bg-amber-50"
          />
        </div>

        {/* Holiday Banner */}
        {!dismissBanner && (
          <HolidayBanner setDismissBanner={setDismissBanner}/>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* For Sale Signs */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
              For Sale Signs
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {/* <ServiceItem
                icon={<Zap className="w-5 h-5" />}
                title="Order New Sign Install"
              /> */}
              <SignInstallItem/>
              <ServiceItem
                icon={<Printer className="w-5 h-5" />}
                title="Order Sign Printing"
              />
              <ServiceItem
                icon={<CircleOff className="w-5 h-5" />}
                title="Order Sign Removal"
              />
              <ServiceItem
                icon={<RefreshCw className="w-5 h-5" />}
                title="Order Sign Change Request"
              />
            </div>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
              Other Services
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <ServiceItem
                icon={<Home className="w-5 h-5" />}
                title="Order Open House Services"
              />
              <ServiceItem
                icon={<FileText className="w-5 h-5" />}
                title="Order Media Services"
              />
              <ServiceItem
                icon={<Brush className="w-5 h-5" />}
                title="Other Service"
                badge="NEW"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
