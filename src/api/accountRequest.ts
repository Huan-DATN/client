import http from '@/lib/http';
import { UserResType } from '@/schemaValidations/user.schema';

const userRequest = {
	me: (sessionToken: string) =>
		http.get<UserResType>('/user/me', {
			headers: { Authorization: `Bearer ${sessionToken}` },
		}),
	meClient: () => {
		return http.get<UserResType>('/user/me');
	},
	updateMe: (body: any) => http.put<UserResType>('/user/me', body),
};

export default userRequest;
