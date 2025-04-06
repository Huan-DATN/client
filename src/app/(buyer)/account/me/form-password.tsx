'use client';
import userRequest from '@/api/accountRequest';
import authRequest from '@/api/authRequest';
import AlertDialogComponent from '@/components/alert-dialog';
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
import { useAppContext } from '@/context/app-provider';
import { useToast } from '@/hooks/use-toast';
import { handleErrorApi } from '@/lib/utils';
import {
	UpdatePasswordBody,
	UpdatePasswordBodyType,
} from '@/schemaValidations/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function FormPassword() {
	const [loading, setLoading] = useState(false);
	const { setUser } = useAppContext();
	const { toast } = useToast();
	const router = useRouter();
	const form = useForm<UpdatePasswordBodyType>({
		resolver: zodResolver(UpdatePasswordBody),
		defaultValues: {
			oldPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
	});

	async function onSubmit(values: UpdatePasswordBodyType) {
		console.log(values);
		if (loading) return;
		setLoading(true);
		try {
			const result = await userRequest.updatePassword(values);
			toast({
				description: result.payload.message,
			});

			await authRequest.logoutFromNextClientToNextServer();
			setUser(null);
			router.push('/login');
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
				<FormField
					control={form.control}
					name="oldPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Current Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Enter your current password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="newPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>New Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Enter your new password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Confirm your new password"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<AlertDialogComponent
					alertDialogTrigger={
						<Button
							type="button"
							className="!mt-8 w-full"
							disabled={loading || !form.formState.isValid}
						>
							Đổi mật khẩu
						</Button>
					}
					alertDialogTitle={<p>Đổi mật khẩu</p>}
					alertDialogDescription={
						<p>Bạn có chắc chắn muốn đổi mật khẩu không? Bạn sẽ đăng xuất</p>
					}
					alertDialogAction={
						<Button
							type="submit"
							disabled={loading || !form.formState.isValid}
							onClick={() => {
								form.clearErrors();
								form.handleSubmit(onSubmit)();
							}}
						>
							{loading ? 'Loading...' : 'Đổi mật khẩu'}
						</Button>
					}
				/>
			</form>
		</Form>
	);
}
