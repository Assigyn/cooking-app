import Header from "../components/Header.jsx";
import Aside from "../components/Aside.jsx";
import Article from "../components/Article.jsx";
import {useState} from "react";
import {useParams} from "react-router-dom";

function IndexPage() {
    const {categoryName} = useParams();
    const [category, setCategory] = useState(categoryName ?? 'Dessert');

    return (
        <div>
            <Header />
            <main>
                <Aside setCategory={setCategory} category={category} />
                <Article category={category} />
            </main>
        </div>
    )
}

export default IndexPage
