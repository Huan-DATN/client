'use client';
import { ProductSchema } from '@/schemaValidations/product.schema';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

export default function ProductCard({
	product,
}: {
	product: z.TypeOf<typeof ProductSchema>;
}) {
	const router = useRouter();

	return (
		<div
			onClick={() => {
				router.push(`/products/${product.id}`);
			}}
			className="border rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-200 p-3 bg-white flex flex-col cursor-pointer"
		>
			<Image
				className="h-48 w-full object-cover object-center"
				src={product.image}
				alt="Product Image"
				width={320}
				height={320}
			/>
			<div className="p-4">
				<h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
					{product.name}
				</h2>
				<p className="mb-2 text-base dark:text-gray-300 text-gray-700">
					{product.description}
				</p>
				<div className="flex items-center">
					<p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
						{product.price}
					</p>
					{/* <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
						{product.discount}
					</p>
					{product.discountPercentage > 0 && (
						<p className="ml-auto text-base font-medium text-green-500">
							{product.discountPercentage}% off
						</p>
					)} */}
				</div>
			</div>
		</div>
	);
}
