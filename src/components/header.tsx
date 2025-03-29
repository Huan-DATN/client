'use client';
import { CommandDialogDemo } from '@/components/command-dialog';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
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
					<Link href={'#'} className="font-bold text-white">
						Trang chủ
					</Link>
				</div>
				<div>
					<CommandDialogDemo />
				</div>
			</section>
		</header>
	);
}
