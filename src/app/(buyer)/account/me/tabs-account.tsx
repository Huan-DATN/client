import FormAccount from '@/app/(buyer)/account/me/form-account';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserResType } from '@/schemaValidations/user.schema';

type TabsAccountProps = {
	account: UserResType['data'];
};

export default function TabsAccount({ account }: TabsAccountProps) {
	return (
		<div>
			<Tabs defaultValue="account" className="w-[400px]">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="password">Password</TabsTrigger>
				</TabsList>
				<TabsContent value="account">
					<FormAccount account={account} />
				</TabsContent>
				<TabsContent value="password">Change your password here.</TabsContent>
			</Tabs>
		</div>
	);
}
