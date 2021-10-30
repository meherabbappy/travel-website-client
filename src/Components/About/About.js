import React from "react";
import { Accordion } from "react-bootstrap";
import "./About.css"

const About = () => {
  return (
    <div className="container my-5">

      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img className="w-100" src="https://blog.theclymb.com/wp-content/uploads/2014/11/Myanmar.jpg" alt="" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1>ADVENTURE TRAVEL?</h1>
          <p className="text-danger">PROFESSIONAL TOUR</p>

          <Accordion defaultActiveKey="0">

            <Accordion.Item eventKey="0">
              <Accordion.Header>Life-changing travel </Accordion.Header>
              <Accordion.Body>
                Life-changing travel must also be sustainable travel. By bringing together a growing community of people committed to traveling thoughtfully and considerately, we help shape the adventure and eco-tourism industry as it grows. In response to travelers’ desires,
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Around the world.!!</Accordion.Header>
              <Accordion.Body>
                outstanding commitments to responsible travel, we have everything you need to make sure your adventures align with your values.

                Life-changing travel must also be sustainable travel. By bringing together a growing community of people committed to traveling
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Be a Human For Travel</Accordion.Header>
              <Accordion.Body>
                Through compelling images and well-crafted stories, research and curated news of interest, Adventure.Travel inspires the curious to try new destinations, branch out in their activities, interact deeply with nature, and experience different cultures in the most respectful way
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>


        </div>
      </div>

      {/* service section  */}

      <div className="container1 my-5">
        <h1 className="text-center p-4 text-dark">Travel Guide</h1>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://www.adventure.travel/images/values/community.svg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>RESPECTING COMMUNITY FIRST</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://www.adventure.travel/images/values/security.svg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>PROMOTING CULTURAL</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://www.adventure.travel/images/values/wild-places.svg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>SAVING WILD PLACES</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://www.adventure.travel/images/values/animals.svg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>PROTECTING ANIMALS</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://www.adventure.travel/images/values/children.svg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>PROTECTING CHILDREN</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://www.adventure.travel/images/values/local.svg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>LOCAL ECONOMIES</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>


      </div>




    </div>





  );
};

export default About;
