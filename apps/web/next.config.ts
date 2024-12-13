/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn-icons-png.freepik.com"
            },
            {
                protocol: "https",
                hostname: "img.freepik.com"
            },
            {
                protocol: "https",
                hostname: "i.ibb.co"
            }
        ]
    }
};

export default nextConfig;
