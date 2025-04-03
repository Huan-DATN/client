'use client';
import RatingProduct from '@/app/(buyer)/products/_components/RatingProduct';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetail({ params }: { params: { id: string } }) {
	const [quantity, setQuantity] = useState(1);
	const { id } = params; // TODO: Fetch product details from an API or database using the id
	const product = {
		id,
		name: '20g cải bẹ dưa (cải bẹ muối dưa) dễ trồng, năng suất cao',
		price: 100,
		description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
		image: 'https://placehold.co/600x400/png',
		user: {
			id: '1',
		},
		userId: '1',
		startRating: 3,
	};

	const handleAddToCart = () => {
		// TODO: Implement add to cart logic
	};

	return (
		<div className="max-w-6xl mx-auto p-6">
			<div className="flex flex-col md:flex-row gap-6">
				<Image
					src={product.image}
					alt={product.name}
					width={400}
					height={400}
				/>
				<div className="flex-1">
					<h1 className="text-xl font-bold mb-2">{product.name}</h1>
					<div className="text-yellow-400 mb-2">
						{[...Array(5)].map((_, index) => (
							<span key={index} className="text-green-400">
								{index < product.startRating ? '⭐' : ''}
							</span>
						))}
					</div>
					<Link href={`/shop/${product.userId}`}>
						<span className="text-sm text-gray-600 mb-2">Kha Liễu Loan</span>
					</Link>
					<p className="text-blue-600 text-lg font-bold mb-2">
						Giá bán: {product.price} ₫
					</p>
					<p className="text-sm mb-4">{product.name}</p>

					<div className="flex items-center gap-2 mb-4">
						<button
							onClick={() => setQuantity(Math.max(quantity - 1, 1))}
							className="px-2 py-1 border rounded"
						>
							-
						</button>
						<span>{quantity}</span>
						<button
							onClick={() => setQuantity(quantity + 1)}
							className="px-2 py-1 border rounded"
						>
							+
						</button>
					</div>
					<button
						className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
						onClick={handleAddToCart}
					>
						Thêm vào giỏ
					</button>
				</div>
			</div>
			<div className="mt-6">
				<h2 className="text-lg font-bold mb-2">Mô tả sản phẩm</h2>
				<p>{product.description}</p>
			</div>

			<div className="mt-6">
				<h2 className="text-lg font-bold mb-2">Bình luận, đánh giá</h2>
				<RatingProduct />
			</div>
		</div>
	);
}
