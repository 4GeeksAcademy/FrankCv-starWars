import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

export const ScrollCards = () => {
    const { store, actions } = useContext(Context)

    const baseSrcImg = "https://starwars-visualguide.com/assets/img/"
    // const navigate = useNavigate();
    // const params = useParams()
    useEffect(() => {
        actions.getPeople();
        actions.getPlanets();
        actions.getVehicles();
    }, [])

    const onClickHandler = () => {
        // navigate('/readMore/' + id)
    }
    const onLikeHandler = ()=>{
        
    }

    return (
        <div>
            {/* */}
            <h2 className="text-danger fs-2">CHARACTERS</h2>

            <div className="container" style={{ overflowX: 'auto', whiteSpace: 'nowrap', height: '57vh' }} >
                {
                    store.people.map((e, index) =>
                        <Card key={index} apiImg={baseSrcImg + "characters/" + e.uid + ".jpg"} name={e.name} onClickHandler={onClickHandler} />
                    )
                }
            </div>

            <h2 className="text-danger fs-2">PLANETS</h2>
            <div className="container" style={{ overflowX: 'auto', whiteSpace: 'nowrap', height: '57vh' }} >
                {
                    store.planets.map((e, index) =>
                        <Card key={index} apiImg={baseSrcImg + "planets/" + e.uid + ".jpg"} name={e.name} onClickHandler={onClickHandler} />
                    )
                }
            </div>
            <h2 className="text-danger fs-2">VEHICLES</h2>
            <div className="container" style={{ overflowX: 'auto', whiteSpace: 'nowrap', height: '57vh' }} >
                {
                    store.vehicles.map((e, index) =>
                        <Card key={index} apiImg={baseSrcImg + "vehicles/" + e.uid + ".jpg"} name={e.name} onClickHandler={onClickHandler} />
                    )
                }
            </div>
        </div>
    )
}