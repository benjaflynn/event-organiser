import { useFormik } from 'formik';
import { useContext } from 'react';
import { EventContext } from '../EventContext';
import Button from 'react-bootstrap/Button';

{/**displays the form to add a new event, containing options for title, date, time, description, location, and a submit button. uses formik to validate the input,
    with dates only allowed to be set between jan 01, 1970, and dec 31, 2070, as a reasonable time limit. 
    on submission the new event is added to the overarching event array, and stored as the newest event to then be displayed.
*/}

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

    return errors;
};

export default function AddEvent({ setNewEvent }) {

    const { eventArray, setEventArray } = useContext(EventContext);

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
            setNewEvent(values);
            setEventArray([...eventArray, values]);
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
                        placeholder='required'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title ? <div className='error'>{formik.errors.title}</div> : null}
                    <br />
                    
                    <label htmlFor='date'>Date</label>
                    <input
                        id='date'
                        name='date'
                        type='date'
                        min='1970-01-01'
                        max='2070-12-31'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                    />
                    {formik.touched.date && formik.errors.date ? <div className='error'>{formik.errors.date}</div> : null}
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
                    {formik.touched.time && formik.errors.time ? <div className='error'>{formik.errors.time}</div> : null}
                    <br />
                    
                    <label htmlFor='description'>Description</label>
                    <input
                        id='description'
                        name='description'
                        type='text'
                        placeholder='required'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? <div className='error'>{formik.errors.description}</div> : null}
                    <br />
                    
                    <label htmlFor='location'>Location</label>
                    <input
                        id='location'
                        name='location'
                        type='text'
                        placeholder='required'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                    />
                    {formik.touched.location && formik.errors.location ? <div className='error'>{formik.errors.location}</div> : null}
                    <br />
                    
                    <Button variant='success' type='submit' className='submit-btn'>Submit</Button>
                </form>
            </div>
        </div>
    );
}