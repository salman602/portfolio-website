import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProjects from '../../hooks/useProjects';
import Project from '../Project/Project';

import './Projects.css'

const Projects = () => {
    const [projects] = useProjects()

    return (
        <div style={{ backgroundColor: "#F6F2ED" }} className="py-5">
            <Container>
                <div className="mb-5 pb-5">
                    <h2>Discover My Latest <span style={{ color: "#FEA770" }}>Projects</span></h2>
                    <h5 className="my-4">Successfully Completed websites</h5>
                </div>
                <Row xs={1} md={3} className="g-4">

                    {
                        projects.map(project => <Project
                            key={project.title}
                            project={project}
                        ></Project>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Projects;











