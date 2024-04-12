import { useState, useEffect } from "react";

const CATEGORIES = ["JavaScript", "React", "Redux", "Java"];

const SearchParams = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [label, setLabel] = useState("");
  const [blogs, setBlogs] = useState([]);
  const labels = [];

  useEffect(() => {
    requestBlogs();
  });

  async function requestBlogs() {
    const res = await fetch(`blogs?`);
  }

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="search">
          Search
          <input
            onChange={(e) => setSearchText(e.target.value)}
            id="search"
            value={searchText}
            placeholder="Text here to search"
          />
        </label>
        <label htmlFor="category">
          Category
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setLabel("");
            }}
          >
            <option />
            {CATEGORIES.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <label htmlFor="label">
          Label
          <select
            id="label"
            disabled={label.length === 0}
            value={label}
            onChange={(e) => {
              setLabel(e.target.value);
            }}
          >
            <option />
            {labels.map((label) => (
              <option key={label}>{label}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
