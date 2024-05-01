export const handlePasswordChange = (
	{
		setPassword,
		setPasswordError,
		submitButtonRef,
		loginRef,
		confirmPasswordRef,
		confirmPassword,
	},
	{ target },
) => {
	setPassword(target.value);

	let newError = null;

	if (!/^[\w_]*$/.test(target.value)) {
		newError =
			'Неверный пароль. Допустимые символы: буквы, цифры и нижнее подчёркивание';
	} else if (target.value.length > 10) {
		newError = 'Неверный пароль. Должно быть не больше 10 символов';
	} else if (
		target.value === confirmPassword &&
		loginRef.current.value &&
		confirmPasswordRef.current.value
	) {
		submitButtonRef.current.focus();
	}

	setPasswordError(newError);
};
