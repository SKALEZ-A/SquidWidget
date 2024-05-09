/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
        config.externals.push('pino-pretty', 'lokijs', 'encoding')
        return config
      },
    transpilePackages: ["@0xsquid/widget"]
};

export default nextConfig;

