import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Container>
      <Row xs={2} md={4} lg={6} className='g-3 '>
        <Col className='mb-2'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://www.placekitten.com/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  );
}

export default BasicExample;