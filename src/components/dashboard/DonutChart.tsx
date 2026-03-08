/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

interface DonutChartProps {
  title: string;
  data: Array<{ name: string; value: number }>;
}

const COLORS = ["var(--chart-1)", "var(--chart-2)"];

const DonutChart = ({ title, data }: DonutChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              fill="#00C47A"
              dataKey="value"
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              formatter={(value, entry: any) => {
                const payload = entry?.payload as {
                  name: string;
                  value: number;
                };
                return `${payload?.name}: ${payload?.value}`;
              }}
              wrapperStyle={{ paddingLeft: "20px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DonutChart;
