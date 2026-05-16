import { NavLink } from "react-router-dom";


export default function ChiSiamo() {

    return (

        <>
            <main>
                <div className="p-5 mb-3 rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Join the BAT-Side of Development</h1>
                        <p className="col-md-8 fs-4">
                            CHI SIAMO
                        </p>
                        <button className="btn btn-primary btn-lg" type="button">
                            <NavLink className="nav-link" to="/"><i className="bi bi-gitlab px-2"></i>Join Us</NavLink>
                        </button>
                    </div>
                </div>
            </main>
        </>

    )
}