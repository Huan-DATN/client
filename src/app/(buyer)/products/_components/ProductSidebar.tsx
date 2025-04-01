export default async function ProductSidebar({
	categories,
}: {
	categories: any[];
}) {
	return (
		<aside className="w-full sm:w-1/4 md:w-1/5 p-4 border-r border-gray-200">
			<h2 className="text-lg font-semibold mb-4">Tìm kiếm theo danh mục</h2>

			<div className="">
				{categories.map((category) => (
					<div key={category.id} className="flex items-center mb-2">
						<input
							type="checkbox"
							id={`category-${category.id}`}
							className="mr-2"
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
