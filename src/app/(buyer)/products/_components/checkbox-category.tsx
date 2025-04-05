'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter, useSearchParams } from 'next/navigation';

type CheckboxCategoryParams = {
	category: any;
};

export default function CheckboxCategory({ category }: CheckboxCategoryParams) {
	const searchParams = useSearchParams();
	const selectedCategory = searchParams.get('categoryIds') || '';
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

				if (newSelectedCategory.length === 1) {
					params.delete('categoryIds');
				} else {
					params.set('categoryIds', newSelectedCategory.join(','));
				}

				const pageParam = params.get('page');
				if (pageParam) {
					params.delete('page');
				}
				// location.href = `?${params.toString()}`;
				router.push(`?${params.toString()}`);
			}}
		/>
	);
}
