import z from 'zod';

export const UserSchema = z
	.object({
		id: z.number(),
		password: z.string(),
		firstName: z.string().nullable(),
		lastName: z.string().nullable(),
		email: z.string(),
		telephone: z.string().nullable(),
		role: z.enum(['SELLER', 'BUYER', 'ADMIN']),
		createdAt: z.date(),
		modifiedAt: z.date(),
		isActive: z.boolean(),
	})
	.strict();

export const UserRes = z
	.object({
		data: z.object({
			id: z.number(),
			password: z.string(),
			firstName: z.string().nullable(),
			lastName: z.string().nullable(),
			email: z.string(),
			telephone: z.string().nullable(),
			role: z.enum(['SELLER', 'BUYER', 'ADMIN']),
			createdAt: z.date(),
			modifiedAt: z.date(),
			isActive: z.boolean(),
		}),
		message: z.string(),
	})
	.strict();

export type UserResType = z.TypeOf<typeof UserRes>;

export const UpdateMeBody = z.object({
	name: z.string().trim().min(2).max(256),
});

export type UpdateMeBodyType = z.TypeOf<typeof UpdateMeBody>;
