import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
  return (
    <div>
      <Link to={`/blog/${props.fileName}`}>
        <h1>{props.name}</h1>
      </Link>
      <h2>{props.description}</h2>
      <p>{props.details}</p>
    </div>
  );
};

export default Blog;
