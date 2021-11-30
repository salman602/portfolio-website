import React, { useRef } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faMobile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// 75_GcD2?_CcH#gA

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const form = useRef();
    const onSubmit = data => {
        console.log(data)
        emailjs.sendForm('service_y9zr2r9', 'template_zjaw2fm', form.current, 'user_I68cGi7z4LdOCYB7Ol7OS')
            .then((result) => {
                console.log(result.text);
                reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="contact" style={{ backgroundColor: '#F6F2ED' }}>
            <Container className="py-5">
                <Row>
                    <Col sm={12} md={5}>
                        <h2 className="py-3">Keep in Touch</h2>
                        <h5><FontAwesomeIcon icon={faMobile} style={{ color: '#FEA770', fontSize: '2rem', marginRight: '0.5rem' }} /> Phone</h5>
                        <p>Mobile: <strong>+880 1679-012046</strong></p>
                        <h5><FontAwesomeIcon icon={faEnvelopeOpenText} style={{ color: '#FEA770', fontSize: '2rem', marginRight: '0.5rem' }} /> Email</h5>
                        <p>dev.salmanrahman@gmail.com</p>
                    </Col>
                    <Col sm={12} md={7} className="d-flex justify-content-center align-items-center">
                        <div>
                            <h2>Send a Message</h2>
                            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="my-5">
                                <input
                                    className="w-100 p-2"
                                    {...register("name", { required: true, maxLength: 30 })}
                                    type="text"
                                    placeholder="Your Name*"
                                    name="name" />
                                <input className="w-100 p-2 my-3" {...register("email")} type="email" placeholder="Email*" name="email" /> <br />
                                <textarea className="w-100 p-2 mb-2" type="text" {...register("message")} placeholder="Message*" name="message" /> <br />
                                <Button className="rounded-pill button_color" variant="outline" type="submit">Send <FontAwesomeIcon icon={faPaperPlane} /></Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;