import React from 'react';
import "./Footer.css"

const Footer = () => {
	return (
		<div>

			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="footer-col">
							<h4 className="h4-cls">Agency</h4>
							<ul>
								<li><a href="#">about us</a></li>
								<li><a href="#">our services</a></li>
								<li><a href="#">privacy policy</a></li>
								<li><a href="#">Adventure</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4 className="h4-cls">get help</h4>
							<ul>
								<li><a href="#">FAQ</a></li>
								<li><a href="#">Travel</a></li>
								<li><a href="#">Health</a></li>
								<li><a href="#">Protection</a></li>

							</ul>
						</div>
						<div className="footer-col">
							<h4 className="h4-cls">Live Support</h4>
							<ul>
								<li><a href="#">Prime Service</a></li>
								<li><a href="#">Destination</a></li>
								<li><a href="#">Imaging</a></li>
								<li><a href="#">PhotoShot</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4 className="h4-cls">Follow US</h4>
							<div className="social-links">
								<a href="#"><i className="fab fa-facebook-f"></i></a>
								<a href="#"><i className="fab fa-twitter"></i></a>
								<a href="#"><i className="fab fa-instagram"></i></a>
								<a href="#"><i className="fab fa-linkedin-in"></i></a>
							</div>
						</div>
					</div>
				</div>
			</footer>




		</div>
	);
};

export default Footer;