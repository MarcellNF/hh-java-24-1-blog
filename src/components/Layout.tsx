import {ReactNode} from "react";
import Header from "./Header.tsx";

type LayoutProps = {
    children: ReactNode,
}
export default function Layout(props: Readonly<LayoutProps>) {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <footer>
                <p>&copy;2024 Marcell</p>
            </footer>
        </>
    );
}