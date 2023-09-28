import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            HOME
            <Link to={"/sobre"}> ir para Sobre</Link>
        </>
    );
}