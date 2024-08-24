import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";
import { CardPlanet } from "../component/CardPlanet.jsx"
import { CardVehicle } from "./CardVehicle.jsx";

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

    console.log(store?.vehicles)
    return (
        <div>
            <h2 className="fs-2 text-start p-3" style={{ color: '#FFCE30' }}>CHARACTERS</h2>
            <div className="container shadow-large" style={{ overflowX: 'auto', whiteSpace: 'nowrap', minHeight: '57vh', color: '#FFCE30' }} >
                {
                    store.people.map((e, index) =>
                        <Card key={index} apiImg={baseSrcImg + "characters/" + e.uid + ".jpg"} name={e.name} charId={e.uid} type={'characters'} />
                    )
                }
            </div>
            <h2 className="fs-2 text-start p-3" style={{ color: '#FFCE30' }}>PLANETS</h2>
            <div className="container shadow-large" style={{ overflowX: 'auto', whiteSpace: 'nowrap', minHeight: '57vh', color: '#FFCE30' }} >
                {
                    store.planets.map((e, index) =>
                        <CardPlanet key={index} apiImg={baseSrcImg + "planets/" + e.uid + ".jpg"} name={e.name} charId={e.uid} type={'planets'} />
                    )
                }
            </div>
            <h2 className="fs-2 text-start p-3" style={{ color: '#FFCE30' }}>VEHICLES</h2>
            <div className="container shadow-large" style={{ overflowX: 'auto', whiteSpace: 'nowrap', minHeight: '57vh', color: '#FFCE30' }} >
                {
                    store.vehicles.map((e, index) =>
                        <CardVehicle key={index} apiImg={baseSrcImg + "vehicles/" + e.uid + ".jpg"} name={e.name} charId={e.uid} type={'vehicles'} />
                    )
                }
            </div>
        </div>
    )
}