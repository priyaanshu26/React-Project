import { useEffect, useState } from "react";

function Cart(){

    const [cart, setCart] = useState([]);

    const [list, setList] = useState("");

    useEffect( () => {
        fetch('http://localhost:4000/adminlist')
        .then(res => res.json())
        .then((res) => {
            setCart(res);
            console.log(res);
            update();
        })
    } , []);

    const update = () => {
        setList(
            cart.map((card) => {
                return (
                    <div className="card col-md-4 m-2">
                        <img src={card.image} className="card-img-top" alt="..." />
                        <div className="card-body border-info">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.description}</p>
                            <p className="btn btn-outline-info p-2 m-2">$ {card.price}</p>
                            <a type="button" className="btn btn-success p-2 m-2" >Add to cart</a>
                        </div>
                    </div>
                );
            })
        );
    } 

    return(
        <>
            {list}
        </>
    )
}
export default Cart;