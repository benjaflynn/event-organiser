import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';

{/**form to allow the user to log in. form input is validataed through formik. upon submission the data is stored as the new login data and the function checking whether
    the registered data matches the login data is called.
*/}

const validate = values => {
    const errors = {};

    if(!values.email) {
        errors.email = 'Required field!';
    } else if (!/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address!'
    }

    if (!values.password) {
        errors.password = 'Required field!';
    } else if (values.password.length < 8) {
        errors.password = 'Your password is too short!';
    }

    return errors;
}

export default function LoginArea({ userData, setLoginData, userCheck }) {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validate,

        onSubmit: values => {
            setLoginData(values);
            userCheck(userData, values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className='input-form' id='login-form'>
            <label htmlFor='email' className='login-label'>Email Address</label>
            <br />
            <input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}

            <br />

            <label htmlFor='password' className='login-label'>Password</label>
            <br />
            <input
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? <div className='error'>{formik.errors.password}</div> : null}

            <br />
            <Button type='submit' variant='success' className='submit-btn'>Submit</Button>
        </form>
    );
}