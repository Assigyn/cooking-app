import Header from "./components/Header.jsx";
import Aside from "./components/Aside.jsx";
import Article from "./components/Article.jsx";

function App() {
  return (
      <div className="container">
        <Header />
        <main>
          <Aside />
          <Article />
        </main>
      </div>
  )
}

export default App
