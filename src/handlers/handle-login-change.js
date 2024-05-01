export const handleLoginChange = (
	{ setLogin, setLoginError, submitButtonRef, passwordRef, confirmPasswordRef },
	{ target },
) => {
	setLogin(target.value);

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	let newError = null;

	if (!emailRegex.test(target.value)) {
		newError = 'Введенный адрес электронной почты некорректен';
	} else if (target.value.length > 30) {
		newError =
			'Введенный адрес электронной почты некорректен. Должно быть не больше 30 символов';
	} else if (passwordRef.current.value && confirmPasswordRef.current.value) {
		submitButtonRef.current.focus();
	}

	setLoginError(newError);
};
