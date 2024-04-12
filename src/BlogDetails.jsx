import { marked } from "marked";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./BlogDetails.css";

const BlogDetails = () => {
  const { fileName } = useParams();

  useEffect(() => {
    async function fetchData() {
      const blogDetails = document.getElementById("blogDetails");
      const request = await fetch(`../blogs/${fileName}.md`);
      const markdownContent = await request.text();
      blogDetails.innerHTML = marked.parse(markdownContent);
    }
    fetchData();
  }, []);

  return <article id="blogDetails">{fileName}</article>;
};

export default BlogDetails;
