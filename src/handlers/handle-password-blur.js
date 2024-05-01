export const handlePasswordBlur = ({ setPasswordError }, { target }) => {
	if (target.value.length < 3) {
		setPasswordError('Неверный пароль. Должно быть не меньше 3 символов');
	}
};
