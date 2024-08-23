import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../store/appContext.js";
export const ReadMore = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getData(params.type, params.id);
    }, [])
    const url = `https://starwars-visualguide.com/assets/img/${params.type}}/${params.id}.jpg`;
    console.log(store.helper.properties)
    return (
        <div>
            <div className="container-fluid mt-5 pt-5">
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container d-flex border-bottom border-danger px-0 mb-4 pb-4 text-light">
                                <img src={url} className="d-block w-100" alt="not found" style={{ minWidth: '200px', minHeight: '400px', maxWidth: '20vw', height: '50vh' }} />
                                <div className="container">
                                    <h2>{store?.helper?.properties?.name}</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse cumque, illo animi odio consequuntur reiciendis obcaecati officia natus dolor. Molestiae error dolores magnam nisi a ab mollitia nulla quasi veniam.</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row p-3 align-items-start text-danger fw-bold m-0 pb-0 text-light">
                                    <div className="col-2 border-end border-danger" style={{ minHeight: '60px', height: "5vh" }}>Name <br /></div>
                                    <div className="col-2 border-end border-danger" style={{ minHeight: '60px', height: "5vh" }}>Birth <br />Year</div>
                                    <div className="col-2 border-end border-danger" style={{ minHeight: '60px', height: "5vh" }}>Gender</div>
                                    <div className="col-2 border-end border-danger" style={{ minHeight: '60px', height: "5vh" }}>Height</div>
                                    <div className="col-2 border-end border-danger" style={{ minHeight: '60px', height: "5vh" }}>Skin <br /> Color</div>
                                    <div className="col-2 border-end border-danger" style={{ minHeight: '60px', height: "5vh" }}>Eye<br />Color</div>
                                </div>
                                <div className="row p-3 text-danger m-0 pt-0 text-light">
                                    <div className="col-2 border-end border-danger">{store?.helper?.properties?.name}</div>
                                    <div className="col-2 border-end border-danger">{store?.helper?.properties?.birth_year}</div>
                                    <div className="col-2 border-end border-danger">{store?.helper?.properties?.gender}<br /></div>
                                    <div className="col-2 border-end border-danger">{store?.helper?.properties?.height}</div>
                                    <div className="col-2 border-end border-danger">{store?.helper?.properties?.skin_color}<br /></div>
                                    <div className="col-2 border-end border-danger">{store?.helper?.properties?.eye_color}<br /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// store.helper.length > 0 ?
// birth_year
// gender
// height
// skin_color
// eye_color
//height={store.helper.properties.height}