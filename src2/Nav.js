import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

export default function Nav() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Microblog</h1>
        <p className="lead">Do some blogging!</p>
        <Link to="/" className="mr-3">Blog</Link>
        <Link to="/new">Add a new post</Link>
      </Jumbotron>
    </div>
  )
}