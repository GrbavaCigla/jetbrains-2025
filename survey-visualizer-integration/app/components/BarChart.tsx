"use client"
import {
  BarChart as BChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: any[] | undefined,
}

export default function BarChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <BChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
      >
        <Tooltip
          labelClassName="font-bold"
          contentStyle={{
            border: "4px solid black",
            fontWeight: 600,
          }}
        />
        <CartesianGrid stroke="#aaa" strokeWidth={4} />
        <Bar
          dataKey="total_num_of_pending_questions"
          stackId="a"
          stroke="#000"
          strokeWidth={2}
          fill="#D3F527"
          name="Pending"
        />
        <Bar
          dataKey="total_num_of_rejected_questions"
          stackId="a"
          stroke="#000"
          strokeWidth={2}
          fill="#F54927"
          name="Rejected"
        />
        <Bar
          dataKey="total_num_of_verified_questions"
          stackId="a"
          stroke="#000"
          strokeWidth={2}
          fill="#27F5B0"
          name="Verified"
        />
        <XAxis
          dataKey="category"
          angle={-45}
          textAnchor="end"
          height={100}
          tick={{ fill: "#000", fontWeight: "700", fontSize: 12 }}
          axisLine={{ stroke: "#000", strokeWidth: 4 }}
          tickLine={{ stroke: "#000", strokeWidth: 4 }}
        />
        <YAxis
          tick={{ fill: "#000", fontWeight: "700", fontSize: 12 }}
          axisLine={{ stroke: "#000", strokeWidth: 4 }}
          tickLine={{ stroke: "#000", strokeWidth: 4 }}
        />
      </BChart>
    </ResponsiveContainer>
  )
}