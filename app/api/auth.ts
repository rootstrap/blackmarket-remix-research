import type { LoginResponse, SignupResponse } from '~/types';
import { httpClient } from '.';

const validateEmail = (email: unknown) => {
	if (typeof email !== 'string' || email.length < 3) {
		return 'Email must be at least 3 characters long';
	}
	if (!(email.includes('@') && email.includes('.'))) return 'Invalid Email format';
};

const validatePassword = (password: unknown) => {
	if (typeof password !== 'string' || password.length < 6) {
		return `Passwords must be at least 6 characters long`;
	}
};

export const validatePasswordConfirmation = (password: unknown, password2: unknown) => {
	if (password !== password2) {
		return "Passwords don't match";
	}
};

export const login = async (email: unknown, password: unknown) => {
	let response: LoginResponse | unknown;
	let error: string | unknown;

	error = validateEmail(email);
	if (error) return { error };

	error = validatePassword(password);
	if (error) return { error };

	try {
		response = await httpClient.post<LoginResponse>('dj-rest-auth/login/', {
			email,
			password,
		});
	} catch (err) {
		error = err;
	}

	return { response, error };
};

export const register = async (email: unknown, password1: unknown, password2: unknown) => {
	let response: SignupResponse | unknown;
	let error: string | unknown;

	error = validateEmail(email);
	if (error) return { error };

	error = validatePassword(password1);
	if (error) return { error };

	error = validatePassword(password2);
	if (error) return { error };

	error = validatePasswordConfirmation(password1, password2);
	if (error) return { error };

	try {
		response = await httpClient.post<SignupResponse>('dj-rest-auth/registration/', {
			email,
			password1,
			password2,
		});
	} catch (err) {
		error = err;
	}

	console.log({ response });
	return { response, error };
};
