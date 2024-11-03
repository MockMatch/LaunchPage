/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // Apply headers to all routes
        headers: [
          {
            key: 'Permissions-Policy',
            value: '', // Remove unsupported features or specify allowed features
          },
        ],
      },
    ];
  },
};

export default nextConfig;
