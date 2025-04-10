import cartRequest from '@/api/cartRequest';
import { cookies } from 'next/headers';
import TableItems from './table-items';

export default async function CartMe() {
	const cookiesStore = cookies();
	const clientSessionToken = cookiesStore.get('sessionToken');
	const {
		payload: { data },
	} = await cartRequest.getCart(clientSessionToken?.value as string);

	return (
		<div>
			<TableItems items={data} />
		</div>
	);
}
