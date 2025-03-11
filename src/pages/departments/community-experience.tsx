import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Footer from "./Footer";
import CustomNavbar from "./CustomNavbar";

const CommunityExperience = () => {
  return (
    <>
      <CustomNavbar />
      <Container className="my-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1>
            <span className="text-primary">Community</span>{" "}
            <span className="text-warning">Department</span>
          </h1>
          <p className="text-muted">Tujenge Pamoja, Tufanye Tofauti</p>
        </div>

        {/* Main Image */}
        <div className="text-center mb-4">
          <Image
            src="/community.jpg"
            alt="Community Department"
            width={800}
            height={450}
            className="img-fluid rounded"
          />
        </div>

        {/* Section 1 */}
        <Row className="mb-4 align-items-center">
          <Col md={6}>
            <Image
              src="/img00.jpg"
              alt="Community Collaboration"
              width={500}
              height={300}
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h1 className="mb-4"><b>Platform for Expression</b></h1>
            <p>
              We believe in providing a platform for every individual to express
              their thoughts, ideas, and opinions. We value and respect the
              voices of all community members, irrespective of their tribe,
              religion, political affiliation, or social status. Our aim is to
              create a safe space where everyone feels included and valued.
            </p>
          </Col>
        </Row>

        {/* Section 2 */}
        <Row className="mb-4 align-items-center">
          <Col md={6}>
            <h1 className="mb-4"><b>Love, Unity, and Coexistence</b></h1>
            <p>
              At the core of our community lies our commitment to love, unity, and
              peaceful coexistence. We strongly believe that by fostering
              togetherness and understanding, we can build a stronger and more
              harmonious society. We encourage meaningful partnerships among our
              members, recognizing that collaboration often leads to remarkable
              achievements.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="/img01.jpg"
              alt="Workshops and Training"
              width={500}
              height={300}
              className="img-fluid rounded"
            />
          </Col>
        </Row>

        {/* Section 3 */}
        <Row className="mb-4 align-items-center">
          <Col md={6}>
            <Image
              src="/img20.jpg"
              alt="Networking Events"
              width={500}
              height={300}
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h1 className="mb-4"><b>People-Powered Community</b></h1>
            <p>
              Swahilipot Hub is not just a physical building; it is the people who
              make up our community. Each and every member contributes to the
              vibrant tapestry of ideas, skills, and experiences that make our hub
              unique. Together, we can explore limitless possibilities, support
              each other's growth, and make a positive impact on our society.
              Join us in an environment that celebrates diversity, encourages
              personal and professional development, and fosters a sense of
              belonging. Let's embark on a journey of exploration, learning, and
              creativity. We are excited to see what we can accomplish together
              at Swahilipot Hub!
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CommunityExperience;
