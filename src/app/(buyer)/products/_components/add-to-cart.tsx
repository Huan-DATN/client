'use client';

import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import {
	decrement,
	increment,
	setProductId,
} from '@/redux/currentProduct/currentProductReducer';
import Link from 'next/link';
import { useEffect } from 'react';

type AddToCartParams = {
	id: number;
};

export default function AddToCart({ id }: AddToCartParams) {
	const dispatch = useAppDispatch();
	const quantity = useAppSelector((state) => state.currentProduct.quantity);

	useEffect(() => {
		dispatch(setProductId(id));
	}, [dispatch, id]);

	const handleIncrease = () => {
		dispatch(increment());
	};
	const handleDecrease = () => {
		dispatch(decrement());
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
				asChild
			>
				<Link href={`/cart/add/${id}`}>Thêm vào giỏ</Link>
			</Button>
		</>
	);
}
