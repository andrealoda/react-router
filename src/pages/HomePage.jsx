import { NavLink } from "react-router-dom";


export default function HomePage() {

    return (

        <>
            <main>
                <div className="p-5 mb-3 rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Join the BAT-Side of Development</h1>
                        <p className="col-md-8 fs-4">
                            Doggo ipsum i am bekom fat blep very jealous pupper long woofer borkf borking doggo, very hand that feed shibe porgo very taste wow puggorino.
                            Snoot tungg wrinkler floofs very hand that feed shibe floofs, I am bekom fat smol borking doggo with a long snoot for pats most angery pupper
                            I have ever seen. Snoot borking doggo most angery pupper I have ever seen what a nice floof, the neighborhood pupper very taste wow.
                            The neighborhood pupper clouds super chub doge borkdrive, mlem wow very biscit. Puggorino super chub long woofer clouds h*ck, much ruin
                            diet long doggo sub woofer wow such tempt long bois, heckin wow very biscit smol.
                        </p>
                        <button className="btn btn-primary btn-lg" type="button">
                            <NavLink className="nav-link" to="/Prodotti">Scrolla i nostri prodotti</NavLink>
                        </button>
                    </div>
                </div>
            </main>
        </>

    )
}