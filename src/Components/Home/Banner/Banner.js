// import React from "react";
// import { Button, Col, Row } from "react-bootstrap";
// import "./Banner.css";

// const Banner = () => {
//   return (
//     <div className="containers">
//       <Row className="header-all">
//         <Col xs={12} lg={6}>
//           <div className="home-description">
//             <h1 className="title">
//               DISCOVER WORLD
//             </h1>
//             <p className="p-title">
//               A good doctor is not one who cures the most because in many specialties recovery is not a frequent outcome. It is not one who makes the best diagnosis because in many cases of self limited or incurable disorders the precise and timely diagnosis does not make a great difference for the patient.
//             </p>
//             <Button className="google-btn p-3">Visit Our Website</Button>
//           </div>
//         </Col>


//       </Row>
//     </div>
//   );
// };

// export default Banner;


import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="containers">
      {<Row className="header-all">
        <Col xs={12} lg={12}>
          <div className="home-description p-4">
            <h1 className="title">
              Discover The World
            </h1>
            <p className="p-title">
              teavel the world, experience the greatness, it's the best gift given
              by the nature.
            </p>
            <Button className="btn-visit p-2">Visite Places</Button>
          </div>
        </Col>


      </Row>}

    </div>
  );
};

export default Banner;

