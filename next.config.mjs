/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.vov.vn',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
