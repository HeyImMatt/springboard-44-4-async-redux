import React, { useEffect, useState } from 'react';
import { Card, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchPosts } from './actions';

export default function TitleList(){
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { posts } = useSelector(store => store, shallowEqual)

  useEffect(function() {
    async function getPosts(){
      await dispatch(fetchPosts());
      setIsLoading(false);
    }

    if (isLoading) {
      getPosts();
    }
  }, [dispatch, isLoading])

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <Container>
      <Row>
        {posts.map(post => (
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
