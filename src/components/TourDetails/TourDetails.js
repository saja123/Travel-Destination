import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/Data.json";
import "./TourDetails.css";


function TourDetails() {
    const { id } = useParams();
    const [seeMore, setSeeMore] = useState(true);
    
    const toggleReadMore = () => { setSeeMore(!seeMore); }

    const getCityID = data.find(city => city.id === id);

    return (
        <>
            <div className="parent">
                <img className="image-class" src={getCityID.image} alt={getCityID.name}/>
                <div className="id-class" key={getCityID.id}>

                    <article>{seeMore ? getCityID.info.slice(0, 300) : getCityID.info}

                        <span className="read-more" onClick={toggleReadMore}>

                            {seeMore ? " ...read more" : " read less"}

                        </span>

                    </article>
                </div>
            </div>
        </>
    )
}
export default TourDetails;