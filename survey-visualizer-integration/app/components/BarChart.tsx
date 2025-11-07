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
        margin={{bottom: 100, left: 40, top:2, right:2}}
      >
        <CartesianGrid vertical={false} horizontal={false} fill="white"/>
        <Tooltip
          labelClassName="font-bold"
          contentStyle={{
            border: "4px solid black",
            fontWeight: 600,
          }}
        />
        <CartesianGrid stroke={"#000"} strokeWidth={4} verticalPoints={[1332]}  />
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
          axisLine={false}
          tickLine={{ stroke: "#000", strokeWidth: 0 }}
        />
        <YAxis
          tick={{ fill: "#000", fontWeight: "700", fontSize: 12 }}
          axisLine={false}
          tickLine={{ stroke: "#000", strokeWidth: 0 }}
        />
        {/* This a hack for when border is big because recharts doesn't render it well */}
        <line x1={98} y1={0} x2={1334} y2={0} stroke="#000" strokeWidth={4} />
        <line x1={100} y1={400} x2={100} y2={0} stroke="#000" strokeWidth={4} />
        <line x1={98} y1={400} x2={1334} y2={400} stroke="#000" strokeWidth={4} />
      </BChart>
    </ResponsiveContainer>
  )
}