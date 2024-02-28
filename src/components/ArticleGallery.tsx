import {Article} from "../types/Article.ts";
import './ArticleGallery.css';
import SearchComponent from "./SearchComponent.tsx";
import {useState} from "react";
import ArticleCard from "./ArticleCard.tsx";

type ArticleGalleryProps = {
    articles: Article[],
}

export default function ArticleGallery(props: Readonly<ArticleGalleryProps>) {
    const [filteredArticles, setFilteredArticles] = useState<Article[]>(props.articles)

    function filterArticle(searchText: string) {
        setFilteredArticles(props.articles.filter((article) => article.title.toLowerCase().includes(searchText.toLowerCase())))
    }

    const articles = filteredArticles.map((article) => <ArticleCard article={article}
                                                                    handleDelete={() => console.log("Deleted")}/>)

    return (
        <div className="article-gallery">
            <SearchComponent handleSearchText={filterArticle}/>
            {articles}
        </div>
    );
}