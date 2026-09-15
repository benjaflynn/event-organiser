import { useFormik } from 'formik';

{/**displays the form to add a new event, containing options for title, date, time, description, location, and a submit button. uses formik to validate the input. */}

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required field!'
    }

    if (!values.date) {
        errors.date = 'Required field!'
    }

    if (!values.time) {
        errors.time = 'Required field!'
    }

    if (!values.description) {
        errors.description = 'Required field!'
    }

    if (!values.location) {
        errors.location = 'Required field!'
    }
}

export default function AddEvent({ setNewEvent, eventArray }) {

    const formik = useFormik({
        initialValues: {
            title: '',
            date: '',
            time: '',
            description: '',
            location: '',
        },

        validate,

        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            setNewEvent(values);
            eventArray.push(values);
            console.log(eventArray);
        },
    });

    return (
        <div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor='text'>Title</label>
                    <input
                        id='title'
                        name='title'
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}
                    <br />
                    
                    <label htmlFor='date'>Date</label>
                    <input
                        id='date'
                        name='date'
                        type='date'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                    />
                    {formik.touched.date && formik.errors.date ? <div>{formik.errors.date}</div> : null}
                    <br />
                    
                    <label htmlFor='time'>Time</label>
                    <input
                        id='time'
                        name='time'
                        type='time'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.time}
                    />
                    {formik.touched.time && formik.errors.time ? <div>{formik.errors.time}</div> : null}
                    <br />
                    
                    <label htmlFor='description'>Description</label>
                    <input
                        id='description'
                        name='description'
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}
                    <br />
                    
                    <label htmlFor='location'>Location</label>
                    <input
                        id='location'
                        name='location'
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                    />
                    {formik.touched.location && formik.errors.location ? <div>{formik.errors.location}</div> : null}
                    <br />
                    
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}