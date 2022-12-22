import logo from '../../images/Logo.png';
import { Routes } from '../../types/enums/routes';

const ConfirmationRoute = () => {
	return (
		<div className='flex flex-col items-center rounded-lg bg-white px-9 py-10 text-black'>
			<img src={logo} alt='Black Market' />

			<div className='mt-12 text-center'>
				<p>We’ve just sent you an email</p>
				<p className='mt-6'>Please follow the instructions in order to activate your account</p>

				<a href={Routes.SIGNIN} className='mt-12 block text-blue-500'>
					Go back to Login
				</a>
			</div>
		</div>
	);
};

export default ConfirmationRoute;
