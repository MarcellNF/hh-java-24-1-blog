import './Navigation.css';

export default function Navigation(){
    return (
        <ul className="nav">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/articles">Articles</a>
            </li>
        </ul>
    );
}