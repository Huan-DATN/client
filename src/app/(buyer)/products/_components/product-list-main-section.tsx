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
	const selectedCategory = searchParams.get('categoryId') || '';
	const selectedPage = searchParams.get('page') || 1;
	const [products, setProducts] = useState<productsListType>([]);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
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
		}
	}, [selectedCategory, selectedPage]);

	return (
		<>
			{products.length === 0 && (
				<div className="flex items-center justify-center h-96">
					<p className="text-gray-500">No products found</p>
				</div>
			)}

			{products.length > 0 && (
				<>
					<section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
						<ProductGrid products={products} />
					</section>
					<div className="mt-6 text-center">
						<PaginationComponent totalPages={totalPages} />
					</div>
				</>
			)}
		</>
	);
}
