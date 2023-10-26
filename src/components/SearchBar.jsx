import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fantasy from '../data/fantasy.json';
import History from '../data/history.json';
import Romance from '../data/romance.json';
import Scifi from '../data/scifi.json';
import Horror from '../data/horror.json';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const allBooks = [
    ...Fantasy.map((book) => ({ ...book, category: 'Fantasy' })),
    ...History.map((book) => ({ ...book, category: 'History' })),
    ...Romance.map((book) => ({ ...book, category: 'Romance' })),
    ...Scifi.map((book) => ({ ...book, category: 'Scifi' })),
    ...Horror.map((book) => ({ ...book, category: 'Horror' })),
  ];

  const filteredBooks = allBooks.filter((book) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="search-wrapper text-center d-flex justify-content-center flex-column">
        <label htmlFor="search">Search Books</label>
        <input
          type="search"
          className="w-25 mx-auto my-3"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <Container>
          <h2 className="text-center m-5 fs-1">Search Results</h2>
          <Row className="g-3">
            {filteredBooks.map((book) => {
              return (
                <Col xs={5} md={4} lg={3} className="mb-2" key={`${book.asin}-${book.category}`}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Search;