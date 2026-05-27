export interface WeatherData {
  id: string
  city: string
  lat: number
  lon: number
  country: string
  temperature: number
  feelsLike: number
  humidity: number
  pressure: number
  windSpeed: number
  windDegree: number
  description: string
  main: string
  icon: string
  timestamp: number
}

export interface Location {
  id: string
  city: string
  lat: number
  lon: number
  country: string
  isPrimary: boolean
}

export interface MapMarker {
  id: string
  city: string
  lat: number
  lon: number
  temperature: number
  description: string
}
