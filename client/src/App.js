import React from "react";
import "./App.css";
import Posts from "./screens/Posts/Posts";
import PostBuild from "./screens/PostBuild/PostBuild";
import PostEdit from "./screens/PostEdit/PostEdit";
import PostDetail from "./screens/PostDetail/PostDetail";
import { Route } from "react-router-dom";
import Nav from "./components/shared/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <body>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/add-post" component={PostBuild} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </body>
    </div>
  );
}

export default App;
