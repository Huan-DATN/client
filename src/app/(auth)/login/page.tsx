import Image from 'next/image';
import LoginForm from './login-form';

export default function LoginPage() {
	return (
		<>
			<div className="flex flex-col justify-center items-center h-screen">
				<Image
					src={'/img/logoocop.png'}
					width={200}
					height={100}
					alt="flag_VN"
				/>
				<LoginForm />
			</div>
		</>
	);
}
