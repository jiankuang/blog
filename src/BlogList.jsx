import BlogItem from "./BlogItem";

import "./BlogList.css";

const BlogList = (props) => {
  return (
    <section className="card-container">
      <BlogItem
        fileName="WebComponent"
        name="Wev Component"
        description="A modular, reusable building block for web development that encapsulates a set of related functionality and user interface elements."
      />
      <BlogItem
        fileName="Prototype"
        name="Prototype"
        description="Every JS object has a prototype"
      />
      <BlogItem
        fileName="LinkedList"
        name="LinkedList"
        description="Linked Lists are often the underlying data structure for a stack or queue."
      />
      <BlogItem
        fileName="Stack"
        name="Stack"
        description="JavaScript engines have a call stack."
      />
      <BlogItem
        fileName="Queue"
        name="Queue"
        description="JavaScript engines have message queue that executes your code at runtime."
      />
    </section>
  );
};

export default BlogList;
