import ProductCard from '@/app/_components/product-card';

export default function ProductGrid({ products }: { products: any[] }) {
	return (
		<>
			{products.map((product, idx) => (
				<ProductCard product={product} key={idx} />
			))}
		</>
	);
}
