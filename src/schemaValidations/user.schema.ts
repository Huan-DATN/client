import z from 'zod';

export const UserSchema = z
	.object({
		id: z.number(),
		password: z.string(),
		firstName: z.string().nullable(),
		lastName: z.string().nullable(),
		email: z.string(),
		address: z.string().nullable(),
		phone: z.string().nullable(),
		role: z.enum(['SELLER', 'BUYER', 'ADMIN']),
		createdAt: z.date(),
		modifiedAt: z.date(),
		isActive: z.boolean(),
	})
	.strict();

export const UserRes = z
	.object({
		data: UserSchema,
		message: z.string(),
	})
	.strict();

export type UserResType = z.TypeOf<typeof UserRes>;

export const UpdateMeBody = z.object({
	phone: z.string().min(10).max(15),
	firstName: z.string().min(2).max(256),
	lastName: z.string().min(2).max(256),
	address: z.string().min(2).max(256),
});

export const UpdatePasswordBody = z
	.object({
		oldPassword: z.string().min(6).max(256),
		newPassword: z.string().min(6).max(256),
		confirmPassword: z.string().min(6).max(256),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: 'New password do not match',
	});

export const UpdatePasswordRes = z.object({
	message: z.string(),
});

export type UpdatePasswordResType = z.TypeOf<typeof UpdatePasswordRes>;

export type UpdatePasswordBodyType = z.TypeOf<typeof UpdatePasswordBody>;

export type UpdateMeBodyType = z.TypeOf<typeof UpdateMeBody>;
