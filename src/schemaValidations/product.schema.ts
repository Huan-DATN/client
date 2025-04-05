import z from 'zod';

export const ProductCategorySchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	image: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export const ProductSchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	quantity: z.number(),
	price: z.number(),
	image: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
	userId: z.number(),
	user: z.object({
		id: z.number(),
		firstName: z.string(),
		lastName: z.string(),
	}),
});

export type ProductCategorySchemaType = z.TypeOf<typeof ProductCategorySchema>;

export const ProductCategoryListRes = z
	.object({
		data: z.array(ProductCategorySchema),
		message: z.string(),
	})
	.strict();

export type ProductCategoryListResType = z.TypeOf<
	typeof ProductCategoryListRes
>;

export const ProductListRes = z.object({
	data: z.object({
		products: z.array(ProductSchema),
		totalPages: z.number(),
		totalProducts: z.number(),
	}),
	message: z.string(),
});

export type ProductListResType = z.TypeOf<typeof ProductListRes>;

export const SearchProductQuery = z.object({
	name: z.string().optional(),
	categoryIds: z.string().optional(),
});
export type SearchProductQueryType = z.infer<typeof SearchProductQuery>;

export const ProductDetailRes = z.object({
	data: ProductSchema,
	message: z.string(),
});

export type ProductDetailResType = z.TypeOf<typeof ProductDetailRes>;
