export const handleLoginChange = ({ setLogin, setLoginError }, { target }) => {
	setLogin(target.value);

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	let newError = null;

	if (!emailRegex.test(target.value)) {
		newError = 'Введенный адрес электронной почты некорректен';
	} else if (target.value.length > 40) {
		newError =
			'Введенный адрес электронной почты некорректен. Должно быть не больше 40 символов';
	}

	setLoginError(newError);
};
