import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.modules.push(path.resolve(__dirname, './'));
    return config;
  },
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
    GMAIL_FROM_EMAIL: process.env.GMAIL_FROM_EMAIL,
    GMAIL_TO_EMAIL: process.env.GMAIL_TO_EMAIL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  // Add Sanity-specific config
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  eslint: {
    // Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
  async rewrites() {
    return [
      {
        source: '/studio/:path*',
        destination: '/studio/:path*',
      },
    ];
  },
  // Optional: Add custom headers for security
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Add Content Security Policy if needed
          // {
          //   key: 'Content-Security-Policy',
          //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
          // }
        ],
      },
    ];
  },
};

export default nextConfig;