"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 5000 },
  { month: "Mar", revenue: 6500 },
  { month: "Apr", revenue: 7200 },
  { month: "May", revenue: 8100 },
  { month: "Jun", revenue: 9300 },
  { month: "Jul", revenue: 10500 },
  { month: "Aug", revenue: 11200 },
  { month: "Sep", revenue: 11800 },
  { month: "Oct", revenue: 12500 },
  { month: "Nov", revenue: 13200 },
  { month: "Dec", revenue: 14000 },
];

const RevenueChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Revenue Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="month"
              stroke="var(--muted-foreground)"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              style={{ fontSize: "12px" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
              formatter={(value) => `$${value}`}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
