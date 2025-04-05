import ProductListMainSection from './_components/product-list-main-section';
import ProductSidebar from './_components/product-sidebar';

export default async function page() {
	return (
		<div className="flex min-h-screen bg-gray-50">
			<ProductSidebar />
			<main className="flex-1 p-6">
				<ProductListMainSection />
			</main>
		</div>
	);
}
