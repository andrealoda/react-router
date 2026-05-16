import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


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
            <main>
                <div>
                    <div className="row  d-flex justify-content-center gap-3">

                {products.map(product => (
                    <div className="card" style={{width: "18rem"}} key={product.id}>
                        <img src={product.image} className="card-img-top" alt="Product image" />

                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text text-muted">Categoria: {product.category}</p>
                                <p className="fw-bold mb-3">${product.price}</p>

                                <a href="#" className="btn btn-primary w-100">Acquista</a>
                            </div>
                    </div>
                ))}
                    </div>
                </div>
            </main>
        </>

    )
}