import Axios from "axios";
import React, { useEffect, useState, useContext } from "react";

import AppointmentCard from "../components/appointmentCards";
import Footer from "../components/footer";
import Loader from "../components/loader";
import LoginDetails from "../context/LoginContext";
import Navbar from "../components/navbar";

import "../assets/css/main.css";

const LandingPage = () => {
	const { user, loggedIn, baseURL } = useContext(LoginDetails);
	const [appointments, setAppointments] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (loggedIn) {
			setLoading(true);
			const fetchAppointments = async () => {
				try {
					const { data: foundAppointments } = await Axios.get(`${baseURL}/user/getApt/${user._id}`);
					console.info(`Appointments were found for user with name: ${user.name}`);
					setAppointments(foundAppointments);
					setTimeout(() => {
						setLoading(false);
					}, 1000);
				} catch (error) {
					console.error(`Some error occurred while fetching appointments for user: ${user.name}`, error);
					setLoading(false); // Ensure loading state is reset in case of error
				}
			};
			fetchAppointments();
		}
		// eslint-disable-next-line
	}, [user]);

	const BookMore = () => {
		window.location.href = "/appointments";
	};

	const onLogout = () => {
		localStorage.clear();
		window.location.href = "/";
	};

	const renderAppointments = appointments.map((appointment, index) => {
		return <AppointmentCard appointment={appointment} key={index} />;
	});

	return (
		<React.Fragment>
			<div id={"apt-container"}>
				<Navbar />
				<br />
				<h1 id={"welcome-head"}>Welcome!</h1>
				<p id={"Appointment-sub-head"}>
					Book your appointments here.
				</p>
				<button id={"apt-bookmore-btn"} onClick={BookMore}>
					Book Appointment
				</button>
				<button onClick={onLogout} id={"logout-btn"}>
					Back
				</button>
				<br />
				<br />
				{loading ? <Loader /> : <div id={"appointments-cards"}>{renderAppointments}</div>}
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default LandingPage;
