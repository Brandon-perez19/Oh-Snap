import React from 'react'

function ContactForm() {
    <section>
        <h1> Contact Me </h1>
        <form id="contact-form">
            <div>
                <label htmlFor='name'> Name:</label>
                <input name='name' type="text" placeholder='Name'></input>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input name='email' type='email' placeholder='Email'></input>
            </div>
            <div>
                <label htmlFor='message'> Your Message:</label>
                <textarea name='message' rows='5'></textarea>
            </div>
            <button type='submit'> Submit </button>
        </form>
    </section>
};

export default ContactForm