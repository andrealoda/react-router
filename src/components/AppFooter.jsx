import { NavLink, Link } from "react-router-dom"

export default function AppFooter() {

    return (
        <>
            <footer className="text-center position mt-auto">
                <div className="container pt-1">
                    <section className="mb-4">
                        <Link className="btn btn-floating btn-lg m-1" to="/" role="button">
                        <div>Home</div>
                        
                        </Link>
                        <Link className="btn btn-floating btn-lg m-1" to="/ChiSiamo" role="button">
                        <div>Chi Siamo</div>
                        </Link>
                        <Link className="btn btn-floating btn-lg m-1" to="/Prodotti" role="button">
                        <div>Prodotti</div>
                        </Link>
                    </section >
                </div >
                <div className="text-center p-2">
                    © 2033 Copyright: FooterOne
                </div>
            </footer>
        </>
    )
}