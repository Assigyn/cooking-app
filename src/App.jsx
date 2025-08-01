import Header from "./components/Header.jsx";
import Aside from "./components/Aside.jsx";
import Article from "./components/Article.jsx";
import {useState} from "react";

function App() {
  const [category, setCategory] = useState('Dessert');

  return (
      <div className="container">
        <Header />
        <main>
          <Aside setCategory={setCategory} category={category}/>
          <Article category={category} />
        </main>
      </div>
  )
}

export default App
