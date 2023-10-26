import { Col, Container, Row, Form } from 'react-bootstrap';
import { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fantasy from '../data/fantasy.json'
import History from '../data/history.json'
import Romance from '../data/romance.json'
import Scifi from '../data/scifi.json'
import Horror from '../data/horror.json'
import SingleBook from './SingleBook';

class BookList extends Component {
    state = {
      searchValue: '',
    }
  
    render() {
      return (
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Cerca un libro..."
                  value={this.state.searchValue}
                  onChange={(e) => {
                    this.setState({
                      searchValue: e.target.value,
                    })
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {this.props.manyBooks
              .filter((oneBook) =>
                oneBook.title
                  .toLowerCase()
                  .includes(this.state.searchValue.toLowerCase())
              )
              .map((oneBook) => {
                return (
                  <Col md={3} key={oneBook.asin}>
                    <SingleBook book={oneBook} />
                  </Col>
                )
              })}
          </Row>
        </Container>
      )
    }
  }
  
  export default BookList