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

    const game = data.map((game) => {
        return (
            <div class="card col-md-4 m-2">
                <img src={game.image} class="card-img-top" alt="..." />
                <div class="card-body border-info">
                    <h5 class="card-title">{game.title}</h5>
                    <p class="card-text">{game.description}</p>
                    <p class="btn btn-outline-info p-2 m-2">$ {game.price}</p>
                    <a type="button" class="btn btn-success p-2 m-2" >Add to cart</a>
                </div>
            </div>
        );
    })


    return (
        <div class="home">
            <img src={poster} alt="Poster" class="poster" />
            <div class="game">
                <div class="row">
                    <div class="col-3">
                        <h3>Navigation panel</h3>
                    </div>
                    <div class="col-9 d-flex flex-wrap">
                        {game}
                        <button class="card col-md-4 m-2"> <img src={plus} class="card-img-top" alt="..." />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;