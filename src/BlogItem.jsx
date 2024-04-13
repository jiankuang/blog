import React from "react";
import { Link } from "react-router-dom";

const BlogItem = (props) => {
  return (
    <figure className="card">
      <h2>{props.name}</h2>
      <div className="card-image">
        <img src={`./blogs/${props.fileName}.png`} />
      </div>
      <p>{props.description}</p>
      <p>
        <Link to={`/blog/${props.fileName}`} className="button">
          READ MORE
        </Link>
      </p>
    </figure>
  );
};

export default BlogItem;
