import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker, faPhone, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'


const Footer = () => {
    return (
        <footer className="footer-distributed">

			<div className="footer-left">

				<h3>Company<span>logo</span></h3>

				<p className="footer-links">

                    <Link to="/">Home</Link>
					
					<Link to="/about">About</Link>
				
					<Link to="/contact">Contact</Link>
			
				</p>

				<p className="footer-company-name">Company Name © 2020</p>
			</div>

			<div className="footer-center">

				<div>
                    <FontAwesomeIcon icon={faMarker} />
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
                    <FontAwesomeIcon icon={faPhone} />
					<p>+1.555.555.5555</p>
				</div>

				<div>
                    <FontAwesomeIcon icon={faEnvelope} />
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="#"><FontAwesomeIcon icon={faCoffee} /></a>
					<a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
					<a href="#"><FontAwesomeIcon icon={faCoffee} /></a>
					<a href="#"><FontAwesomeIcon icon={faPhone} /></a>

				</div>

			</div>

		</footer>
    )
}

export default Footer