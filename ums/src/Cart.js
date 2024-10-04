import { useEffect, useState } from "react";

function Cart(){

    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('http://localhost:4000/adminlist')
        .then(res => res.json())
        .then((res) => {
            setCart(res);
        })
    } , []);

    const deleteIndex = (index) => {
        fetch(`http://localhost:4000/adminlist/delete/${index}`, {method: 'DELETE'})
        .then(res => res.json())
        .then((res) => {
            setCart(res);
        })
    }

    const list = cart.map((card, index) => {
        // console.log(index);
        return (
            <div key={index} className="card col-md-4 m-2">
                <img src={card.image} className="card-img-top" alt="..." />
                <div className="card-body border-info">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <p className="btn btn-outline-info p-2 m-2">$ {card.price}</p>
                    <a 
                        className="btn btn-danger p-2 m-2"
                        type="button"
                        onClick={ () => { deleteIndex(index) } }
                    > Delete </a>
                </div>
            </div>
        );
    });

    return(
        <>
            <div className='pt-3 container d-flex flex-wrap justify-content-center'>
                {list}
            </div>
        </>
    )
}
export default Cart;