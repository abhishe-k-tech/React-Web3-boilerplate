import * as Yup from 'yup'

export const SignUpValidatior = Yup.object().shape({
	name: Yup.string().required('This field is required.'),
	email: Yup.string()
		.trim()
		.matches(
			/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
			'Enter a valid email address',
		)
		.required('This field is required.'),
	password: Yup.string()
		.trim()
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
			'At least 8 characters, 1 number, 1 uppercase letter, 1 lowercase letter, one special character',
		)
		.required('This field is required.'),
	confirm_password: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirm password is required'),
	contact_no: Yup.number().required('This field is required.'),
})
