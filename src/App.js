import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './app.module.css';

export const App = () => {
	const sendFormData = (formData) => {
		console.log(formData);
	};

	const emailRegex = /^\S+@\S+$/i;

	const fieldsSchema = yup.object().shape({
		login: yup
			.string()
			.matches(emailRegex, 'Неверный адрес электронной почты')
			.min(
				10,
				'Неверный адрес электронной почты. Должно быть не меньше 10 символов',
			)
			.max(
				30,
				'Неверный адрес электронной почты. Должно быть не больше 30 символов',
			),
		password: yup
			.string()
			.matches(/^[\w]*$/, 'Неверный пароль. Должны быть только буквы и цифры')
			.min(5, 'Неверный пароль. Должно быть не меньше 5 символов')
			.max(15, 'Неверный пароль. Должно быть не больше 15 символов'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Пароли не совпадают')
			.min(5, 'Неверный пароль. Должно быть не меньше 5 символов')
			.max(15, 'Неверный пароль. Должно быть не больше 15 символов'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		setFocus,
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			confirmPassword: '',
		},
		mode: 'onChange',
		resolver: yupResolver(fieldsSchema),
	});

	const loginError = errors.login?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirmPassword?.message;

	const error = loginError || passwordError || confirmPasswordError;

	if (isValid) {
		setFocus();
	}

	return (
		<div className={styles.app}>
			<form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
				{error && <div className={styles.errorLabel}>{error}</div>}
				<input
					name="login"
					type="text"
					{...register('login', {
						onChange: () => {
							if (isValid) {
								setFocus('submit');
							}
						},
					})}
				/>
				<input
					name="password"
					type="password"
					{...register('password', {
						onChange: () => {
							if (isValid) {
								setFocus('submit');
							}
						},
					})}
				/>
				<input
					name="confirmPassword"
					type="password"
					{...register('confirmPassword', {
						onChange: () => {
							if (isValid) {
								setFocus('submit');
							}
						},
					})}
				/>
				<button type="submit" {...register('submit')} disabled={!!error}>
					Отправить
				</button>
			</form>
		</div>
	);
};
