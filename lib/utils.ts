import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  // Handle image paths for GitHub Pages deployment
  // The basePath from next.config.js is automatically handled by Next.js for most assets,
  // but we need to manually add it for dynamic image paths
  const basePath = process.env.NODE_ENV === 'production' ? '/deloc' : ''
  return `${basePath}${path}`
}
