'use client';
import productRequest from '@/api/productRequest';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import PaginationComponent from '@/app/(buyer)/products/_components/pagination-component';
import ProductGrid from '@/app/_components/product-grid';
import { ProductListResType } from '@/schemaValidations/product.schema';
type productsListType = ProductListResType['data']['products'];

export default function ProductListMainSection() {
	const searchParams = useSearchParams();
	const selectedCategory = searchParams.get('categoryIds') || '';
	const selectedPrice = searchParams.get('priceIds') || '';
	const selectedPage = searchParams.get('page') || 1;
	const [products, setProducts] = useState<productsListType | null>(null);
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
						priceIds: selectedPrice,
					}
				);
				setProducts(response.payload.data.products);
				setTotalPages(response.payload.data.totalPages);
			};

			fetchProducts();
			setLoading(false);
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	}, [selectedCategory, selectedPage, selectedPrice, loading]);

	return (
		<>
			{loading && (
				<div className="flex items-center justify-center h-96">
					<p className="text-gray-500">Loading...</p>
				</div>
			)}
			{products && (
				<>
					<section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
						<ProductGrid products={products} />
					</section>
					<div className="mt-6 text-center">
						<PaginationComponent totalPages={totalPages} />
					</div>
				</>
			)}
			{products?.length === 0 && (
				<div className="flex items-center justify-center h-96">
					<p className="text-gray-500">No products found</p>
				</div>
			)}
		</>
	);
}
