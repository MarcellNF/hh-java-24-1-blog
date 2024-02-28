import Layout from "./components/Layout.tsx";
import ArticleGallery from "./components/ArticleGallery.tsx";
import {Article} from "./types/Article.ts";

export default function App() {

    const articles: Article[] = [
        {id: "1", title: "First Article", content: "This is the first article"},
        {id: "2", title: "Second Article", content: "This is the second article"},
        {id: "3", title: "Third Article", content: "This is the third article"},
    ];

    return (
        <>
            <Layout>
                <ArticleGallery articles={articles}/>
            </Layout>
        </>
    )
}
