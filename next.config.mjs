/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.canva.com',
        port: '', // Leave empty unless a specific port is needed
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
    }
};

export default nextConfig;
