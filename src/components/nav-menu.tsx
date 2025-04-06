'use client';

import AlertDialogComponent from '@/components/alert-dialog';
import ButtonLogout from '@/components/button-logout';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useAppContext } from '@/context/app-provider';
import {
	HomeOutlined,
	ProductOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
interface NavMenuProps {
	loggedIn: boolean;
}

export default function NavMenu() {
	const { isAuthenticated } = useAppContext();
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

				{isAuthenticated && (
					<>
						<NavigationMenuItem>
							<Link href="/account/me" legacyBehavior passHref>
								<NavigationMenuLink
									className={`${navigationMenuTriggerStyle()} mr-8 bg-transparent text-white`}
								>
									<SettingOutlined />
									Tài khoản
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<AlertDialogComponent
							alertDialogTrigger={
								<NavigationMenuLink
									className={`${navigationMenuTriggerStyle()} mr-8 bg-transparent text-white`}
								>
									Đăng xuất
								</NavigationMenuLink>
							}
							alertDialogTitle={<p>Đăng xuất</p>}
							alertDialogDescription={
								<p>Bạn có chắc chắn muốn đăng xuất không?</p>
							}
							alertDialogAction={<ButtonLogout />}
						/>
						<NavigationMenuItem>
							<Link href="/cart/me" legacyBehavior passHref>
								<NavigationMenuLink
									className={`${navigationMenuTriggerStyle()} mr-8 bg-transparent text-white`}
								>
									<SettingOutlined />
									Giỏ hàng
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</>
				)}
				{!isAuthenticated && (
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
