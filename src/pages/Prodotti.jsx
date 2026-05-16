import { NavLink } from "react-router-dom";


export default function Prodotti() {


    const storeApi = "https://fakestoreapi.com/products"

    fetch(storeApi)
        .then(r => r.json())
        .then(data => {
            console.log(data);
        })

    return (

        <>
            <main>
                <div className="card">
                    <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>

            </main>
        </>

    )
}