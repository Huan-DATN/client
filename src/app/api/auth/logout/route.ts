import authRequest from '@/api/authRequest';
import { HttpError } from '@/lib/http';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
	const res = await request.json();
	const force = res.force as boolean | undefined;

	if (force) {
		return Response.json(
			{
				message: 'Buộc đăng xuất thành công',
			},
			{
				status: 200,
				headers: {
					'Set-Cookie': 'sessionToken=; path=/; HttpOnly; Max-Age=0',
				},
			}
		);
	}
	const cookiesStore = cookies();
	const sessionToken = cookiesStore.get('sessionToken');

	if (!sessionToken) {
		return Response.json(
			{ message: 'Không nhận được sessionToken' },
			{ status: 401 }
		);
	}

	try {
		const result = await authRequest.logoutFromNextServerToServer(
			sessionToken.value
		);

		return Response.json(result.payload, {
			status: 200,
			headers: {
				'Set-Cookie': 'sessionToken=; path=/; HttpOnly; Max-Age=0',
			},
		});
	} catch (error: any) {
		if (error instanceof HttpError) {
			return Response.json(error.payload, { status: error.status });
		} else {
			return Response.json(
				{
					message: 'Lỗi không xác định',
				},
				{
					status: 500,
				}
			);
		}
	}
}
