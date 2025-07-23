"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, ResponsiveContainer } from "recharts"

interface GolfStatsProps {
  fairways?: { value: number; tourAvg: number; data: number[] }
  gir?: { value: number; tourAvg: number; data: number[] }
  sandSaves?: { value: number; tourAvg: number; data: number[] }
  upAndDown?: { value: number; tourAvg: number; data: number[] }
  putts?: { value: number; tourAvg: number; data: number[] }
  strokesGained?: { value: number; tourAvg: number; data: number[] }
}

const defaultData = [65, 68, 72, 69, 75, 71, 73, 70, 74, 72]

export default function GolfStatsDashboard({
  fairways = { value: 72, tourAvg: 68, data: defaultData },
  gir = { value: 68, tourAvg: 65, data: defaultData },
  sandSaves = { value: 58, tourAvg: 52, data: defaultData },
  upAndDown = { value: 64, tourAvg: 61, data: defaultData },
  putts = { value: 28.4, tourAvg: 29.1, data: defaultData },
  strokesGained = { value: 1.2, tourAvg: 0.0, data: defaultData },
}: GolfStatsProps) {
  const stats = [
    { label: "Fairways", value: `${fairways.value}%`, tourAvg: `${fairways.tourAvg}%`, data: fairways.data },
    { label: "GIR", value: `${gir.value}%`, tourAvg: `${gir.tourAvg}%`, data: gir.data },
    { label: "Sand Saves", value: `${sandSaves.value}%`, tourAvg: `${sandSaves.tourAvg}%`, data: sandSaves.data },
    { label: "Up & Down", value: `${upAndDown.value}%`, tourAvg: `${upAndDown.tourAvg}%`, data: upAndDown.data },
    { label: "Putts", value: putts.value.toString(), tourAvg: putts.tourAvg.toString(), data: putts.data },
    {
      label: "Strokes Gained",
      value: strokesGained.value > 0 ? `+${strokesGained.value}` : strokesGained.value.toString(),
      tourAvg: strokesGained.tourAvg.toString(),
      data: strokesGained.data,
    },
  ]

  const chartData = (data: number[]) => data.map((value, index) => ({ value, index }))

  return (
    <div
      className="min-h-screen bg-surface p-8"
      style={{ fontFamily: "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-text">Golf Statistics</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="rounded-2xl border-0 bg-white shadow-soft">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-text">{stat.value}</div>

                  <div className="h-12">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData(stat.data)}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#9CA3AF"
                          strokeWidth={1.5}
                          dot={false}
                          activeDot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">Tour Avg: {stat.tourAvg}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
