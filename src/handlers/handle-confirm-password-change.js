export const handleConfirmPasswordChange = (
	{
		password,
		setConfirmPassword,
		setConfirmPasswordError,
		submitButtonRef,
		passwordRef,
		loginRef,
	},
	{ target },
) => {
	setConfirmPassword(target.value);

	let newError = null;

	if (target.value !== password) {
		newError = 'Пароли не совпадают';
	} else if (loginRef.current.value && passwordRef.current.value) {
		submitButtonRef.current.focus();
	}

	setConfirmPasswordError(newError);
};
