import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Custom_Button from "./Custom_Button";
import "../CSS/Hero.css";
import hand from "../Images/hand.png";

export default function Hero() {
    return (
        <Container fluid className="hero_body">
            <Row>
                <Col>
                    <Row className="d-flex align-items-center">
                        <img src={hand} className="hand_img" />
                        <h4 className="gradiant_text">Change The World.</h4>
                    </Row>
                    <Row>
                        <Custom_Button text="All Causes" />
                    </Row>
                    <Row>
                        <Custom_Button text="All Causes" />
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Custom_Button text="All Causes" />
                    </Row>
                    <Row>
                        <Custom_Button text="All Causes" />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}