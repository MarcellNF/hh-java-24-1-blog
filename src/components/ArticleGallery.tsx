import {Article} from "../types/Article.ts";
import ArticleCard from "./ArticleCard.tsx";
import './ArticleGallery.css';

type ArticleGalleryProps = {
    articles: Article[],
}

export default function ArticleGallery(props: Readonly<ArticleGalleryProps>){
    let articles = props.articles.map((article) => <ArticleCard handleDelete={deleteArticle} key={article.id} article={article} />);

    function deleteArticle(id: string){
        console.log(`Deleting article with id: ${id}`);
        articles = articles.filter((article) => article.key !== id);
    }

    return(
        <div className="article-gallery">
            {articles}
        </div>
    );
}