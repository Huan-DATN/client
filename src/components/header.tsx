import { CommandDialogDemo } from '@/components/command-dialog';
import NavMenu from '@/components/nav-menu';
import { cookies } from 'next/headers';
import Image from 'next/image';

export default async function Header() {
	const cookiesStore = await cookies();
	const token = cookiesStore.get('sessionToken')?.value;

	return (
		<header className="container max-w-full mx-auto">
			<section className="flex justify-between items-center py-4 px-10">
				<Image
					src={'/img/logoocop.png'}
					width={100}
					height={100}
					alt="logo_ocop"
				/>
				<Image
					src={'/img/flag_VietNam.png'}
					width={100}
					height={100}
					alt="flag_VN"
				/>
			</section>
			<section className="flex flex-row justify-between items-center bg-green-600 px-4 py-5">
				<NavMenu token={token} />
				<div>
					<CommandDialogDemo />
				</div>
			</section>
		</header>
	);
}
