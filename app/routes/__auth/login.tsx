import { useActionData, useNavigate, useTransition, Form } from '@remix-run/react';
import type { ActionFunction, MetaFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';

import { InputField, Button, ValidationMessage } from '~/common';
import { Routes } from '~/types';
import { login } from '~/api/auth';
import logo from '../../images/Logo.png';

export const meta: MetaFunction = () => {
  return {
    title: 'Blackmarket - SignIn',
    description:
      'Hello there! Black market is an e-commerce of diverse furniture that helps you find restored or new items, it is a web responsive touchpoint. Have fun!',
  };
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const email = body.get('email');
  const password = body.get('password');

  const { error } = await login(email, password);

  if (error) return json({ error, email, password });

  return redirect(Routes.HOME);
};

const LoginRoute = () => {
  const transition = useTransition();
  const navigate = useNavigate();
  const actionData = useActionData();

  return (
    <>
      <div className="flex flex-col items-center rounded-lg bg-white px-8 py-6 text-black">
        <img src={logo} alt="Black Market" />

        <Form className="mt-5 w-full" method="post">
          <fieldset disabled={transition.state === 'submitting'}>
            <legend className="hidden">Login</legend>
            <InputField label="Email" placeholder="Type your email" name="email" defaultValue={actionData?.email} />
            <InputField
              label="Password"
              placeholder="Type your password"
              type="password"
              name="password"
              defaultValue={actionData?.password}
            />
            <Button
              label={transition.state === 'submitting' ? 'Authenticating...' : 'Log in'}
              fullWidth
              type="submit"
            />

            <ValidationMessage
              error={actionData?.error.message || actionData?.error}
              isSubmitting={transition.state === 'submitting'}
            />

            <a href={Routes.HOME} className="mt-8 block text-center text-blue-500">
              I forgot my password
            </a>
          </fieldset>
        </Form>
      </div>

      <div className="mt-3 rounded-lg bg-white px-8 py-6 text-center text-black">
        <p>Don't have an account?</p>
        <Button label="Sign up" variant="outline" fullWidth onClick={() => navigate(Routes.SIGNUP)} />
      </div>
    </>
  );
};

export default LoginRoute;
