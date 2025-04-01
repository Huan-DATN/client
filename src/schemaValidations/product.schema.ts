import z from 'zod';

export const ProductCategorySchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	image: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
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
