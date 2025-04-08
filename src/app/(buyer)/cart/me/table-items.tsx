import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

export default function TableItems() {
	return (
		<Table className="w-[1500px] mx-auto">
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px] text-center">Sản phẩm</TableHead>
					<TableHead className="w-[100px]">Tên</TableHead>
					<TableHead className="w-[100px]">Giá</TableHead>
					<TableHead className="w-[150px] text-center">Số lượng</TableHead>
					<TableHead className="w-[100px]">Tổng cộng</TableHead>
					<TableHead className="w-[100px]">Tương tác</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="flex items-center justify-center">
						<Image
							src={'https://placehold.co/600x400/png'}
							alt="alo"
							width={80}
							height={80}
						/>
					</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>$250.00</TableCell>
					<TableCell className="text-center">
						<Button variant={'secondary'}>-</Button>1
						<Button variant={'secondary'}>+</Button>
					</TableCell>
					<TableCell>$250.00</TableCell>
					<TableCell>
						<Button variant={'destructive'}>X</Button>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
