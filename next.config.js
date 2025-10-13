/** @type {import('next').NextConfig} */
const nextConfig = {
    // Commented out for development - uncomment for production export
    // output: 'export',
    // trailingSlash: true,
    images: {
        // unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    // Commented out for development - uncomment for GitHub Pages
    // basePath: '/delog',
    // assetPrefix: '/delog',
}

module.exports = nextConfig
