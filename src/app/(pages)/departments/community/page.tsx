import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const CommunityExperience = () => {
  return (
    <Container className="my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4">
          <span className="text-primary">Community</span>{" "}
          <span className="text-warning">Department</span>
        </h1>
        <p className="text-muted fs-5">Tujenge Pamoja, Tufanye Tofauti</p>
      </div>

      {/* Main Image */}
      <div className="text-center mb-5">
        <Image
          src="/community.jpg"
          alt="Community Department"
          width={900}
          height={500}
          className="img-fluid rounded shadow-lg"
        />
      </div>

      {/* Section 1 - Platform for Expression */}
      <Row className="mb-5 align-items-center">
        <Col md={6} className="text-center">
          <Image
            src="/img00.jpg"
            alt="Community Collaboration"
            width={500}
            height={320}
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold text-primary">Platform for Expression</h2>
          <p className="fs-5">
            We provide a platform for individuals to freely express their
            thoughts, ideas, and opinions in an inclusive and respectful
            environment. No matter your background, tribe, or beliefs, your
            voice matters here. Our mission is to foster a safe space where all
            community members feel valued and empowered.
          </p>
        </Col>
      </Row>

      {/* Section 2 - Love, Unity, and Coexistence */}
      <Row className="mb-5 align-items-center">
        <Col md={6} className="order-md-2 text-center">
          <Image
            src="/img01.jpg"
            alt="Workshops and Training"
            width={500}
            height={320}
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6} className="order-md-1">
          <h2 className="fw-bold text-warning">Love, Unity, and Coexistence</h2>
          <p className="fs-5">
            At our core, we believe in fostering love, unity, and peaceful
            coexistence. By embracing diversity and collaboration, we build
            stronger connections that drive positive change. Partnerships and
            shared experiences shape a more inclusive society.
          </p>
        </Col>
      </Row>

      {/* Section 3 - People-Powered Community */}
      <Row className="mb-5 align-items-center">
        <Col md={6} className="text-center">
          <Image
            src="/img20.jpg"
            alt="Networking Events"
            width={500}
            height={320}
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold text-success">People-Powered Community</h2>
          <p className="fs-5">
            Swahilipot Hub is more than just a space; it’s a movement driven by
            people. Our diverse members bring unique skills and experiences,
            creating a dynamic hub for learning, growth, and impact. Together, we
            support each other’s aspirations, explore new ideas, and make a
            difference in our community.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CommunityExperience;
