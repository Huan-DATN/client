import http from '@/lib/http';
import {
	UpdatePasswordResType,
	UserResType,
} from '@/schemaValidations/user.schema';

const userRequest = {
	me: (sessionToken: string) =>
		http.get<UserResType>('/user/me', {
			headers: { Authorization: `Bearer ${sessionToken}` },
		}),
	meClient: () => {
		return http.get<UserResType>('/user/me');
	},
	updateMe: (body: any) => http.put<UserResType>('/user/update/me', body),
	updatePassword: (body: any) =>
		http.put<UpdatePasswordResType>('/user/update/password', body, {}),
};

export default userRequest;
