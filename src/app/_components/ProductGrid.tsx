import ProductCard from './ProductCard';

export default function ProductGrid({ products }: { products: any[] }) {
	return (
		<section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
			{products.map((product, idx) => (
				<ProductCard product={product} key={idx} />
			))}
		</section>
	);
}
