import React, {useState} from 'react'
import {validateEmail} from '../../utils/helpers'

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({name: '', email: '', message:''});
    const {name, email, message} = formState;

    function handleChange(e) {
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
    
            if(!isValid){
                setErrorMessage('Your email is invalid.')
            } else {
                if(!e.target.value.length){
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
            if(!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value})
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1 data-testid='h1tag'> Contact Me </h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'> Name:</label>
                    <input onBlur={handleChange} name='name' type="text" defaultValue={name}></input>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input onBlur={handleChange} name='email' type='email' defaultValue={email}></input>
                </div>
                <div>
                    <label htmlFor='message'> Your Message:</label>
                    <textarea onBlur={handleChange} name='message' defaultValue={message} rows='5'></textarea>
                </div>
                {errorMessage && (
                    <div>
                    <p className='error-text'> {errorMessage} </p>
                    </div>
                )}
                <button data-testid="btntag" type='submit'> Submit </button>
            </form>
        </section>
    )
};

export default ContactForm