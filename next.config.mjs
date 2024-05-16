/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '/',
    basePath: '',
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: [], // Add any external domains if needed
    },
    env: {
        CUSTOM_KEY: 'value', // Example environment variable
    },
};

export default nextConfig;
