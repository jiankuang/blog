import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./BlogList";
import SearchParams from "./SearchParams";
import BlogDetails from "./BlogDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>
            My <span className="fancy-text">Blogs</span>
          </h1>
        </header>
        <Routes>
          <Route path="/blog/:fileName" element={<BlogDetails />} />
          <Route
            path="/"
            element={
              <div>
                <SearchParams />
                <BlogList />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
