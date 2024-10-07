import { useEffect, useState } from "react";
import { apiBaseUrl } from "./apiBaseUrl";

function Cart() {
    var total=0;
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`${apiBaseUrl}/adminlist`)
            .then(res => res.json())
            .then((res) => {
                setCart(res);
            })
    }, []);

    const deleteIndex = (index) => {
        fetch(`${apiBaseUrl}/adminlist/delete/${index}`, { method: 'DELETE' })
            .then(res => res.json())
            .then((res) => {
                setCart(res);
            })
    }

    const list = cart.map((card, index) => {
        // console.log(index);
            total += card.price;
        return (

            <div key={index} class="card mb-3 col-8 border-info text-bg-dark">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={card.image} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{card.title}</h5>
                            <p class="card-text">{card.description}</p>
                            <p className="btn btn-outline-info p-2 m-2">$ {card.price}</p>
                            <a
                                className="btn btn-danger p-2 m-2"
                                type="button"
                                onClick={() => { deleteIndex(index) }}
                            > Delete </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className='pt-3 container d-flex flex-wrap justify-content-center'>
                {list}
                <p className="text-bg-dark border-info m-2 p-2 col-8 d-flex justify-content-center word-spacing-2">
                    Total Price : $ {total}
                </p>
            </div>
            <hr />

        </>
    )
}
export default Cart;