/**
 * Get the correct image path for GitHub Pages deployment
 * @param path - The image path starting with /
 * @returns The correct path with base path prefix
 */
export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/deloc' : '';
  return `${basePath}${path}`;
}
