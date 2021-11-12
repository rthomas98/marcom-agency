import { Row, Col, Container, Nav } from 'react-bootstrap'
import Image from 'next/image'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <Container>
                    <Row>
                        <Col xs={12} md={3} lg={3}>
                        <Image
                            src="/logo.png"
                            alt="Picture of the author"
                            width={80}
                            height={80}
                        />
                            <p>
                            Empuls3 is a full-service digital agency powered by data analytics, market research, and digital technology.
                            </p>
                        </Col>
                        <Col xs={12} md={3} lg={3}>
                            <h4>About</h4>
                            <Nav defaultActiveKey="/index" className="flex-column">
                                <Nav.Link href="/home">Active</Nav.Link>
                                <Nav.Link eventKey="link-1">Link</Nav.Link>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={12} md={3} lg={3}>
                            <h4>About</h4>
                        </Col>
                        <Col xs={12} md={3} lg={3}>
                            <h4>About</h4>
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
