import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Projects = () => {
    const projects = [
        {
            title: 'Baggies',
            type: 'E-commerce',
            photo: ''

        }
    ];
    return (
        <div>
            <h2>Discover My Latest Projects</h2>
            <h5>Successfully Completed websites</h5>
            <CardGroup>
                <Card className="bg-dark text-white">
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Projects;