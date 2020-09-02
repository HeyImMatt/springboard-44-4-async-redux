import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import PostForm from './PostForm';
import PostView from './PostView';
import TitleList from './TitleList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/new" exact>
        <PostForm />
      </Route>
      <Route path="/:postId" exact>
        <PostView />
      </Route>
      <Route path="/">
        <TitleList />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}