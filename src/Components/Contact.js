import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="fullContact">
                <div className="contact_content">
                <h1> KEEP IN TOUCH </h1>
                    <form action="" className='contact_form'>
                        <label htmlFor="" className='labels'>Name : </label>
                        <input type="text" autoComplete='off' id='name' placeholder='your name...'/>
                        
                        <label htmlFor="" className='labels'>Email : </label>
                        <input type="text" autoComplete='off' id='email' placeholder='enter email...'/>

                        <label htmlFor="" className='labels'>Requirments : </label>
                        <input type="text" autoComplete='off' id='requirment' placeholder='your requirments...'/>
                    </form>
                <button>SEND</button>
                </div>
            </div>
        </>
    )
}

export default Contact;