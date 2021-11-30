import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Project.css';

const Project = ({ project }) => {
    return (
        <Col>
            <Card className="bg-dark text-white project">

                <div className="img_box">
                    <Card.Img src={project.screenshots[0]} alt="Card image" className="project_img" height="500" />
                </div>
                <Card.Body className="project_info">
                    <Card.Title>{project.title} </Card.Title>

                    <Card.Text>Tags: {project.tags[0]}</Card.Text>
                    <Card.Text>Type: {project.type}</Card.Text>

                    <NavLink to={`/projects/${project.id}`}>
                        <Button project={project} className="button_color" variant="outline">Details</Button>
                    </NavLink>


                </Card.Body>
            </Card>
        </Col >
    );
};

export default Project;