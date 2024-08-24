import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"
import tatooine from "../../img/Tatooine-TCW.webp"
export const CardPlanet = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [like, setLike] = useState(false);
    const id = props.charId;
    const name = props.name;

    const onClickHandler = () => {
        navigate('./ReadMorePlanets/' + props.type + '/' + props.name + '/' + props.charId)
    }
    const onLikeHandler = () => {
        setLike(prev => !prev)
        console.log(like)
        if (like === false) {
            actions.setLikeList(name, id)
            console.log(`setted`)
        } else {
            actions.filterLikeList(id)
        }
    }
    return (
        <div className="container border border-secondary p-0 ms-1 me-3" style={{ display: 'inline-block', float: 'none', minWidth: '15vw', minHeight: '500px', maxHeight: '80vh', maxWidth: '300px' }}>
            <div className="container p-0">
                <img src={props.name === "Tatooine" ? tatooine : props.apiImg} className="m-0 p-0 img-fluid" alt="not found" />
                <div className="card-body mt-5">
                    <h5 className="card-title mb-5">{props.name}</h5>
                    <div className="container d-flex justify-content-between mt-4">
                        <button className="btn btn-primary btn-colored" style={{ backgroundColor: '#d22013', borderColor: 'white' }} onClick={() => onClickHandler()}>Learn More</button>
                        <button className="btn btn-outline-warning" onClick={() => onLikeHandler()}>
                            {
                                store.likeList.filter(e => e.name === name && e.id === id).length === 0
                                    ? <i className="fa-regular fa-heart"></i>
                                    : <i className="fa-solid fa-heart text-warning"></i>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}