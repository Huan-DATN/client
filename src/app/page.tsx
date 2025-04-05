import ProductHighlight from '@/app/_components/product-highlight';
import { CarouselPlugin } from '@/components/carousel-plugin';
import Header from '@/components/header';
import { carouselData, productsData } from '@/hardData/hardData';

export default function Home() {
	return (
		<div>
			<Header />
			<CarouselPlugin carouselData={carouselData} />
			<ProductHighlight productsData={productsData} />
		</div>
	);
}
