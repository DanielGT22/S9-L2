import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Component } from 'react'

 console.log(Card);


 class SingleBook extends Component {
  state = {
    selected: false,
  }

  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected, 
      
    })
  }

  render() {
    return (
      <Card className= {this.state.selected ? 'red-border ' : ''} >
        
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={this.toggleSelected}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
        {this.state.selected && <CommentArea book={this.props.book} />}
      </Card>
    )
  }
}


class CommentArea extends Component {
  state = {
    selectedComment: true,
    comments: [],
  }

  componentDidMount() {
    this.getComments();
  }


 
  getComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
headers: {
"Authorization": " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjA2NWY2ZTNkZDAwMTQ5NWU0NDkiLCJpYXQiOjE2OTgzMjQ1ODEsImV4cCI6MTY5OTUzNDE4MX0.uqdru9iSBwKOszKAhFTUgW-sYF5ODQnEzeBLurlDjlY"
}
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  this.setState({
    comments: data,
  }
  ) 
  console.log('Data:', data);
})
.catch(error => {
  
  console.error('Error:', error);
});
  }

  render() {
    return (
      <Card className= {this.state.selectedComment ? 'd-block ' : 'd-none'} >
        <Card.Body>
          <Card.Title className='fs-2 text-center mb-3'>Comments:
          </Card.Title>
          <div className='my-3'>
            {this.state.comments.map(data => (
              <div key={data._id}>
                <p className='m-0'  >User <strong>{data.author}</strong> said:</p>
                <p className='text-end my-2'>{data.comment}</p>
              </div>

            ))}
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook

