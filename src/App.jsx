import RecipePage from "./pages/RecipePage.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="container">
              <Routes>
                  <Route path="/:categoryName?" element={<IndexPage />} />
                  <Route path="/recipe/:id" element={<RecipePage />} />
              </Routes>
          </div>
      </Router>
  )
}

export default App
