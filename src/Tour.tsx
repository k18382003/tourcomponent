import { useState } from "react";
import tour from "./models/tour";

interface Props {
    tour: tour;
    removeTour: any;
}

export default function Tour({tour, removeTour}: Props)
{
    const [readMore, setReadMore] = useState(false);

    return(
        <div className="single-tour">
            <img src={tour.image} className="img"/>
            <div className="tour-info">
                <h5 className="tour-title">{tour.name}</h5>
                <p>{readMore ? tour.info : `${tour.info.substring(0, 200) + "..."}`}
                    <span className="info-btn" onClick={() => setReadMore(!readMore)}>
                        {readMore ? " Read Less" : "Read More"}
                    </span>
                </p>
            </div>
            <div>
                <button className="btn btn-block delete-btn" onClick={() => removeTour(tour.id)}>Not interested</button> 
            </div>
            <div className="tour-price">${tour.price}</div>
        </div>
    )
}