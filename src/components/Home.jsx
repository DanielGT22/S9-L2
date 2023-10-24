import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fantasy from '../data/fantasy.json'
import History from '../data/history.json'
import Romance from '../data/romance.json'
import Scifi from '../data/scifi.json'
import Horror from '../data/horror.json'
 console.log(Card);

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

class Cards extends Component {

  state = {
    selectedBook: fantasy[0], 
  }

  render() {
    return (

      
      <Container>
        <Row className="justify-content-center">
          {/* <div className="col col-12 col-md-6 col-lg-4"> */}
          <Col md={6}>
            <Carousel
              className="mt-4"
              onSlid={(incomingSlideIndex) => {
                console.log(incomingSlideIndex)
                // incomingSlideIndex abbiamo scoperto essere l'INDICE della slide che è appena arrivata
                // dovrei mantenere aggiornato lo state con la pasta che al momento è appena arrivata
                // selectedPasta inizialmente è menu[0], ma deve diventare --> menu[incomingSlideIndex]
                // TI PIACEREBBE FARE --> this.state.selectedPasta = menu[incomingSlideIndex]
                // non si può fare! lo state è read only :(
                this.setState({
                  // questo oggetto sarà il nuovo state
                  selectedPasta: menu[incomingSlideIndex],
                  // questo è l'UNICO MODO di settare lo state! utilizzando il metodo this.setState()
                })
              }}
            >
              {menu.map((pasta) => {
                return (
                  // OGNI VOLTA che generate dinamicamente del contenuto tramite il metodo .map()
                  // dovete ricordarvi che React ha bisogno di poter DISTINGUERE tra gli elementi
                  // generati
                  // per fare questo è necessario assegnare una "key" univoca ad ogni elemento generato
                  // questo serve a livello di performance, per evitare manipolazioni del DOM inutili
                  // e perchè è brutto da vedere :)
                  <Carousel.Item key={pasta.id}>
                    <img src={pasta.image} alt="kitten" className="w-100" />
                    <Carousel.Caption>
                      <h3>{pasta.name}</h3>
                      <p>{pasta.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <ListGroup className="text-center">
              {this.state.selectedPasta.comments.map((review) => {
                return (
                  <ListGroup.Item key={review.id}>
                    {review.author} - {review.comment} | {review.rating}
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Cards