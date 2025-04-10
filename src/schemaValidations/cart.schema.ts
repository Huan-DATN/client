import { ProductSchema } from '@/schemaValidations/product.schema';
import { z } from 'zod';

export const CartItemSchema = z.object({
	id: z.number().optional(),
	userId: z.number().optional(),
	productId: z.number().optional(),
	quantity: z.number().optional(),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
	user: z
		.object({
			id: z.number().optional(),
			name: z.string().optional(),
			email: z.string().optional(),
		})
		.optional(),
	product: ProductSchema,
});

export type CartItemSchemaType = z.TypeOf<typeof CartItemSchema>;

export const getCartRes = z.object({
	data: z.array(CartItemSchema),
	message: z.string(),
});
export type GetCartResType = z.TypeOf<typeof getCartRes>;

export const addItemToCartBodyReq = z.object({
	productId: z.number(),
	quantity: z.number().optional().default(1),
});

export type AddItemToCartBodyReqType = z.TypeOf<typeof addItemToCartBodyReq>;
