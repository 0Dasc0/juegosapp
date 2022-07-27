import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css';

function Cards({img,title,text,buttom}) {
  return (
    <div class="contenedor">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
        <Button variant="primary">{buttom}</Button>
      </Card.Body>
    </Card>  
    </div>  
  );
}

export default Cards;