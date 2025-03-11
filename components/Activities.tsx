import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserFriends, FaBuilding, FaHandshake } from "react-icons/fa";

export default function Activities() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center">
          {/* Our Activities */}
          <Col md={4}>
            <FaUserFriends size={40} className="mb-3 text-primary" />
            <h4 className="fw-bold">Our Activities</h4>
            <p className="text-muted">Get help understanding what we do on a daily basis</p>
            <a href="#" className="text-primary">Get in touch →</a>
          </Col>

          {/* Our Space */}
          <Col md={4}>
            <FaBuilding size={40} className="mb-3 text-primary" />
            <h4 className="fw-bold">Our Space</h4>
            <p className="text-muted">Learn about our spaces and how they can help you organize a better event</p>
            <a href="#" className="text-primary">Get help →</a>
          </Col>

          {/* Partnerships */}
          <Col md={4}>
            <FaHandshake size={40} className="mb-3 text-primary" />
            <h4 className="fw-bold">Partnerships</h4>
            <p className="text-muted">Let’s team up to boost productivity and accelerate business growth</p>
            <a href="#" className="text-primary">Become a partner →</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
