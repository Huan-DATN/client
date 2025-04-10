import http from '@/lib/http';
import {
	AddItemToCartBodyReqType,
	GetCartResType,
} from '@/schemaValidations/cart.schema';

const cartRequest = {
	getCart: (sessionToken: string) =>
		http.get<GetCartResType>('/cart', {
			headers: { Authorization: `Bearer ${sessionToken}` },
		}),
	addItemFromNextClientToNextServer: (id: number, body: { quantity: number }) =>
		http.post(`api/cart/add/${id}`, body, {
			baseUrl: '',
		}),
	addItemFromNextServerToServer: (
		sessionToken: string,
		body: AddItemToCartBodyReqType
	) =>
		http.post(`/cart/add/`, body, {
			headers: { Authorization: `Bearer ${sessionToken}` },
		}),
};

export default cartRequest;
