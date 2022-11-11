import { Outlet } from '@remix-run/react';
import { AuthLayout } from '~/layouts';

const Auth = () => {
	return (
		<AuthLayout>
			<Outlet />
		</AuthLayout>
	);
};

export default Auth;
