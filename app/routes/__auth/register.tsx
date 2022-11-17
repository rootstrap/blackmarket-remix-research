import type { MetaFunction } from '@remix-run/node';
import { InputField } from '~/common';
import { Routes } from '~/types';
import logo from '../../images/Logo.png';

export const meta: MetaFunction = () => {
	return {
		title: 'Blackmarket - SignUp',
		description:
			'Hello there! Black market is an e-commerce of diverse furniture that helps you find restored or new items, it is a web responsive touchpoint. Have fun!',
	};
};

const RegisterRoute = () => {
	return (
		<div className='flex flex-col items-center rounded-lg bg-white px-8 py-6 text-black'>
			<img src={logo} alt='Black Market' />

			<form className='mt-5 w-full'>
				<InputField label='Full Name' placeholder='Type your email' type='email' />
				<InputField label='Email' placeholder='Type your email' type='text' />
				<InputField label='Password' placeholder='Type your password' type='password' />
				<button className='mt-3 w-full rounded-lg bg-black p-3 text-white'>Sign up</button>

				<div className='mt-4 text-center'>
					<p>
						By signing up, you accept the{' '}
						<a href={Routes.HOME} className='text-link'>
							Data Policy
						</a>{' '}
						and the{' '}
						<a href={Routes.HOME} className='text-link'>
							Cookies Policy.
						</a>
					</p>

					<p className='mt-4'>
						Already have an account?{' '}
						<a href={Routes.SIGNIN} className='text-link'>
							{' '}
							Log in
						</a>
					</p>
				</div>
			</form>
		</div>
	);
};

export default RegisterRoute;
