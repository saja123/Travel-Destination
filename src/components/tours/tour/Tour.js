import { Link } from "react-router-dom";

function Tour(props) {

    return (
        <div className="parent">
            {props.tour.map((city) => {
                return (
                    <>
                        <Link className="link-card" to={`/city/${city.id}`}>
                            <div className="card">
                                <img src={city.image} alt="cite name" />.
                                <h2>{city.name}</h2>
                            </div>
                        </Link>
                    </>
                )
            })}

        </div>
    )
}

export default Tour;