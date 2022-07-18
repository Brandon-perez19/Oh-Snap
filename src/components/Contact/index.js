import React, {useState} from 'react'

function ContactForm() {

    const [formState, setFormState] = useState({name: '', email: '', message:''});
    const {name, email, message} = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    console.log(formState)
    return (
        <section>
            <h1> Contact Me </h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'> Name:</label>
                    <input onChange={handleChange} name='name' type="text" defaultValue={name}></input>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input onChange={handleChange} name='email' type='email' defaultValue={email}></input>
                </div>
                <div>
                    <label htmlFor='message'> Your Message:</label>
                    <textarea onChange={handleChange} name='message' defaultValue={message} rows='5'></textarea>
                </div>
                <button type='submit'> Submit </button>
            </form>
        </section>
    )
};

export default ContactForm