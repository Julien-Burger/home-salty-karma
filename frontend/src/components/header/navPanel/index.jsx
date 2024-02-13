import { Link } from "react-router-dom";

import "./style.scss";

function NavPanel({ showNavPanel }) {
    return (
        <nav>
            <ul style={showNavPanel ? { display: "flex" } : {}}>
                <li>
                    <Link to="/" reloadDocument>
                        <i className="fa-solid fa-house"></i>
                        Salty Karma
                    </Link>
                </li>
                <li>
                    <a href="https://blog.saltykarma.com">
                        <i className="fa-regular fa-newspaper"></i>Blog
                    </a>
                </li>
                <li>
                    <a href="https://portfolio.saltykarma.com/">
                        <i className="fa-solid fa-address-card"></i>Portfolio
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Salty-Julien" target="_blank">
                        <i className="fa-brands fa-github"></i>Github
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavPanel;
