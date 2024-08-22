import React, { useState } from "react";
export const Card = (props) => {
    const [like, setLike] = useState(false);
    const onHeartHandler = () => {
        setLike(!like);
        console.log(like);
    }
    return (
        <div className="container border border-secondary p-0 mx-3" style={{ display: 'inline-block', float: 'none', minWidth: '15vw', minHeight: '200px', maxHeight: '80vh', maxWidth: '300px' }}>
            <div className="container p-0">
                <img style={{ width: '300px', height: `400px` }} src={props.apiImg} className="card-img-top m-0 p-0 img-fluid" alt= "not found"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="container d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={props.onClickHandler}>Learn More</button>
                        <button className="btn btn-outline-warning" onClick={() => onHeartHandler()}>{like ? <i className="fa-solid fa-heart text-warning"></i> : <i className="fa-regular fa-heart"></i>}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}