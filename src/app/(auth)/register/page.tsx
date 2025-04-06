import Image from 'next/image';
import Link from 'next/link';
import RegisterForm from './register-form';

export default function RegisterPage() {
	return (
		<>
			<div className="flex flex-col justify-center items-center h-screen">
				<Link href={'/'}>
					<Image
						src={'/img/logoocop.png'}
						width={200}
						height={100}
						alt="flag_VN"
					/>
				</Link>
				<RegisterForm />
			</div>
		</>
	);
}
