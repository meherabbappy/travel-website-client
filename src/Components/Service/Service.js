import { Button, ButtonGroup, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css"

const Service = ({ service }) => {
    const { _id, name, visit, description, img } = service;
    return (

        <div className="container g-3 py-3">

            <div className="service-details m-1">
                <div className="col p-1">
                    <div className="card">
                        <img src={img} className="card-img-top" alt="..." />


                        <div className="card-body">
                            <h3 className="card-title fw-bold">Name: {name}</h3>
                            <h5 className="card-text fw-bold">Visiting Fee: {visit}</h5>
                            <p className="card-text">{description.slice(0, 125)}</p>
                        </div>


                        <Link className="p-3" to={`/servicedetails/${_id}`}>
                            <button className="btn1  mx-auto">Details</button>
                        </Link>

                    </div>
                </div>
            </div>


        </div>




    );
};

export default Service;













