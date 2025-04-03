'use client';
import productRequest from '@/api/productRequest';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { ProductSchema } from '@/schemaValidations/product.schema';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import ProductCard from './ProductCard';

export default function ProductGrid() {
	const searchParams = useSearchParams();
	const selectedCategory = searchParams.get('categoryId') || '';
	const selectedPage = searchParams.get('page') || 1;
	const [products, setProducts] = useState<z.TypeOf<typeof ProductSchema>[]>(
		[]
	);
	const [totalPages, setTotalPages] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		try {
			const fetchProducts = async () => {
				const response = await productRequest.getList(
					{
						page: parseInt(selectedPage as any),
						limit: 10,
					},
					{
						categoryIds: selectedCategory,
					}
				);
				setProducts(response.payload.data.products);
				setTotalPages(response.payload.data.totalPages);
			};

			fetchProducts();
		} catch (error) {
			console.error('Error fetching products:', error);
		} finally {
			setLoading(false);
		}
	}, [selectedCategory, selectedPage]);

	const getURLSelectPage = (page: number) => {
		const params = new URLSearchParams();
		searchParams.forEach((value, key) => {
			params.append(key, value);
		});
		params.set('page', page.toString());
		return `?${params.toString()}`;
	};

	const getURLSelectNextPage = () => {
		const params = new URLSearchParams();
		searchParams.forEach((value, key) => {
			params.append(key, value);
		});
		params.set('page', (parseInt(selectedPage as any) + 1).toString());
		return `?${params.toString()}`;
	};

	const getURLSelectPreviousPage = () => {
		const params = new URLSearchParams();
		searchParams.forEach((value, key) => {
			params.append(key, value);
		});
		params.set('page', (parseInt(selectedPage as any) - 1).toString());
		return `?${params.toString()}`;
	};

	return (
		<>
			<section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
				{products.map((product, idx) => (
					<ProductCard product={product} key={idx} />
				))}
			</section>
			<div className="mt-6 text-center">
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							{selectedPage === '1' ? (
								<PaginationPrevious hidden />
							) : (
								<PaginationPrevious href={getURLSelectPreviousPage()} />
							)}
						</PaginationItem>
						{[...Array(totalPages)].map((_, idx) => (
							<PaginationItem key={idx}>
								<PaginationLink href={getURLSelectPage(idx + 1)}>
									{idx + 1}
								</PaginationLink>
							</PaginationItem>
						))}
						<PaginationItem>
							<PaginationNext href={getURLSelectNextPage()} />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</>
	);
}
