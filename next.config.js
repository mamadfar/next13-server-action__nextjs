/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["images.pexels.com", "fakeimg.pl"]
    }
}

module.exports = nextConfig
