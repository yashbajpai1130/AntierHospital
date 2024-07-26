import React from "react";

import Navbar from "./navbar";

const Header = () => {
	return (
		<header className={"header"}>
			<Navbar />
			<div className={"welcome-container"}>
				<h1 className={"welcome-head"}>Stay Safe and Secure</h1>
				<a href="/appointmentpage">
					<button className={"about-us"}>Book Appointment</button>
				</a>
			</div>
		</header>
	);
};
export default Header;
