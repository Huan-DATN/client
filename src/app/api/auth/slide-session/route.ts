import authRequest from '@/api/authRequest';
import { HttpError } from '@/lib/http';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
	const cookiesStore = cookies();
	const sessionToken = cookiesStore.get('sessionToken');

	if (!sessionToken) {
		return Response.json(
			{ message: 'Không nhận được sessionToken' },
			{ status: 401 }
		);
	}

	try {
		const res = await authRequest.slideSessionFromNextServerToServer(
			sessionToken.value
		);

		const newExpiresAt = new Date(res.payload.data.expiresAt).toUTCString();

		return Response.json(res.payload, {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Set-Cookie': `sessionToken=${sessionToken.value}; path=/; HttpOnly; Expires=${newExpiresAt}; SameSite=Lax; Secure`,
			},
		});
	} catch (error: any) {
		if (error instanceof HttpError) {
			return Response.json(error.payload, { status: error.status });
		}
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
