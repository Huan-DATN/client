'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

type AddToCartParams = {
	id: number;
};

export default function AddToCart({ id }: AddToCartParams) {
	const [quantity, setQuantity] = useState(1);
	const handleIncrease = () => {
		setQuantity((prev) => prev + 1);
	};
	const handleDecrease = () => {
		setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
	};

	const handleAddToCart = () => {
		// TODO: Implement add to cart logic
		console.log(`Added ${quantity} of product ${id} to cart`);
	};
	return (
		<>
			<div className="flex items-center gap-2 mb-4">
				<Button className="px-2 py-1 border rounded" onClick={handleDecrease}>
					-
				</Button>
				<span>{quantity}</span>
				<Button className="px-2 py-1 border rounded" onClick={handleIncrease}>
					+
				</Button>
			</div>
			<Button
				className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
				onClick={handleAddToCart}
			>
				Thêm vào giỏ
			</Button>
		</>
	);
}
