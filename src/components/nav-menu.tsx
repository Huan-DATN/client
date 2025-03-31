'use client';

import ButtonLogout from '@/components/button-logout';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { HomeOutlined, ProductOutlined } from '@ant-design/icons';
import Link from 'next/link';
interface NavMenuProps {
	loggedIn: boolean;
}

export default function NavMenu({ loggedIn }: NavMenuProps) {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink
							className={`${navigationMenuTriggerStyle()} mr-8 bg-transparent text-white`}
						>
							<HomeOutlined />
							Trang chủ
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href="/products" legacyBehavior passHref>
						<NavigationMenuLink
							className={`${navigationMenuTriggerStyle()} mr-8 bg-transparent text-white`}
						>
							<ProductOutlined />
							Sản phẩm
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>

				{loggedIn && (
					<NavigationMenuItem>
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<NavigationMenuLink
									className={`${navigationMenuTriggerStyle()} mr-8 bg-transparent text-white`}
								>
									Đăng xuất
								</NavigationMenuLink>
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
					</NavigationMenuItem>
				)}
				{!loggedIn && (
					<NavigationMenuItem>
						<Link href="/login" legacyBehavior passHref>
							<NavigationMenuLink
								className={`${navigationMenuTriggerStyle()} mr-8 bg-transparent text-white`}
							>
								Đăng nhập
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				)}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const NavigationMenuLinkCustom = ({ children }: any) => {
	return (
		<NavigationMenuLink
			className={`${navigationMenuTriggerStyle()} mr-8 bg-transparent text-white`}
		>
			{children}
		</NavigationMenuLink>
	);
};
