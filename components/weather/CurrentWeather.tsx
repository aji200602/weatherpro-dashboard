'use client'

import { useState } from 'react'
import { Cloud, Droplets, Wind, Eye, Gauge } from 'lucide-react'

interface CurrentWeatherProps {
  city: string
  temperature: number
  feelsLike: number
  humidity: number
  pressure: number
  windSpeed: number
  visibility: number
  description: string
  icon: string
}

export function CurrentWeather({
  city,
  temperature,
  feelsLike,
  humidity,
  pressure,
  windSpeed,
  visibility,
  description,
  icon,
}: CurrentWeatherProps) {
  return (
    <div className="glass rounded-3xl p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">{city}</h2>
          <p className="text-muted-foreground capitalize">{description}</p>
        </div>
        <div className="text-6xl">{icon}</div>
      </div>

      {/* Main Temperature */}
      <div className="space-y-2">
        <div className="text-7xl font-bold">{Math.round(temperature)}°C</div>
        <p className="text-muted-foreground">Feels like {Math.round(feelsLike)}°C</p>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Humidity */}
        <div className="glass rounded-2xl p-4 flex items-center gap-3">
          <Droplets className="w-8 h-8 text-blue-400" />
          <div>
            <p className="text-xs text-muted-foreground">Humidity</p>
            <p className="text-lg font-semibold">{humidity}%</p>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="glass rounded-2xl p-4 flex items-center gap-3">
          <Wind className="w-8 h-8 text-cyan-400" />
          <div>
            <p className="text-xs text-muted-foreground">Wind Speed</p>
            <p className="text-lg font-semibold">{Math.round(windSpeed)} km/h</p>
          </div>
        </div>

        {/* Pressure */}
        <div className="glass rounded-2xl p-4 flex items-center gap-3">
          <Gauge className="w-8 h-8 text-purple-400" />
          <div>
            <p className="text-xs text-muted-foreground">Pressure</p>
            <p className="text-lg font-semibold">{pressure} mb</p>
          </div>
        </div>

        {/* Visibility */}
        <div className="glass rounded-2xl p-4 flex items-center gap-3">
          <Eye className="w-8 h-8 text-green-400" />
          <div>
            <p className="text-xs text-muted-foreground">Visibility</p>
            <p className="text-lg font-semibold">{Math.round(visibility / 1000)} km</p>
          </div>
        </div>

        {/* Cloud Coverage */}
        <div className="glass rounded-2xl p-4 flex items-center gap-3">
          <Cloud className="w-8 h-8 text-gray-400" />
          <div>
            <p className="text-xs text-muted-foreground">Clouds</p>
            <p className="text-lg font-semibold">Fair</p>
          </div>
        </div>
      </div>
    </div>
  )
}
