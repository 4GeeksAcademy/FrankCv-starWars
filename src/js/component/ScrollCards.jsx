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
                    store.people.map((e, index) =>
                        <Card key={index} apiImg={baseSrcImg + "planets/" + e.uid + ".jpg"} name={e.name} charId={e.uid} type={'planets'} />
                    )
                }
            </div>
            <h2 className="fs-2 text-start p-3" style={{ color: '#FFCE30' }}>VEHICLES</h2>
            <div className="container shadow-large" style={{ overflowX: 'auto', whiteSpace: 'nowrap', minHeight: '57vh', color: '#FFCE30' }} >
                {
                    store.people.map((e, index) =>
                        <Card key={index} apiImg={baseSrcImg + "characters/" + e.uid + ".jpg"} name={e.name} charId={e.uid} type={'characters'} />
                    )
                }
            </div>
        </div>
    )
}