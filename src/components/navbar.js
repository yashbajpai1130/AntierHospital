import React, { useContext } from "react";

import LoginDetails from "../context/LoginContext";
import logo from "../assets/imgs/image-removebg-preview.png";
const Navbar = () => {
	const { loggedIn, user } = useContext(LoginDetails);
	return !loggedIn ? (
		<div className={"navbar"}>
			<div className={"nav-container"}>
				{/* <h1
					onClick={() => {
						window.location.href = "/";
					}}
					className={"nav-head"}>
					HMS
				</h1> */}
				<a href={"/"}> <img src={logo} alt="Health Insurance" className="logo" /> </a>
			</div>
			<ul className={"nav-links"}>
				<li>
					<a href={""}>Home</a>
				</li>
				<li>
					<a href={"/appointmentpage"}>Appointment</a>
				</li>
				<li>
					<a href={"/doctor"}>Doctor</a>
				</li>
				<li>
					<a href={"/appointment/doctor-schedules"}>Doctor Schedules</a>
				</li>
				<li>
					<a href={"/patient"}>Patient</a>
				</li>
				{/* <li>
					<a
						rel="noreferrer"
						href={""}
						target={"_blank"}>
						About-Us
					</a>
				</li> */}
			</ul>
		</div>
	) : (
		<></>
		// <div className={"navbar"}>
		// 	<div className={"nav-container"}>
		// 		<h1
		// 			onClick={() => {
		// 				window.location.href = "/";
		// 			}}
		// 			className={"nav-head"}>
		// 			HMS
		// 		</h1>
		// 	</div>
		// 	<ul className={"nav-links"}>
		// 		<li>
		// 			<a href={"/appointmentpage"}>{user.name}</a>
		// 		</li>
		// 		<li>
		// 			<a href={"/appointments"}>Book Appoinment</a>
		// 		</li>
		// 		<li>
		// 			<a
		// 				rel="noreferrer"
		// 				href={""}
		// 				target={"_blank"}>
		// 				About-Us
		// 			</a>
		// 		</li>
		// 	</ul>
		// </div>
	);
};

export default Navbar;
