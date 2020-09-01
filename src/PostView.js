import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import PostForm from './PostForm';

export default function PostView() {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts } = useSelector(store => store)
  const { postId } = useParams();
  const post = posts[postId];

  const deleteHandler = () => {
    dispatch({
      type: 'DELETE_POST',
      id: postId
    })
    history.push('/')
  }

  if (post) {
    return (
      <>
        <Container>
          <Row>
            <Col sm="9">
            <h2>{post.title}</h2>
            <p><i>{post.description}</i></p>
            <p>{post.body}</p>
            </Col>
            <Col sm="2" className="ml-auto">
              <FontAwesomeIcon className="mr-3 text-primary" icon={faEdit} onClick={() => setEditMode(!editMode)}/>
              <FontAwesomeIcon className="text-danger" icon={faTrash} onClick={deleteHandler} />
            </Col>
          </Row>
        </Container>
        {editMode && <PostForm postEdit={post} postEditId={postId} />}
      </>
    )
  } else history.push('/')
  return null;
}