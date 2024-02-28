import {Article} from "../types/Article.ts";
import './ArticleCard.css';

type ArticleCardProps = {
    article: Article,
    handleDelete: (id: string) => void,
}

export default function ArticleCard(props: Readonly<ArticleCardProps>){
    return(
        <article className="article-card">
            <h2>{props.article.title}</h2>
            <p>{props.article.content}</p>
            <button onClick={() => props.handleDelete(props.article.id)}>Delete</button>
        </article>
    );
}