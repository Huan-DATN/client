'use client';

import userRequest from '@/api/accountRequest';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { handleErrorApi } from '@/lib/utils';
import {
	UpdateMeBody,
	UpdateMeBodyType,
	UserResType,
} from '@/schemaValidations/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormAccountProps = {
	account: UserResType['data'];
};

export default function FormAccount({ account }: FormAccountProps) {
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();
	const router = useRouter();
	const form = useForm<UpdateMeBodyType>({
		resolver: zodResolver(UpdateMeBody),
		defaultValues: {
			firstName: account.firstName || '',
			lastName: account.lastName || '',
			phone: account.phone || '',
			address: account.address || '',
		},
	});

	async function onSubmit(values: UpdateMeBodyType) {
		console.log(values);
		if (loading) return;
		setLoading(true);
		try {
			const result = await userRequest.updateMe(values);
			toast({
				description: result.payload.message,
			});
			router.refresh();
		} catch (error: any) {
			handleErrorApi({
				error,
				setError: form.setError,
			});
		} finally {
			setLoading(false);
		}
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-2 max-w-[600 px] flex-shrink-0 w-full"
				noValidate
			>
				<FormLabel>Email</FormLabel>
				<FormControl>
					<Input
						placeholder="shadcn"
						type="email"
						value={account.email}
						readOnly
					/>
				</FormControl>
				<FormMessage />

				<div className="grid grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Họ</FormLabel>
								<FormControl>
									<Input placeholder="Họ" type="text" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Tên</FormLabel>
								<FormControl>
									<Input placeholder="Tên" type="text" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Số điện thoại</FormLabel>
							<FormControl>
								<Input placeholder="Số điện thoại" type="text" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="address"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Địa chỉ</FormLabel>
							<FormControl>
								<Input placeholder="Địa chỉ" type="text" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="!mt-8 w-full">
					Cập nhật
				</Button>
			</form>
		</Form>
	);
}
