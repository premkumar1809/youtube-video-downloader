import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './body.css'; // Assuming you have a CSS file for styling
import Image from '../photos/quality.png';
import Imag from '../photos/frd.png';
import Ima from '../photos/free.png';

function App() {
  return (
    <Container >
      {/* Row 1 */}
      <Row>
        {/* Card 1 */}
        <Col xs={12} md={4} className="mb-4">
          <Card className="animated-card  ">
            <Card.Img variant="top" src={Image}  style={{ width: '150px', height: 'auto' }} />
            <Card.Body>
              <Card.Title>Select Quality</Card.Title>
              <Card.Text>
              You can download videos of different quality,Audio. Select the video quality and it will download the video.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col xs={12} md={4} className="mb-4">
          <Card className="animated-card  ">
            <Card.Img variant="top" src={Imag}  style={{ width: '150px', height: 'auto' }}/>
            <Card.Body>
              <Card.Title>User-Friendly</Card.Title>
              <Card.Text>
              Our website specially designed for mobile users. Fully user-friendly website to make your work even easier.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col xs={12} md={4} className="mb-4">
          <Card className="animated-card  ">
            <Card.Img variant="top" src={Ima}  style={{ width: '150px', height: 'auto' }} />
            <Card.Body>
              <Card.Title>Free to Use</Card.Title>
              <Card.Text>
              Yes, it is completely free and easy to use. All you need is a good internet connection.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add other rows similarly with different images and content */}
    </Container>
   
  );
}

export default App;
