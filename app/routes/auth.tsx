import { Outlet } from '@remix-run/react';

/* TODO: Implement Auth Layout */

const Auth = () => {
	return (
		<div>
			<div className='form__container'>
				<Outlet />
			</div>
		</div>
	);
};

export default Auth;
