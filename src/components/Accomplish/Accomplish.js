import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import frontEndIcon from '../../assets/icons/front-end.png';
import backEndIcon from '../../assets/icons/dynamic.png';
import uiUxIcon from '../../assets/icons/ux-ui-design.png';
import mernIcon from '../../assets/icons/MERN.png';
import './Accomplish.css';

const Accomplish = () => {
    return (
        <div className="py-5">
            <Container>
                <h2 className="mb-5">What I Do</h2>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="services p-2">
                            <div>
                                <img src={frontEndIcon} alt="" />
                            </div>
                            <div className="px-3 py-2">
                                <h4>Front-End</h4>
                                <p>Building modern, easy to use and mobile-friendly websites and applications is truly a passion of mine. I am an expert to work with <strong>HTML5, CSS3, JavaScript</strong> as a programming language, and <strong>ReactJs</strong> library.</p>
                            </div>
                        </div>
                        <div className="services p-2">
                            <div>
                                <img src={uiUxIcon} alt="" />
                            </div>
                            <div className="px-3 py-2">
                                <h4>Web Design</h4>
                                <p className="tenvd">I aim to create user experiences that look and function beautifully across anything that can access the web. I have some basic knowledge about <strong>UI/UX</strong>. If you have a project that could use my frontend help, please feel free to reach out.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="services p-2">
                            <div>
                                <img src={backEndIcon} alt="" />
                            </div>
                            <div className="px-3">
                                <h4>Back-End and Database</h4>
                                <p className="tenvd">As a Back-end developer, I use <strong>JavaScript</strong> programming language for creating and developing server side web appliction logic and integration. I use <strong>NodeJs</strong> as runtime and <strong>ExpressJs</strong> web framework. I use <strong>MongoDB</strong> as Database.</p>
                            </div>
                        </div>
                        <div className="services p-2">
                            <div>
                                <img src={mernIcon} alt="" />
                            </div>
                            <div className="px-3">
                                <h4>MERN Stack</h4>
                                <p>I am Leaning more about MERN technology. I have created few websites using <strong>MERN</strong> stack and want to develop more applications.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Accomplish;