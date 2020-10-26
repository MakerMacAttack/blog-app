import React from "react";
import "./App.css";
import Posts from "./screens/Posts/posts";
import PostCreate from "./screens/PostCreate/postcreate";
import PostEdit from "./screens/PostEdit/postedit";
import PostDetail from "./screens/PostDetail/postdetail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>
    </div>
  );
}

export default App;
