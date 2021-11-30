import React from 'react';
// import { Controller } from 'swiper';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image from '../../assets/salman.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import { Virtual } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import "./Banner.css";

const Banner = () => {
    const specialities = ["MERN Stack", "Full Stack", "Junior Web", "Front End", "React"];

    SwiperCore.use([Autoplay]);

    const handleResumeDownload = () => {
        const url = "https://drive.google.com/file/d/16GRT2V6wOZGWEoMQ_XdZmsbWAwU4Y9KN/view?usp=sharing";
        window.open(url, "_blank")
    }
    return (
        <div id="about" className="py-5" style={{ backgroundColor: '#F6F2ED' }}>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col sm={12} md={5}>
                        <img className="img-fluid rounded-circle" src={image} alt="" width="350" height="300" />
                    </Col>
                    <Col sm={12} md={7}>
                        <Swiper modules={[EffectFade]} effect="fade" autoplay={{ delay: 3000 }}>
                            {specialities.map((i, el) => {
                                return <SwiperSlide>{i} Developer</SwiperSlide>;
                            })}
                        </Swiper>
                        <h1>Salman Rahman</h1>
                        <p className="my-4">I am a Junior web developer. A programming lover with a strong desire to learn and solve problems. My core skills are based on MERN stack. I have developed some web applications using MERN technologies and looking forward to exploring more. I'm quietly confident, naturally curious, and perpetually working on improving my skills at time.</p>
                        <Button onClick={handleResumeDownload} className="rounded-pill me-3 button_color" variant="outline">DOWNLOAD RESUME</Button>
                        <Button className="rounded-pill mx-3 button_color" variant="outline">CONTACT</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;