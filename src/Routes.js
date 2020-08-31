import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import PostForm from './PostForm'

export default function Routes() {
  return (
    <Switch>
      <Route path="/new" exact>
        <PostForm />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}