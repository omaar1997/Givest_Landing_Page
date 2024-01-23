import React from "react";
import { Container, Row } from "react-bootstrap";
import "../CSS/About_Us.css";

export default function About_Us() {
    return (
        <Container className="mt-5">
            <Row className="d-flex align-items-center ms-1">
                <span className="about_dash"></span>
                <h5 className="about_head">About Us.</h5>
            </Row>
            <Row className="mt-3">
                <h2 className="about_title">
                    <span className="about_custom_word">Givest</span> is The Non Profitable Organization.
                </h2>
            </Row>
        </Container>
    )
}