export const handlePasswordBlur = ({ setPasswordError }, { target }) => {
	if (target.value.length < 6) {
		setPasswordError('Неверный пароль. Должно быть не меньше 6 символов');
	}
};
