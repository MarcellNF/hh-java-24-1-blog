import './Navigation.css';
import {useState} from "react";

export default function Navigation(){
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    function toggleLoggedIn(): void{
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <ul className="nav">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                {isLoggedIn && <a href="/articles">Articles</a>}
            </li>
            <li>
                {
                    isLoggedIn ? <button onClick={toggleLoggedIn}>Logout</button> : <button onClick={toggleLoggedIn}>Login</button>
                }
            </li>
        </ul>
    );
}