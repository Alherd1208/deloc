import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  // Handle image paths for deployment scenarios
  // For GitHub Pages or similar deployments, you might need to add a base path
  const basePath = process.env.NODE_ENV === 'production' ? '' : ''
  return `${basePath}${path}`
}
