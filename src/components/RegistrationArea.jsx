import { useFormik } from 'formik';

const validate = values => {

    const errors = {};

    if (!values.firstname) {
        errors.firstname = 'Required field!';
    } else if (values.firstname.length > 15) {
        errors.firstname = 'Must not be more than 15 characters';
    }

    if (!values.lastname) {
        errors.lastname = 'Required field!';
    } else if (values.lastname.length > 20) {
        errors.lastname = 'Must not be more than 20 characters';
    }

    if (!values.username) {
        errors.username = 'Required field!'
    } else if (values.username.length < 5) {
        errors.username = 'Username too short!'
    } else if(values.username.length > 15) {
        errors.username = 'Username too long!'
    }

    if (!values.email) {
        errors.email = 'Required field!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required field!';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,}$/.test(values.password) ) {
        errors.password = 'Please use at least one upper-case letter, one lower-case letter, one number, and a special character.';
    }

    if (!values.password2) {
        errors.password2 = 'Required field!';
    } else if (values.password != values.password2) {
        errors.password2 = 'Passwords don\'t match!';
    }

    return errors;
}

function RegistrationArea({ setUserData }) {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            password2: '',
        },

        validate,

        onSubmit: values => {
            window.alert('Thank you for registering!');
            console.log(values);
            setUserData(values);
        }
    });

    return(
        <>
            <div className='main-areas'>

                <h4>Don't have an account yet?</h4>

                <form className='input-form' id='register-form' onSubmit={formik.handleSubmit}>
                    <label htmlFor='firstname'>First name</label>
                    <input 
                        id='firstname'
                        name='firstname'
                        type='text'
                        placeholder='required'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname}
                    />
                    {formik.errors.firstname && formik.touched.firstname ? <div className='error'>{formik.errors.firstname}</div> : null}
                    <br />

                    <label htmlFor='lastname'>Last name</label>
                    <input 
                        id='lastname'
                        name='lastname'
                        type='text'
                        placeholder='required'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                    />
                    {formik.errors.lastname && formik.touched.lastname ? <div className='error'>{formik.errors.lastname}</div> : null}
                    <br />

                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        name='username'
                        type='text'
                        placeholder='required'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                    {formik.errors.username && formik.touched.username ? <div className='error'>{formik.errors.username}</div> : null}
                    <br />
                    
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        id='email'
                        name='email'
                        type='email'
                        placeholder='required'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
                    <br />

                    <label>Password</label>
                    <input 
                        id='password'
                        name='password'
                        type='password'
                        placeholder='required'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.errors.password && formik.touched.password ? <div className='error'>{formik.errors.password}</div> : null}
                    <br />

                    <label>Repeat password</label>
                    <input 
                        id='password2'
                        name='password2'
                        type='password'
                        placeholder='required'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password2}
                    />
                    {formik.errors.password2 && formik.touched.password2 ? <div className='error'>{formik.errors.password2}</div> : null}
                    <br />

                    <button className='submit-btn' type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
};

export default RegistrationArea;