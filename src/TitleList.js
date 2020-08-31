import React from 'react';
import { Card, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function TitleList(){
  const { posts } = useSelector(store => store)
  const postsArr = [];
  for (const [key, value] of Object.entries(posts)) {
    postsArr.push({id: key, ...value})
  }

  return (
    <Container>
      <Row>
        {postsArr.map(post => (
          <Col sm="6" key={post.id} className="mb-2">
            <Card body>
              <CardTitle><Link to={`/${post.id}`}>{post.title}</Link></CardTitle>
              <CardText>{post.description}</CardText>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
