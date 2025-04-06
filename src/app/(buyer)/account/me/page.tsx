import userRequest from '@/api/accountRequest';
import { cookies } from 'next/headers';
import TabsAccount from './tabs-account';

export default async function page() {
	const cookieStore = await cookies();
	const sessionToken = cookieStore.get('sessionToken');

	const result = await userRequest.me(sessionToken?.value || '');

	return (
		<div className="flex flex-col items-center justify-center py-2">
			<TabsAccount account={result.payload.data} />
		</div>
	);
}
