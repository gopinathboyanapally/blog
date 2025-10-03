/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: `${process.env.NEXT_PUBLIC_BLOG_URL}/blog/:path*`,
      },
    ];
  },
  images: {
    domains: ['picsum.photos', 'cdn.jsdelivr.net'],
  },
};

export default nextConfig;
