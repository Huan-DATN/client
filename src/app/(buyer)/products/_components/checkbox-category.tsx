'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter, useSearchParams } from 'next/navigation';

type CheckboxCategoryParams = {
	category: any;
};

export default function CheckboxCategory({ category }: CheckboxCategoryParams) {
	const searchParams = useSearchParams();
	const selectedCategory = searchParams.get('categoryId') || '';
	const selectedCategoryArray = selectedCategory.split(',');

	const router = useRouter();

	return (
		<Checkbox
			id={`category-${category.id}`}
			checked={selectedCategoryArray.includes(category.id.toString())}
			onCheckedChange={(e) => {
				const newSelectedCategory = e.valueOf()
					? [...selectedCategoryArray, category.id]
					: selectedCategoryArray.filter((id) => id !== category.id.toString());

				const params = new URLSearchParams();
				searchParams.forEach((value, key) => {
					params.append(key, value);
				});

				if (newSelectedCategory.length === 0) {
					params.delete('categoryId');
				} else {
					params.set('categoryId', newSelectedCategory.join(','));
				}
				// location.href = `?${params.toString()}`;
				router.push(`?${params.toString()}`);
			}}
		/>
	);
}
