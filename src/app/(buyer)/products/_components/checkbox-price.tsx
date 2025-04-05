'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter, useSearchParams } from 'next/navigation';

type CheckboxPriceParams = {
	price: any;
};

export default function CheckboxPrice({ price }: CheckboxPriceParams) {
	const searchParams = useSearchParams();
	const selectedPrice = searchParams.get('priceIds') || '';
	const selectedPriceArray = selectedPrice.split(',');

	const router = useRouter();

	return (
		<div>
			<Checkbox
				id={`price-${price.key}`}
				checked={selectedPriceArray.includes(price.key.toString())}
				onCheckedChange={(e) => {
					const newSelectedPrice = e.valueOf()
						? [...selectedPriceArray, price.key]
						: selectedPriceArray.filter((key) => key !== price.key.toString());

					const params = new URLSearchParams();
					searchParams.forEach((value, key) => {
						params.append(key, value);
					});

					if (newSelectedPrice.length === 1) {
						params.delete('priceIds');
					} else {
						params.set('priceIds', newSelectedPrice.join(','));
					}

					const pageParam = params.get('page');
					if (pageParam) {
						params.delete('page');
					}
					router.push(`?${params.toString()}`);
				}}
			/>
		</div>
	);
}
