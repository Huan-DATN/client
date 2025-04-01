import ProductGrid from '@/app/_components/ProductGrid';
import ProductSidebar from './_components/ProductSidebar';

import productCategoryRequest from '@/api/categoryRequest';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { productsData } from '@/hardData/hardData';

export default async function page() {
	const products = productsData;

	const {
		payload: { data },
	} = await productCategoryRequest.getList();
	const categories = data;

	return (
		<div className="flex min-h-screen bg-gray-50">
			<ProductSidebar categories={categories} />
			<main className="flex-1 p-6">
				<ProductGrid products={products} />

				<div className="mt-6 text-center">
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationNext href="#" />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			</main>
		</div>
	);
}
