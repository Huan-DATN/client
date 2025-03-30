import http from '@/lib/http';
import {
	CreateProductBodyType,
	ProductResType,
} from '@/schemaValidations/product.schema';

const productRequest = {
	getList: () => http.get<ProductResType[]>('/products'),
	create: (body: CreateProductBodyType) =>
		http.post<ProductResType>('/products', body),
};

export default productRequest;
