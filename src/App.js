import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationFormSchema } from './registration-form-schema';
import styles from './app.module.css';
import { useEffect, useRef } from 'react';

export const App = () => {
	const sendFormData = (formData) => {
		console.log(formData);
	};

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			confirmPassword: '',
		},
		mode: 'onChange',
		resolver: yupResolver(registrationFormSchema),
	});

	const submitButtonRef = useRef(null);

	const loginError = errors.login?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirmPassword?.message;

	const error = loginError || passwordError || confirmPasswordError;

	useEffect(() => {
		if (isValid) {
			submitButtonRef.current.focus();
		}
	}, [isValid]);

	return (
		<div className={styles.app}>
			<h1>Регистрация</h1>
			<form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
				{error && <div className={styles.errorLabel}>{error}</div>}
				<input type="text" placeholder="Почта..." {...register('login')} />
				<input
					type="password"
					placeholder="Пароль..."
					{...register('password')}
				/>
				<input
					type="password"
					placeholder="Повтор пароля..."
					{...register('confirmPassword')}
				/>
				<button
					type="submit"
					{...register('submit')}
					disabled={!isValid}
					ref={submitButtonRef}
				>
					Отправить
				</button>
			</form>
		</div>
	);
};
