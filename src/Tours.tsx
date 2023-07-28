import Tour from "./Tour";
import tour from "./models/tour"

interface Props {
    tours : tour[];
    removeTour: any;
}

export default function Tours({tours, removeTour}:Props) {
    return (
        <>
            <div className="tours">
                {tours.map((tour: tour) => {
                    return (
                        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
                    )
                    })
                }
            </div> 
        </>
    )
}