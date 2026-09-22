import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';

const validate = values => {

    const errors = {};

    if (!values.firstname) {
        errors.firstname = 'Required field!';
    } else if (values.firstname.length > 15) {
        errors.firstname = 'Must not be more than 15 characters';
    } else if (/^[A-Za-z]$/.test(values.firstname)) {
        errors.firstname = 'Must only contain letters.'
    }

    if (!values.lastname) {
        errors.lastname = 'Required field!';
    } else if (values.lastname.length > 20) {
        errors.lastname = 'Must not be more than 20 characters';
    } else if (/^[A-Za-z]$/.test(values.lastname)) {
        errors.lastname = 'Must only contain letters.'
    }

    if (!values.username) {
        errors.username = 'Required field!'
    } else if (values.username.length < 5) {
        errors.username = 'Username too short!'
    } else if (values.username.length > 15) {
        errors.username = 'Username too long!'
    }

    if (!values.email) {
        errors.email = 'Required field!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required field!';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,}$/.test(values.password)) {
        errors.password = <>Password needs to contain one of each:<ul style={{listStyleType: 'none'}}><li>upper-case letter</li><li>lower-case letter</li><li>number</li><li>special character</li></ul></>
    } else if (values.password.length < 8) {
        errors.password = <>Password needs to be at least 8 characters long</>
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
            setUserData(values);
        }
    });

    function helpFN() {
        document.getElementById('registration-area').style.display = 'none';
        document.getElementById('registration-help').style.display = 'block';
        document.getElementById('help-btn').style.display = 'none';
        document.getElementById('unhelp-btn').style.display = 'block';
    }

    function unhelpFN() {
        document.getElementById('registration-area').style.display = 'block';
        document.getElementById('registration-help').style.display = 'none';
        document.getElementById('help-btn').style.display = 'block';
        document.getElementById('unhelp-btn').style.display = 'none';
    }

    return(
        <>
            <div className='main-areas' id='registration-area' style={{ display: 'block' }}>

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

                    <Button className='submit-btn' variant='success' type='submit'>Submit</Button>
                </form>

            </div>

            <div id='registration-help' style={{ display: 'none'}}>
                <p>This tool helps you organise your events, but first you need to register an account!</p>
                <p>If you have registered but have since refreshed the page you will have to register again.</p>
                <p>Otherwise, simply fill in the registration form with your first name, your last name, your preferred username, and your email. Pick a password, then repeat it again to ensure you typed everything correctly.
                    Then you can hit 'submit' and you should get a pop-up confirming your registration. Also, the registration form will vanish, leaving you with the login form.</p>
                <p>To log in, simply enter the email address and the password you registered your account under and hit 'submit', and you'll be able to see your dashboard.</p>
                <p>Here are some further tips to make the registration process go smoothly:</p>
                <ol id='tips-list'>
                    <li>Your first and last names can't be longer than 15 and 20 characters respectively. Also, you can only use letters, no numbers or symbols allowed!</li>
                    <li>Your username needs to be between 5 and 15 letters.</li>
                    <li>Your email must have the format of [something]@[something].[end]</li>
                    <li>Your password must be longer than 8 characters. Also, it needs at least one upper case letter, one lower case letter, one number, and one symbol. For security!</li>
                </ol>
                <br />
                <p>Once you're registered and logged in, click on 'Help' on the top of the page if you need help adding an event.</p>
            </div>

            <br />

            <Button variant='secondary' className='registration-help-btns' id='help-btn' onClick={helpFN} style={{ display: 'block' }}>Help, I don't know what I'm doing!</Button>
            <Button variant='secondary' className='registration-help-btns' id='unhelp-btn' onClick={unhelpFN} style={{ display: 'none' }}>Okay, I understand now!</Button>
        </>
    )
};

export default RegistrationArea;