import poster from "./images/poster.png"
import plus from "./images/plus.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
    const [data, setData] = useState([]);

    const apiUrl = "http://localhost:4000/cards";

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const addToCart = (id) => {
        fetch(`http://localhost:4000/adminlist/add/${id}`, { method: "POST" })
            .then(res => res.json())
            .then((res) => { })
    }

    const game = data.map((game, index) => {
        return (
            <div key={index} className="card col-md-4 m-2 text-bg-dark border-info">
                <img src={game.image} className="card-img-top" alt="..." />
                <div className="card-body border-info">
                    <h5 className="card-title">{game.title}</h5>
                    <p className="card-text">{game.description}</p>
                    <p className="btn btn-outline-info p-2 m-2">$ {game.price}</p>
                    <a
                        type="button"
                        className="btn btn-success p-2 m-2"
                        onClick={() => { addToCart(game._id) }}
                    >Add to cart</a>
                </div>
            </div>
        );
    })


    return (
        <div className="home">
            <img src={poster} alt="Poster" className="poster" />
            <div className="game">
                <div className="row">
                    <div className="col-3">
                        <h3>Navigation panel</h3>
                    </div>
                    <div className="col-9 d-flex flex-wrap">
                        {game}

                        <button
                            className="card col-md-4 m-2 text-bg-dark border-info"
                            onClick={() => {
                                console.log('add')
                            }}
                        >
                            <Link to="/input">
                                <img
                                    src={plus}
                                    className="card-img-top"
                                    alt="..."
                                />
                            </Link>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;

