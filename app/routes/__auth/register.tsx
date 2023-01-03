import { Form, useActionData, useTransition } from '@remix-run/react';
import type { ActionFunction, MetaFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';

import { Button, InputField, ValidationMessage } from '~/common';
import { Routes } from '~/types';
import { register } from '~/api/auth';
import logo from '../../images/Logo.png';

export const meta: MetaFunction = () => {
  return {
    title: 'Blackmarket - SignUp',
    description:
      'Hello there! Black market is an e-commerce of diverse furniture that helps you find restored or new items, it is a web responsive touchpoint. Have fun!',
  };
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const email = body.get('email');
  const password = body.get('password');
  const password2 = body.get('password2');

  const { error } = await register(email, password, password2);

  if (error) return json({ error, email, password, password2 });

  return redirect(Routes.CONFIRMATION);
};

const RegisterRoute = () => {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <div className="flex flex-col items-center rounded-lg bg-white px-8 py-6 text-black">
      <img src={logo} alt="Black Market" />

      <Form className="mt-5 w-full" method="post">
        <fieldset disabled={transition.state === 'submitting'}>
          <legend className="hidden">Register</legend>
          <InputField
            label="Email"
            placeholder="Type your email"
            type="text"
            name="email"
            defaultValue={actionData?.email}
          />
          <InputField
            label="Password"
            placeholder="Type your password"
            type="password"
            name="password"
            defaultValue={actionData?.password}
          />
          <InputField
            label="Password Confirmation"
            placeholder="Type your password"
            type="password"
            name="password2"
            defaultValue={actionData?.password2}
          />
          <Button label={transition.state === 'submitting' ? 'Registering...' : 'Sign up'} fullWidth type="submit" />

          <ValidationMessage
            error={actionData?.error.message || actionData?.error}
            isSubmitting={transition.state === 'submitting'}
          />
        </fieldset>
      </Form>

      <div className="mt-4 text-center">
        <p>
          By signing up, you accept the{' '}
          <a href={Routes.HOME} className="text-blue-500">
            Data Policy
          </a>{' '}
          and the{' '}
          <a href={Routes.HOME} className="text-blue-500">
            Cookies Policy.
          </a>
        </p>

        <p className="mt-4">
          Already have an account?{' '}
          <a href={Routes.SIGNIN} className="text-blue-500">
            {' '}
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterRoute;
