import ActivityList from "@/components/dashboard/ActivityList";
import DonutChart from "@/components/dashboard/DonutChart";
import RevenueChart from "@/components/dashboard/RevenueChart";
import StatCard from "@/components/dashboard/StatCard";
import {
  DollarSign,
  ShoppingCart,
  Building2,
  Users,
  Users2,
} from "lucide-react";

const revenueData = [
  { name: "Completed Orders", value: 150 },
  { name: "Active Orders", value: 10 },
];

const plansData = [
  { name: "Active Plans", value: 150 },
  { name: "Expired Plans", value: 10 },
];

const activities = [
  {
    id: "1",
    title: "New Subscriber",
    subtitle: "A new message has arrived",
    time: "8:00am, today",
    link: "#",
  },
  {
    id: "2",
    title: "New Subscriber",
    subtitle: "A new message has arrived",
    time: "8:00am, today",
    link: "#",
  },
  {
    id: "3",
    title: "New Subscriber",
    subtitle: "A new message has arrived",
    time: "8:00am, today",
    link: "#",
  },
];

const DashboardPage = () => {
  return (
    <main className="min-h-screen">
      <div className="space-y-6 sm:space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Dashboard
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Welcome back! Here&apos;s what&apos;s happening with your business today.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          <StatCard
            icon={DollarSign}
            label="Monthly Revenue"
            value="$1000"
            iconColor="text-emerald-500"
            bgColor="bg-[#FEF2F2]"
          />
          <StatCard
            icon={ShoppingCart}
            label="Total Orders"
            value="500"
            iconColor="text-yellow-500"
            bgColor="bg-[#FFFBEB]"
          />
          <StatCard
            icon={Building2}
            label="Total Sign Company"
            value="1000"
            iconColor="text-cyan-500"
            bgColor="bg-[#ECFDF5]"
          />
          <StatCard
            icon={Users}
            label="Total User"
            value="1000"
            iconColor="text-purple-500"
            bgColor="bg-[#FAFDEC]"
          />
          <StatCard
            icon={Users2}
            label="Total Staff"
            value="100"
            iconColor="text-blue-500"
            bgColor="bg-[#F0F6FF]"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <RevenueChart />
          <DonutChart title="Active & Completed Orders" data={revenueData} />
        </div>

        {/* Subscription Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <RevenueChart />
          <DonutChart title="Active & Expired Plans Ratio" data={plansData} />
        </div>

        {/* Activity Section */}
        <ActivityList activities={activities} />
      </div>
    </main>
  );
};

export default DashboardPage;
