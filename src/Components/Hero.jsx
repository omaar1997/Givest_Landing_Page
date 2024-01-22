import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Custom_Button from "./Custom_Button";
import "../CSS/Hero.css";
import hand from "../Images/hand.png";
import Arrow from "../Images/arrow-right-line-dark.png";
import Children from "../Images/Children.png";
import Africa from "../Images/Africa.png";
import ThreeScene from "./ThreeScene";

export default function Hero() {
    return (
        <Container fluid className="hero_body">
            <Row>
                <Col className=" justify-content-center hero_margin">
                    <Row className="d-flex align-items-center mb-4">
                        <img src={hand} className="hand_img" />
                        <h4 className="gradiant_text">Change The World.</h4>
                    </Row>
                    <Row>
                        <h2 className="hero_text">
                            Need Your Big Hand For
                            <span className="custom_word">Change</span>
                            The World.
                        </h2>
                    </Row>
                    <Row className="d-flex align-items-center mt-4">
                        <Custom_Button text="All Causes" />
                        <Button className="donate_btn" variant="outline-secondary">Donate Now
                            <img src={Arrow} />
                        </Button>
                    </Row>
                </Col>
                <Col>
                    <Row className="mt-5 position-relative">
                        <Col xs={12} className="p-0">
                            <img src={Children} className="background_img" />
                        </Col>
                        <Col xs={6}>
                            <img src={Africa}  className="overlay_img"/>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
/*<div className="img-container">
    <img src={Children} className="background_img" />
    <img src={Africa} className="overlay_img" />
</div>*/