import ProductGrid from '@/app/_components/ProductGrid';

export default function ProductHighlight({
	productsData,
}: {
	productsData: any[];
}) {
	console.log(productsData);
	return (
		<div>
			<div className="p-4">
				<div className="mb-6">
					<h2 className="text-2xl font-bold text-center">
						CÁC SẢN PHẨM OCOP TIÊU BIỂU
					</h2>
				</div>
			</div>
			<ProductGrid />
		</div>
	);
}
