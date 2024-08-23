import React from "react"
export const Detail = (props) => {
    const url = `https://starwars-visualguide.com/assets/img/${props.type}/${props.id}.jpg`

    return (
        <div className="container-fluid">
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container d-flex border-bottom border-danger px-0 mb-4">
                            <img src={url} className="d-block w-100" alt="not found" />
                            <div className="container">
                                <h2>{props.name}</h2>
                                <p>{props.description}</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row p-3 ms-4">
                                <div className="col-2">{props.detail}<br /></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
{/* <div className="col-2">Name<br />{props.name}</div> */ }
{/* <div className="col-2">Birth<br />Year<br />{props.birthYear}</div> */ }
{/* {/* <div className="col-2">Gender<br />{props.arr['gender']}</div> */ }
{/* <div className="col-2">Skin<br />Color<br />{props.arr['skin_color']}</div>
<div className="col-2">Eye<br />Color<br />{props.arr['eye_color']}</div> */}
{/* name */ }
{/* birth_year
gender
height
skin_color
eye_color */}