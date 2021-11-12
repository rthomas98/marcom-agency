import { Row, Col, Container, Nav } from 'react-bootstrap'
import Image from 'next/image'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <Container>
                    <Row>
                        <Col xs={12} md={4} lg={4}>
                        <Image
                            src="/logo.svg"
                            alt="Picture of the author"
                            width={60}
                            height={60}
                        />
                            <p>
                            Empuls3 is a full-service digital agency powered by data analytics, market research, and digital technology.
                            </p>
                            <h6 className="text-white">Contact Us</h6>
                            <p>
                                <strong>Email:</strong> info@empuls3.com
                            </p>
                            <p>
                                <strong>Phone:</strong> 972-798-8914
                            </p>
                        </Col>
                        <Col xs={12} md={2} lg={2}>
                            <h5>Site Menu</h5>
                            <Nav className="flex-column">
                                <Nav.Link href="/home">Site Menu</Nav.Link>
                                <Nav.Link eventKey="link-1">Services</Nav.Link>
                                <Nav.Link eventKey="link-2">Case Studies</Nav.Link>
                                <Nav.Link eventKey="link-2">Articles</Nav.Link>
                                <Nav.Link eventKey="link-2">About</Nav.Link>
                                <Nav.Link eventKey="link-2">Contact</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={12} md={3} lg={3}>
                            <h5>Analytics and Digital Marketing </h5>
                            <Nav className="flex-column">
                                <Nav.Link href="/home">Branding</Nav.Link>
                                <Nav.Link eventKey="link-1">UI/UX Development and Design</Nav.Link>
                                <Nav.Link eventKey="link-2">WordPress Development</Nav.Link>
                                <Nav.Link eventKey="link-2">E-Commerce Development</Nav.Link>
                                <Nav.Link eventKey="link-2">Custom Software Development</Nav.Link>
                                <Nav.Link eventKey="link-2">Mobile App Development</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={12} md={3} lg={3}>
                            <h5>About</h5>
                            <Nav className="flex-column">
                                <Nav.Link href="/home">Branding</Nav.Link>
                                <Nav.Link eventKey="link-1">Search Engine Optimization</Nav.Link>
                                <Nav.Link eventKey="link-2">Local SEO</Nav.Link>
                                <Nav.Link eventKey="link-2">Content Marketing</Nav.Link>
                                <Nav.Link eventKey="link-2">Social Media Marketing</Nav.Link>
                                <Nav.Link eventKey="link-2">Email Marketing</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="copyright d-flex align-items-center">
                <Container>
                    <Row >
                        <Col>
                        <p className="text-center">&copy; {new Date().getUTCFullYear()} — Empuls3. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer
