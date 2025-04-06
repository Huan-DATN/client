import FormAccount from '@/app/(buyer)/account/me/form-account';
import FormPassword from '@/app/(buyer)/account/me/form-password';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserResType } from '@/schemaValidations/user.schema';

type TabsAccountProps = {
	account: UserResType['data'];
};

export default function TabsAccount({ account }: TabsAccountProps) {
	return (
		<div>
			<Tabs defaultValue="account" className="w-[500px]">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="account" className="w-full">
						Tài khoản
					</TabsTrigger>
					<TabsTrigger value="password" className="w-full">
						Mật khẩu
					</TabsTrigger>
				</TabsList>
				<TabsContent value="account" className="pt-4">
					<h1 className="text-2xl font-bold">Thông tin của bạn</h1>
					<p className="text-sm text-muted-foreground">
						Cập nhật thông tin tài khoản của bạn để bảo mật tài khoản tốt hơn.
					</p>
					<FormAccount account={account} />
				</TabsContent>
				<TabsContent value="password" className="pt-4">
					<h1 className="text-2xl font-bold">Thay đổi mật khẩu</h1>
					<p className="text-sm text-muted-foreground">
						Cập nhật mật khẩu của bạn để bảo mật tài khoản tốt hơn.
					</p>
					<FormPassword />
				</TabsContent>
			</Tabs>
		</div>
	);
}
