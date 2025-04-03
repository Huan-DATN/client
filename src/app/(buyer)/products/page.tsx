import ProductGrid from '@/app/_components/ProductGrid';
import ProductSidebar from './_components/ProductSidebar';

import productCategoryRequest from '@/api/categoryRequest';

export default async function page() {
	const {
		payload: { data },
	} = await productCategoryRequest.getList();
	const categories = data;

	return (
		<div className="flex min-h-screen bg-gray-50">
			<ProductSidebar categories={categories} />
			<main className="flex-1 p-6">
				<ProductGrid />
			</main>
		</div>
	);
}
