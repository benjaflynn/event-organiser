import { useFormik } from 'formik';

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
}

export default function LoginArea({ userData, setLoginData, userCheck }) {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validate,

        onSubmit: values => {
            console.log(values);
            setLoginData(values);
            userCheck(userData, values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='email'>Email Address</label>
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

            <label htmlFor='password'>Password</label>
            <input
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? <div className='error'>{formik.errors.email}</div> : null}

            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}