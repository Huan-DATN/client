import ProductCard from '@/app/_components/ProductCard';

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
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{productsData.map((product: any, index: number) => {
					return <ProductCard key={index} product={product} />;
				})}
			</div>
		</div>
	);
}
