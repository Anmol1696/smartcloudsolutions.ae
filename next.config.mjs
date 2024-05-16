/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: 'https://www.smartcloudsolutions.ae',
    basePath: '',
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: ['www.smartcloudsolutions.ae'], // Add any external domains if needed
    },
    env: {
        CUSTOM_KEY: 'value', // Example environment variable
    },
    output: 'export' // Enable static export
};

export default nextConfig;
