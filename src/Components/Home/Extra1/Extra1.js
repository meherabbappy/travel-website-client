import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./Extra1.css"

const Extra1 = () => {
    return (
        <div className="my-5">
            <h2 className="text-center fw-bold">OUR ADVANTAGES</h2>

            <div className="row row-cols-1 row-cols-lg-4  g-4 w-75 m-auto">

                <div className="col col1">
                    <div className="card p-2 h-100">
                        <img src="https://livedemo00-joomla.template-help.com/joomla_prod-21623/templates/theme1588/images/home-icon1.png" className="card-img-top ccc" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">CONSULTING</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col col1">
                    <div className="card p-2 h-100">
                        <img src="https://livedemo00-joomla.template-help.com/joomla_prod-21623/templates/theme1588/images/home-icon2.png" className="card-img-top ccc" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">HOT TOURS</h5>
                            <p className="card-text">HOT Tours is a locally owned Quality Tourism Accredited Business based in Kununurra. We specialise in small group, full and half day

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col1">
                    <div className="card p-2 h-100">
                        <img src="https://livedemo00-joomla.template-help.com/joomla_prod-21623/templates/theme1588/images/home-icon3.png" className="card-img-top ccc" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">TRAVEL GUIDE</h5>
                            <p className="card-text">​Whilst regular tours operate throughout the Dry Season we also run Wet Season (January to March) tours which we call our 'specials</p>
                        </div>
                    </div>
                </div>
                <div className="col col1">
                    <div className="card p-2 h-100">
                        <img src="https://livedemo00-joomla.template-help.com/joomla_prod-21623/templates/theme1588/images/home-icon4.png" className="card-img-top ccc" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">HOTEL INFO</h5>
                            <p className="card-text"> Jump aboard our "COOL" and comfortable 6-seater Landcruiser Troop-carrier to enjoy the scenery and learn about the Landcruiser Troop-carrier</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Extra1;