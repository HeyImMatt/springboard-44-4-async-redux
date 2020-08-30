import React from 'react';
import { Jumbotron } from 'reactstrap';

export default function Nav() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Microblog</h1>
        <p className="lead">Do some blogging!</p>
        <a href="/" className="mr-3">Blog</a>
        <a href="/new">Add a new post</a>
      </Jumbotron>
    </div>
  )
}