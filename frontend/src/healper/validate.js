import { toast } from 'react-hot-toast';

export async function loginDetailsValidation(values) {
    const errors = loginDetailsVerify(values);
    return errors;
}

function loginDetailsVerify(values) {
    const errors = {};

    const specialCharacters = /[^ !" ` '#%&,:;<>=@{}~$()\\*+\/\\?\\[\\]\\^|]/;

    if (!values.username) {
        errors.username = 'UserName Required...!';
    } else if (values.username.includes(' ')) {
        errors.username = 'Invalid Username...!';
    }

    if (!values.password) {
        errors.password = 'Password Required...!';
    } else if (values.password.includes(' ')) {
        errors.password = 'Wrong Password...!';
    } else if (values.password.length < 4) {
        errors.password = 'Password must be at least 4 characters long';
    } else if (!specialCharacters.test(values.password)) {
        errors.password = 'Password must contain at least one special character';
    }

    Object.keys(errors).forEach((key) => {
        toast.error(errors[key]);
    });

    return errors;
}
