import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import NewBlogForm from './NewBlogForm'

export default function Routes() {
  return (
    <Switch>
      <Route path="/new" exact>
        <NewBlogForm />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}