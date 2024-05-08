import "./Tours.css";
import data from "../data/Data.json";

function Tours() {
    return (
        <div className="parent">
            {data.map((city) => {
                return (
                    <div className="card">
                        <img src={city.image} alt="cite name" />.
                        <h2>{city.name}</h2>
                    </div>
                )
            })}

        </div>
    );

}

export default Tours;