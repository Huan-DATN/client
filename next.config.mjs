/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.vov.vn',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
