import http from '@/lib/http';
import { AccountResType } from '@/schemaValidations/account.schema';

const accountRequest = {
	me: (sessionToken: string) =>
		http.get<AccountResType>('/account/me', {
			headers: { Authorization: `Bearer ${sessionToken}` },
		}),
	meClient: () => {
		return http.get<AccountResType>('/account/me');
	},
	updateMe: (body: any) => http.put<AccountResType>('/account/me', body),
};

export default accountRequest;
