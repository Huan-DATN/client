'use client';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { useSearchParams } from 'next/navigation';

export default function PaginationComponent({
	totalPages,
}: {
	totalPages: number;
}) {
	const searchParams = useSearchParams();
	const selectedPage = searchParams.get('page') || 1;

	const getURLSelectPage = (page: number) => {
		const params = new URLSearchParams();
		searchParams.forEach((value, key) => {
			params.append(key, value);
		});
		params.set('page', page.toString());
		return `?${params.toString()}`;
	};

	const getURLSelectNextPage = () => {
		const params = new URLSearchParams();
		searchParams.forEach((value, key) => {
			params.append(key, value);
		});
		params.set('page', (parseInt(selectedPage as any) + 1).toString());
		return `?${params.toString()}`;
	};

	const getURLSelectPreviousPage = () => {
		const params = new URLSearchParams();
		searchParams.forEach((value, key) => {
			params.append(key, value);
		});
		params.set('page', (parseInt(selectedPage as any) - 1).toString());
		return `?${params.toString()}`;
	};

	return (
		<div>
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						{selectedPage === '1' ? (
							<PaginationPrevious hidden />
						) : (
							<PaginationPrevious href={getURLSelectPreviousPage()} />
						)}
					</PaginationItem>
					{[...Array(totalPages)].map((_, idx) => (
						<PaginationItem key={idx}>
							<PaginationLink href={getURLSelectPage(idx + 1)}>
								{idx + 1}
							</PaginationLink>
						</PaginationItem>
					))}
					<PaginationItem>
						<PaginationNext href={getURLSelectNextPage()} />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}
