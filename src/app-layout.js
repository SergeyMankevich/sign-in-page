import styles from './app.module.css';
import {
	handleLoginChange,
	handlePasswordChange,
	handleConfirmPasswordChange,
	handlePasswordBlur,
	handleSubmit,
} from './handlers';

export const AppLayout = ({ state }) => {
	return (
		<div className={styles.app}>
			<form
				className={styles.form}
				onSubmit={(event) => handleSubmit(state, event)}
			>
				<h1>Регистрация</h1>
				{state.error && <div className={styles.errorLabel}>{state.error}</div>}
				<input
					name="email"
					type="email"
					ref={state.loginRef}
					value={state.login}
					placeholder="Логин"
					onChange={(event) => handleLoginChange(state, event)}
				></input>
				<input
					name="password"
					type="password"
					ref={state.passwordRef}
					value={state.password}
					placeholder="Пароль"
					onChange={(event) => handlePasswordChange(state, event)}
					onBlur={(event) => handlePasswordBlur(state, event)}
				></input>
				<input
					name="password"
					type="password"
					ref={state.confirmPasswordRef}
					value={state.confirmPassword}
					placeholder="Повторите пароль"
					onChange={(event) => handleConfirmPasswordChange(state, event)}
				></input>
				<button
					ref={state.submitButtonRef}
					type="submit"
					disabled={!!state.error}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
