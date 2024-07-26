import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/form.css';
import Navbar from './navbar';
import Footer from './footer';

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('https://api-ai-showcase.antiersolutions.com/doctors');

                // const response = await axios.get('http://192.168.10.68:5001/doctors');

                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching the doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <>
        <div id="apt-container">
            <Navbar />
            <div className="doctor-list-container">
                <h2>Available Doctors</h2>
                <table className="doctor-list-table">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Doctor Name</th>
                            <th>Specialization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.length > 0 ?
                        doctors.slice(0,10).map((doctor, index) => (
                            <tr key={doctor.id}>
                                <td>{index + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                            </tr>
                        )
                    ) : (
                        <tr>
                        <td colSpan="3" style={{ textAlign: 'center' }}>No record found</td>
                    </tr>                        )}
                    </tbody>
                </table>
            </div>
        </div>
         <Footer/>
         </>
    );
};

export default DoctorList;
