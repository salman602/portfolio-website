import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row, Image, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useProjects from '../../hooks/useProjects';

const ProjectDetails = () => {
    const [singleProject, setSingleProject] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { projectId } = useParams();
    const [projects] = useProjects();

    useEffect(() => {
        const filteredProject = projects.filter(project => project?.id === projectId);
        setSingleProject(filteredProject[0]);
        setIsLoading(false)
    }, [projects, projectId]);

    if (isLoading) {
        return <Spinner animation="border" />
    }

    return (
        <div>
            <Navigation />

            <div style={{ backgroundColor: "#F6F2ED" }} className="py-5">
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col sm={12} md={8}>
                            <Row>
                                <Col><Image src={singleProject?.screenshots[0]} fluid /></Col>
                                <Col><Image src={singleProject?.screenshots[1]} fluid /></Col>
                                <Col><Image src={singleProject?.screenshots[2]} fluid /></Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={4}>
                            <h3>Project Title: <span style={{ color: "#FEA770" }}>{singleProject?.title}</span></h3>
                            <h5 className="my-4">Type: {singleProject?.type}</h5>
                            <h2>Project Features</h2>
                            <ul>
                                <li>{singleProject?.features[0]}</li>
                                <li>{singleProject?.features[1]}</li>
                                <li>{singleProject?.features[2]}</li>
                            </ul>
                            <h4>Tags: #{singleProject?.tags[0]} #{singleProject?.tags[1]}</h4>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectDetails;


