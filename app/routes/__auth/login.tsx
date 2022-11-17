import type { MetaFunction } from '@remix-run/node';
import { InputField } from '~/common';
import { Routes } from '~/types';
import logo from '../../images/Logo.png';

export const meta: MetaFunction = () => {
	return {
		title: 'Blackmarket - SignIn',
		description:
			'Hello there! Black market is an e-commerce of diverse furniture that helps you find restored or new items, it is a web responsive touchpoint. Have fun!',
	};
};

const LoginRoute = () => {
	return (
		<>
			<div className='flex flex-col items-center rounded-lg bg-white px-8 py-6 text-black'>
				<img src={logo} alt='Black Market' />

				<form className='mt-5 w-full'>
					<InputField label='Email' placeholder='Type your email' />
					<InputField label='Password' placeholder='Type your password' type='password' />
					<button className='mt-3 w-full rounded-lg bg-black p-3 text-white'>Log in</button>

					{/* TODO: Define what to do with this button */}
					<a href={Routes.HOME} className='mt-8 block text-center text-link'>
						I forgot my password
					</a>
				</form>
			</div>

			<div className='mt-3 rounded-lg bg-white px-8 py-6 text-center text-black'>
				<p>Don't have an account?</p>
				<a href={Routes.SIGNUP}>
					<button className='mt-3 w-full rounded-lg border-1 border-black bg-white p-3 text-black'>
						Sign up
					</button>
				</a>
			</div>
		</>
	);
};

export default LoginRoute;