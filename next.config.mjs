/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: 'https://raw.githubusercontent.com/Anmol1696/smartcloudsolutions.ae/gh-pages/',
    basePath: '',
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: ['raw.githubusercontent.com'], // Add any external domains if needed
    },
    env: {
        CUSTOM_KEY: 'value', // Example environment variable
    },
    output: 'export' // Enable static export
};

export default nextConfig;
