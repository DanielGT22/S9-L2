import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fantasy from '../data/fantasy.json'
import History from '../data/history.json'
import Romance from '../data/romance.json'
import Scifi from '../data/scifi.json'
import Horror from '../data/horror.json'
 console.log(Card);

function AllBooks() {
  return (
    <Container>
      <Row  className='g-3 '>
      {Fantasy.map((book) => {
        return (
        <Col xs={5} md={4} lg={3} className='mb-2' key={book.asin}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
        )
      })}
    </Row>
    </Container>
  );
}

export default AllBooks