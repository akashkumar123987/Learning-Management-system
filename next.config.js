// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['utfs.io'],
//   },
// }

// module.exports = nextConfig
// next.config.js

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['example.com'], // Add allowed image domains here
//   },
// };

// module.exports = nextConfig;
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'example.com',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// }
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['example.com'],
//   },
// }


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//       domains: ['localhost']
//   }
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['utfs.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
        port: '',
        pathname: '/media/catalog/product/**',
      },
      
    ],
  },
}

module.exports = nextConfig