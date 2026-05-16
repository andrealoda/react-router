import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AppSidebar from "../components/AppSidebar"


export default function Prodotti() {


    const storeApi = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([])

    useEffect(() => {

        console.log('component mounted');

        fetch(storeApi)
            .then(r => r.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, [])

    return (

        <>

            <AppSidebar />

                <div className="main-wrapper">
                    <div className="row d-flex justify-content-between gap-3 left">

                        {products.map(product => (
                            <div className="card rounded-5 bg-light-custom" style={{ width: "350px" }} key={product.id}>
                                <img src={product.image} className="card-img-top p-3" alt="Product image" />

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text text-muted">Categoria: {product.category}</p>
                                    <p className="fw-bold mb-3">${product.price}</p>

                                    <a href="#" className="btn bg-brand-gradient text-white w-100 mt-auto">Acquista</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

        </>

    )
}