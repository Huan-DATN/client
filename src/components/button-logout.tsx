'use client';

import authRequest from '@/api/authRequest';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/app-provider';
import { handleErrorApi } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const ButtonLogout = () => {
	const router = useRouter();
	const { setUser } = useAppContext();

	const handleLogout = async () => {
		try {
			await authRequest.logoutFromNextClientToNextServer();
			setUser(null);
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
