import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFormik } from 'formik';

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
};

export default function EventCard({ date, time, title, description, location, eventDeleter, eventEditor }) {

    const [editFormOpen, setEditFormOpen] = useState(false);

    const deleteID = title + '-delete';

    const formik = useFormik({
        initialValues: {
            title: title,
            date: date,
            time: time,
            description: description,
            location: location,
        },

        validate,

        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            eventEditor(values, title);
            setEditFormOpen(current => !current);
        },
    });

    return (
        <Card className='event-cards' border='dark'>
            <Card.Header as="h5">{date} at {time}</Card.Header>
            <Card.Body>
                <Card.Title>{title} at {location}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <div className='card-btns'>
                    <Button variant='success' onClick={setEditFormOpen(current => !current)}>Edit</Button>
                    <Button variant='danger' id={deleteID} onClick={(e) => eventDeleter(e)}>Delete</Button>
                </div>
                
            </Card.Body>

            { editFormOpen ? 
                <div>
                    <hr />
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor='text'>Title</label>
                        <input
                            id='title'
                            name='title'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                        {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}
                        <br />
                        
                        <label htmlFor='date'>Date</label>
                        <input
                            id='date'
                            name='date'
                            type='date'
                            min='1970-01-01'
                            max='2070-12-31'
                            onChange={formik.handleChange}
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
                            value={formik.values.location}
                        />
                        {formik.touched.location && formik.errors.location ? <div>{formik.errors.location}</div> : null}
                        <br />
                        
                        <Button variant='success'  className='submit-btn' type='submit' style={{ marginBottom: '10px'}}>Submit</Button>
                    </form>
                </div> 
            
            : null }

        </Card>
  );
}