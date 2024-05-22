import * as yup from 'yup';

export const registrationFormSchema = yup.object().shape({
	email: yup.string().required('Заполните почту').email('Почта введена неверно'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(/^[\w]*$/, 'Неверный пароль. Должны быть только буквы и цифры')
		.min(6, 'Неверный пароль. Должно быть не меньше 6 символов')
		.max(15, 'Неверный пароль. Должно быть не больше 15 символов'),
	confirmPassword: yup
		.string()
		.required('Заполните повтор пароля')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});
