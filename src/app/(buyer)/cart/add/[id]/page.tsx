'use client';

import cartRequest from '@/api/cartRequest';
import { useAppSelector } from '@/hooks/use-app-selector';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
	const quantity = useAppSelector((state) => state.currentProduct.quantity);
	console.log(quantity);
	const router = useRouter();
	const pathname = usePathname();
	const id = pathname.split('/').pop();
	useEffect(() => {
		cartRequest.addItemFromNextClientToNextServer(Number(id), {
			quantity,
		});
		router.push('/cart/me');
		router.refresh();
	}, [router, pathname, id, quantity]);
	return <div></div>;
}
