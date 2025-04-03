'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { useSearchParams } from 'next/navigation';

export default function ProductSidebar({ categories }: { categories: any[] }) {
	const searchParams = useSearchParams();
	const selectedCategory = searchParams.get('categoryId') || '';
	const selectedCategoryArray = selectedCategory.split(',');

	return (
		<aside className="w-full sm:w-1/4 md:w-1/5 p-4 border-r border-gray-200">
			<h2 className="text-lg font-semibold mb-4">Tìm kiếm theo danh mục</h2>

			<div className="">
				{categories.map((category) => (
					<div key={category.id} className="flex items-center mb-2 gap-1">
						<Checkbox
							id={`category-${category.id}`}
							checked={selectedCategoryArray.includes(category.id.toString())}
							onCheckedChange={(e) => {
								const newSelectedCategory = e.valueOf()
									? [...selectedCategoryArray, category.id]
									: selectedCategoryArray.filter(
											(id) => id !== category.id.toString()
									  );

								const params = new URLSearchParams();
								searchParams.forEach((value, key) => {
									params.append(key, value);
								});

								if (newSelectedCategory.length === 0) {
									params.delete('categoryId');
								} else {
									params.set('categoryId', newSelectedCategory.join(','));
								}
								location.href = `?${params.toString()}`;
							}}
						/>
						<label htmlFor={`category-${category.id}`} className="text-sm">
							{category.name}
						</label>
					</div>
				))}
			</div>
		</aside>
	);
}
