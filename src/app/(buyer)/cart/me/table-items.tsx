'use client';
import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { GetCartResType } from '@/schemaValidations/cart.schema';
import Image from 'next/image';

type ItemsType = GetCartResType['data'];

export default function TableItems({ items }: { items: ItemsType }) {
	return items.length > 0 ? (
		<Table className="w-[1500px] mx-auto">
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px] text-center">Sản phẩm</TableHead>
					<TableHead className="w-[100px]">Tên</TableHead>
					<TableHead className="w-[100px]">Đơn Giá</TableHead>
					<TableHead className="w-[150px] text-center">Số lượng</TableHead>
					<TableHead className="w-[100px]">Tổng cộng</TableHead>
					<TableHead className="w-[100px]">Tương tác</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{items.map((item) => (
					<TableRow key={item.id}>
						<TableCell className="flex items-center justify-center">
							<Image
								src={'https://placehold.co/600x400/png'}
								alt="alo"
								width={80}
								height={80}
							/>
						</TableCell>
						<TableCell>{item.product.name}</TableCell>
						<TableCell>{item.product.price}</TableCell>
						<TableCell className="text-center">
							<Button variant={'secondary'}>-</Button>
							<span className="mx-2">{item.quantity}</span>
							<Button variant={'secondary'}>+</Button>
						</TableCell>
						<TableCell>{item.product.price * item.quantity!}</TableCell>
						<TableCell>
							<Button variant={'destructive'}>X</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	) : (
		<div className="text-center text-2xl font-bold">
			Giỏ hàng của bạn đang trống
		</div>
	);
}
