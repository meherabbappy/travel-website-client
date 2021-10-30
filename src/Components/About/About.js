import React from "react";
import { Accordion } from "react-bootstrap";
import "./About.css"

const About = () => {
  return (
    <div className="container my-5">

      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img className="w-100" src="https://img.freepik.com/free-vector/road-trip-moving-car-road-summer-landscape-background-countryside-adventure-cartoon-illustration_80590-7156.jpg?size=626&ext=jpg" alt="" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 className="fw-bold">ADVENTURE TRAVEL?</h1>
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
        <h1 className="text-center fw-bold p-4 text-dark">Travel Alert</h1>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg" class="card-img-top" alt="..." />
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
              <img src="https://www.tripit.com/web/blog/wp-content/uploads/sites/2/2015/07/Screen-Shot-2015-07-15-at-8.50.50-AM.png" class="card-img-top" alt="..." />
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
              <img src="https://thumbs.dreamstime.com/b/travel-world-26385259.jpg" class="card-img-top" alt="..." />
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
              <img src="https://lh3.googleusercontent.com/proxy/GHEHivFwz69ladenmlLHVyE0bU3OoVgwQCZpFXP3UBJVig71B595oPOtzoDYnC1WbBjk0KVo-rZfcgmsefIe-wkkjKrVwyyznVRXUc6hmkdPr4LNQqentAH5kNuM5Q8In-4UCEVFJmYOgD56-IPoZaaGTiuSag" class="card-img-top" alt="..." />
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
              <img src="https://www.thetinybook.com/wp-content/uploads/2016/04/kids-travel-2.jpg" class="card-img-top" alt="..." />
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
              <img src="http://cdn2.livelongandtravel.com/1.jpg" class="card-img-top" alt="..." />
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
