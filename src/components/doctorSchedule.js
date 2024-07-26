import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/form.css';
import Navbar from './navbar';
import Footer from './footer';

const DoctorSchedule = () => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get('https://api-ai-showcase.antiersolutions.com/doctor_schedules');
                // const response = await axios.get('http://192.168.10.68:5001/doctor_schedules');
                const data = response.data;
                
                // Flatten the data
                const flattenedSchedules = Object.values(data).flat();
                setSchedules(flattenedSchedules);
            } catch (error) {
                console.error('Error fetching the schedules:', error);
            }
        };

        fetchSchedules();
    }, []);

    return (
        <>
            <div id="apt-container">
                <Navbar />
                <div className="doctor-list-container">
                    <h2>Doctor Schedules</h2>
                    <table className="doctor-list-table">
                        <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Doctor Name</th>
                                <th>Date of Visit</th>
                                <th>End Time</th>
                                <th>Patient ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedules.length > 0 ? schedules.map((schedule, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{schedule.doctor_name}</td>
                                    <td>{schedule.date_of_visit}</td>
                                    <td>{schedule.end_time}</td>
                                    <td>{schedule.patient_id}</td>
                                </tr>
                            ))
                                :
                                (
                                    <tr>
                                    <td colSpan="6" style={{ textAlign: 'center' }}>No record found</td>
                                </tr>       
                            )
                            }
                        
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DoctorSchedule;
