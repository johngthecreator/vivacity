/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.johngorriceta.com',
          },
        ],
      },
}

module.exports = nextConfig
