import http from '@/lib/http';
import { ProductCategoryListResType } from '@/schemaValidations/product.schema';

const productCategoryRequest = {
	getList: () => http.get<ProductCategoryListResType>('/category'),
};

export default productCategoryRequest;
