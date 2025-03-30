import ButtonLogout from '@/components/button-logout';
import { CommandDialogDemo } from '@/components/command-dialog';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { AlertDialogTrigger } from '@radix-ui/react-alert-dialog';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
	const cookieStorage = cookies();
	const token = cookieStorage.get('sessionToken');

	return (
		<header className="container max-w-full mx-auto">
			<section className="flex justify-between items-center py-4 px-10">
				<Image
					src={'/img/flag_VietNam.png'}
					width={100}
					height={100}
					alt="flag_VN"
				/>
				<Image
					src={'/img/logoocop.png'}
					width={100}
					height={100}
					alt="logo_ocop"
				/>
			</section>
			<section className="flex flex-row justify-between items-center bg-green-600 px-4 py-5">
				<div className="flex justify-between gap-48">
					<Link href={'#'} className="font-bold text-white">
						Trang chủ
					</Link>
					<Link href={'#'} className="font-bold text-white">
						Trang chủ
					</Link>
					<Link href={'#'} className="font-bold text-white">
						Trang chủ
					</Link>
					<Link href={'#'} className="font-bold text-white">
						Trang chủ
					</Link>

					{token && (
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<button className="font-bold text-white">Đăng xuất</button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										Bạn sẽ đăng xuất khỏi hệ thống
									</AlertDialogTitle>
									<AlertDialogDescription>
										Bạn có chắc chắn muốn đăng xuất khỏi hệ thống không? Nếu bạn
										đăng xuất, bạn sẽ không thể truy cập vào các tính năng của
										hệ thống nữa.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Huỷ</AlertDialogCancel>
									<AlertDialogAction asChild>
										<ButtonLogout />
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					)}

					{!token && (
						<Link href={'/login'} className="font-bold text-white">
							Đăng nhập
						</Link>
					)}
				</div>
				<div>
					<CommandDialogDemo />
				</div>
			</section>
		</header>
	);
}
