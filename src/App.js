import { useEffect, useRef, useState } from 'react';
import { AppLayout } from './app-layout';

export const App = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [loginError, setLoginError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);
	const [confirmPasswordError, setConfirmPasswordError] = useState(null);

	const error = loginError || passwordError || confirmPasswordError;

	let isFormEmpthy = login === '' || password === '' || confirmPassword === '';
	const submitButtonRef = useRef(null);

	useEffect(() => {
		if (!error) {
			submitButtonRef.current.focus();
		}
	}, [error]);

	const state = {
		login,
		setLogin,
		password,
		setPassword,
		confirmPassword,
		setConfirmPassword,
		setLoginError,
		setPasswordError,
		setConfirmPasswordError,
		submitButtonRef,
		error,
		isFormEmpthy,
	};

	return <AppLayout state={state} />;
};
