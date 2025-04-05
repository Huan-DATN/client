import productCategoryRequest from '@/api/categoryRequest';
import CheckboxCategory from '@/app/(buyer)/products/_components/checkbox-category';
import CheckboxPrice from '@/app/(buyer)/products/_components/checkbox-price';

export default async function ProductSidebar() {
	const {
		payload: { data },
	} = await productCategoryRequest.getList();

	const { categories, prices } = data;

	return (
		<aside className="w-full sm:w-1/4 md:w-1/5 p-4 border-r border-gray-200">
			<h2 className="text-lg font-semibold mb-4">Tìm kiếm theo danh mục</h2>

			<div className="">
				{categories.map((category) => (
					<div key={category.id} className="flex items-center mb-2 gap-1">
						<CheckboxCategory category={category} />
						<label htmlFor={`category-${category.id}`} className="text-sm">
							{category.name}
						</label>
					</div>
				))}
			</div>

			<div className="">
				<h2 className="text-lg font-semibold mb-4">Tìm kiếm theo giá tiền</h2>

				{prices.map((price) => (
					<div key={price.key} className="flex items-center mb-2 gap-1">
						<CheckboxPrice price={price} />
						<label htmlFor={`price-${price.key}`} className="text-sm">
							{price.value}
						</label>
					</div>
				))}
			</div>
		</aside>
	);
}
