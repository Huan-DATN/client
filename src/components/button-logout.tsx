'use client';

import authRequest from '@/api/authRequest';
import { Button } from '@/components/ui/button';
import { handleErrorApi } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const ButtonLogout = () => {
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await authRequest.logoutFromNextClientToNextServer();
			router.push('/login');
		} catch (error) {
			handleErrorApi({
				error,
			});
		}
	};
	return <Button onClick={handleLogout}>Đăng xuất</Button>;
};

export default ButtonLogout;
