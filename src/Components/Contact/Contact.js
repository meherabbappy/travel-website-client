import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <div>

      <section className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>Let's Go For Travel</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text fs-5">Adventure.Travel is the go-to source for information on adventure travel that prioritizes sustainability, serves as a force for good, and transforms people and places.</p>
        </div>


        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span><i className="fas fa-mobile-alt"></i></span>
              <span>Phone No.</span>
              <span className="text">01845345566</span>
            </div>
            <div>
              <span><i className="fas fa-envelope-open"></i></span>
              <span>E-mail</span>
              <span className="text">meherabhossain584@gmail.com</span>
            </div>
            <div>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>Address</span>
              <span className="text">Dhaka Main Office, Dhaka, Bangladesh</span>
            </div>
            <div>
              <span><i className="fas fa-clock"></i></span>
              <span>Opening Hours</span>
              <span className="text">Saturday - Friday (9:00 AM to 8:00 PM)</span>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div>
                <input type="text" className="form-control" placeholder="First Name" />
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
              <div>
                <input type="email" className="form-control" placeholder="E-mail" />
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
              <textarea rows="5" placeholder="Message" className="form-control"></textarea>
              <input type="submit" className="send-btn" value="send message" />
            </form>

            <div>
              <img src="https://previews.123rf.com/images/pollygrimm/pollygrimm1712/pollygrimm171200010/91519080-travel-in-old-age-vector-concept-flat-design-elderly-couple-with-baggage-car-and-dog-going-on-journe.jpg" alt="" />
            </div>
          </div>
        </div>


      </section>



    </div>
  );
};

export default Contact;