/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["images.pexels.com"]
    }
}

module.exports = nextConfig
