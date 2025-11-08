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
  xoffset?: number,
  yoffset?: number,
  border?: number,
  ticklineStrokeWidth?: number,
  barStrokeWidth?: number,
}

export default function BarChart({ data, xoffset = 60, yoffset = 400, border = 4, ticklineStrokeWidth = 4, barStrokeWidth = 2}: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BChart
        data={data}
        margin={{bottom: 100, top: border / 2, right: border / 2}}
      >
        <CartesianGrid vertical={false} horizontal={false} fill="white"/>
        <Tooltip
          labelClassName="font-bold"
          contentStyle={{
            border: "4px solid black",
            fontWeight: 600,
          }}
        />
        <CartesianGrid stroke={"#000"} strokeWidth={border} vertical={false}  />
        <Bar
          dataKey="total_num_of_verified_questions"
          stackId="a"
          stroke="#000"
          strokeWidth={barStrokeWidth}
          fill="var(--color-success)"
          name="Verified"
        />
        <Bar
          dataKey="total_num_of_pending_questions"
          stackId="a"
          stroke="#000"
          strokeWidth={barStrokeWidth}
          fill="var(--color-warning)"
          name="Pending"
        />
        <Bar
          dataKey="total_num_of_rejected_questions"
          stackId="a"
          stroke="#000"
          strokeWidth={barStrokeWidth}
          fill="var(--color-error)"
          name="Rejected"
        />
        <XAxis
          dataKey="category"
          angle={-45}
          textAnchor="end"
          height={100}
          tick={{ fill: "#000", fontWeight: "700", fontSize: 12 }}
          axisLine={false}
          tickLine={{ stroke: "#000", strokeWidth: ticklineStrokeWidth }}
        />
        <YAxis
          tick={{ fill: "#000", fontWeight: "700", fontSize: 12 }}
          axisLine={false}
          tickLine={{ stroke: "#000", strokeWidth: ticklineStrokeWidth }}
        />
        {/* This a hack for when border is big because recharts doesn't render it well */}
        <line x1={"100%"} y1={yoffset} x2={"100%"} y2={0} stroke="#000" strokeWidth={border * 2} />
        <line x1={xoffset - border / 2} y1={0} x2={"100%"} y2={0} stroke="#000" strokeWidth={border} />
        <line x1={xoffset} y1={yoffset} x2={xoffset - border / 2} y2={0} stroke="#000" strokeWidth={border} />
        <line x1={xoffset - border / 2} y1={yoffset} x2={"100%"} y2={yoffset} stroke="#000" strokeWidth={border} />
      </BChart>
    </ResponsiveContainer>
  )
}