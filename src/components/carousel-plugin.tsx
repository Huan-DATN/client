'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import * as React from 'react';

export function CarouselPlugin({
	carouselData,
}: {
	carouselData: { src: string; alt: string }[];
}) {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	return (
		<Carousel
			plugins={[plugin.current]}
			className="max-w-max max-h-full flex justify-center items-center"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{carouselData.map((data, index) => (
					<CarouselItem key={index}>
						<Card>
							<CardContent className="flex justify-center items-center p-0">
								<Image
									className="object-cover object-center"
									src={data.src}
									alt={data.alt}
									width={500}
									height={1500}
								/>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
