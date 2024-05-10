import "./Tours.css";
import data from "../../data/Data.json";
import Tour from "./tour/Tour";

function Tours() {
    return (
        <>
            <Tour tour={data} />
        </>
    );

}

export default Tours;