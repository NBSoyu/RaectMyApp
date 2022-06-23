import { useState } from "react";
import React from "react";
import Logo from "../assets/images/logo.png"

function Header() {
	

return (
	<div className="wrapper">
		<div className="header container">
			<div className="linecontent">
				<div className="logo">
					<a href="#">
						<img src={Logo}/>
					</a>
				</div>
				<ul className="tostyle">
					<li className="menucontent">
						<a href="#">
							About
						</a>
					</li>
					<li className="menucontent">
						<a href="#">
							Services
						</a>
					</li>
					<li className="menucontent">
						<a href="#">
							Pricing
						</a>
					</li>
					<li className="menucontent">
						<a href="#">
							Blog
						</a>
					</li>
				</ul>
				<button className="btncontact">CONTACT</button>
			</div>
			<div className="headercontent">
				<h1 className="title">Portfolio</h1>
				<p className="description">
					Agency provides a full service range including technical skills, design, business understanding.
				</p>
			</div>
		</div>
	</div>

);
}

export { Header };
