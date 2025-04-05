export async function GET(request: Request) {
	return Response.json(
		{
			message: 'Hello from products API',
		},
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
}
