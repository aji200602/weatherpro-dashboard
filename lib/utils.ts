import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const convertTemperature = (
  celsius: number,
  unit: 'celsius' | 'fahrenheit'
): number => {
  if (unit === 'fahrenheit') {
    return (celsius * 9) / 5 + 32
  }
  return celsius
}

export const getMarkerColor = (temperature: number): string => {
  if (temperature < 0) return '#3B82F6'
  if (temperature < 10) return '#06B6D4'
  if (temperature < 20) return '#22C55E'
  if (temperature < 30) return '#F97316'
  return '#EF4444'
}
