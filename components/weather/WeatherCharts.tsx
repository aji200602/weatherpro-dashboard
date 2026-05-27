'use client'

import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ChartDataPoint {
  time: string
  temperature?: number
  humidity?: number
  windSpeed?: number
  pressure?: number
}

interface WeatherChartsProps {
  temperatureData: ChartDataPoint[]
  humidityData: ChartDataPoint[]
  windSpeedData: ChartDataPoint[]
  pressureData: ChartDataPoint[]
}

export function WeatherCharts({
  temperatureData,
  humidityData,
  windSpeedData,
  pressureData,
}: WeatherChartsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Temperature Chart */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Temperature Trend (24h)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px' }} />
            <Line 
              type="monotone" 
              dataKey="temperature" 
              stroke="#EF4444" 
              strokeWidth={2}
              dot={false}
              name="Temperature (°C)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Humidity Chart */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Humidity Level</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={humidityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px' }} />
            <Area 
              type="monotone" 
              dataKey="humidity" 
              fill="#3B82F6" 
              stroke="#1E40AF"
              name="Humidity (%)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Wind Speed Chart */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Wind Speed</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={windSpeedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px' }} />
            <Bar 
              dataKey="windSpeed" 
              fill="#06B6D4" 
              name="Wind Speed (km/h)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pressure Chart */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Atmospheric Pressure</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={pressureData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px' }} />
            <Line 
              type="monotone" 
              dataKey="pressure" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              dot={false}
              name="Pressure (mb)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
