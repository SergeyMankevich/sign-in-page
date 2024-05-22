export const handlePasswordChange = ({ setPassword, setPasswordError }, { target }) => {
	setPassword(target.value);

	let newError = null;

	if (!/^[\w_]*$/.test(target.value)) {
		newError =
			'Неверный пароль. Допустимые символы: буквы, цифры и нижнее подчёркивание';
	} else if (target.value.length > 14) {
		newError = 'Неверный пароль. Должно быть не больше 14 символов';
	}

	setPasswordError(newError);
};
