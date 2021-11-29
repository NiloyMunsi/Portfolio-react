import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'
import { Form } from 'react-bootstrap';

const Result = () => {
    return (
        <p>Your messege has been sent successfully</p>
    )
}

export const ContactUs = () => {
    const form = useRef();
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2kiz60b', 'template_x27oeqf', form.current, 'user_n91jMVTcN3zZfFGy4qTCK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // e.targer.value('');
        // showResult(true);
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact">
            {/* <label>Name</label>
            <input type="text" name="user_name" />
            <br /> */}
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="your_name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="your_email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" textarea name="message" rows={3} placeholder="your_message" />
                </Form.Group>
            </Form>
            {/* <label>Email</label>
            <input type="email" name="user_email" />
            <br />
            <label>Message</label>
            <textarea name="message" />
            <br /> */}
            <input type="submit" value="Send" />
            <div className="row">{result ? <Result /> : null}</div>
        </form>
    );
};