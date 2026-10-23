/** @type {import('next').NextConfig} */
const nextConfig = {
  // The old portfolio lived at /classic; send old links to the current site.
  async redirects() {
    return [{ source: "/classic", destination: "/", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
