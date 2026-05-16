import { NavLink } from "react-router-dom"

export default function AppHeader() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-text-body">
                    <div className="container-fluid">
                        <a className="btn navbar-brand" href="/">
                            <img src="../src/assets/gigghy-logo.svg" alt="Gigghy Shop" width="30" height="24"></img>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/ChiSiamo">Chi Siamo</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Prodotti">Prodotti</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}