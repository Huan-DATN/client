import http from '@/lib/http';
import { PaginationReqType } from '@/schemaValidations/common.schema';
import {
	ProductListResType,
	SearchProductQueryType,
} from '@/schemaValidations/product.schema';

const productRequest = {
	getList: (
		{ page, limit }: PaginationReqType,
		{ name = '%%', categoryIds }: SearchProductQueryType
	) =>
		http.get<ProductListResType>(
			`/product?page=${page}&name=${name}&categoryIds=${categoryIds}`,
			{}
		),
};

export default productRequest;
