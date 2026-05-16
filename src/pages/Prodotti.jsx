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
                {products.map(product => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                    </div>
                ))}
            </main>
        </>

    )
}