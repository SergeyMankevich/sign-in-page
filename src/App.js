import { useRef, useState } from 'react';
import { AppLayout } from './app-layout';

export const App = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [loginError, setLoginError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);
	const [confirmPasswordError, setConfirmPasswordError] = useState(null);

	const error = loginError || passwordError || confirmPasswordError;

	const submitButtonRef = useRef(null);
	const loginRef = useRef(null);
	const passwordRef = useRef(null);
	const confirmPasswordRef = useRef(null);

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
		loginRef,
		passwordRef,
		confirmPasswordRef,
		error,
	};

	return <AppLayout state={state} />;
};
