export const handleConfirmPasswordChange = (
	{ password, setConfirmPassword, setConfirmPasswordError },
	{ target },
) => {
	setConfirmPassword(target.value);

	let newError = null;

	if (target.value !== password) {
		newError = 'Пароли не совпадают';
	}
	setConfirmPasswordError(newError);
};
