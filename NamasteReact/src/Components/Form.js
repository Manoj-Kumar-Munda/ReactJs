import { useFormik } from 'formik';
import './forms.css';


const Form = () => {
    const formik = useFormik({
        initialValues:{
            name : '',
            email : '',
            channel : ''
        },
        onSubmit : ( values ) => {
            console.log('Form data',values);
        },
        validate : ( values ) => {
            let errors = {};
            if(!values.name){
                errors.name = "!Required";
            }

            if(!values.email){
                errors.name = "!Required";
            }

            if(!values.channel){
                errors.name = "!Required";
            }
        }
    })


    return(
        <div className="form-container">
            <form className="form" onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name='name' onChange={formik.handleChange} value={formik.values.name}/>

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;