// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../assets/css/form.css';
// import Navbar from './navbar';
// import Footer from './footer';

// const Patient = () => {
//     const [doctors, setDoctors] = useState([]);

//     useEffect(() => {
//         const fetchDoctors = async () => {
//             try {
//                 // const response = await axios.get('https://api-ai-showcase.antiersolutions.com/patient_mapping');
//                 const response = await axios.get('http://192.168.10.68:5001/patient_mapping');
//                 setDoctors(response.data);
//             } catch (error) {
//                 console.error('Error fetching the doctors:', error);
//             }
//         };

//         fetchDoctors();
//     }, []);

//     // const [time, settime] = useState([]);
//     // // const [selectedDoctor, setSelectedDoctor] = useState('');

//     // useEffect(() => {
//     //     const fetchTime = async () => {
//     //         try {
//     //             const response = await axios.get('http://172.16.15.156:5001/doctor_schedules');
//     //             settime(response.data);
//     //         } catch (error) {
//     //             console.error('Error fetching the doctors:', error);
//     //         }
//     //     };

//     //     fetchTime();
//     // }, []);

//     // // const handleSelectDoctor = (event) => {
//     // //     setTime(event.target.value);
//     // // };

//     return (
//         <>
//         <div id="apt-container">
//             <Navbar />
//             <div className="doctor-list-container">
//                 <h2>Patient</h2>
//                 <table className="doctor-list-table">
//                     <thead>
//                         <tr>
//                             <th>Serial No.</th>
//                             <th>Patient Name</th>
//                             <th>Age</th>
//                             <th>Symptoms</th>
//                             <th>Doctor Assign</th>
//                             <th>Time Slot</th>
//                             <th>Date</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {doctors.length > 0 ? doctors.map((doctor, index) => (
//                             <tr key={doctor.id}>
//                                 <td>{index + 1}</td>
//                                 <td>{doctor.name}</td>
//                                 <td>{doctor.age}</td>
//                                 <td>{doctor.symptoms}</td>
//                                 <td>{doctor.preference}</td>
//                                 <td>{doctor.start_time + "-" + doctor.end_time}   </td>
//                                 <td>{doctor.date_of_visit}</td>
                                
// {/* 9:30 - S12:30 */}

//                             </tr>
//                         )) : (
//                             <tr>
//                             <td colSpan="6" style={{ textAlign: 'center' }}>No record found</td>
//                         </tr>       
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//          <Footer/>
//          </>
//     );
// };

// export default Patient;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/form.css';
import Navbar from './navbar';
import Footer from './footer';

const Patient = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('https://api-ai-showcase.antiersolutions.com/patient_mapping');
                // const response = await axios.get('http://192.168.10.68:5001/patient_mapping');
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
                    <h2>Patient</h2>
                    <table className="doctor-list-table">
                        <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Patient Name</th>
                                <th>Age</th>
                                <th>Symptoms</th>
                                <th>Doctor Assign</th>
                                <th>Time Slot</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors?.length > 0 ? doctors?.map((doctor, index) => (
                                <tr key={doctor?.id}>
                                    <td>{index + 1}</td>
                                    <td>{doctor?.name}</td>
                                    <td>{doctor?.age}</td>
                                    <td>{doctor?.symptoms}</td>
                                    <td>{doctor?.preference || "General Doctor"}</td>
                                    <td>{doctor?.start_time + "-" + doctor?.end_time}</td>
                                    <td>{doctor?.date_of_visit}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="7" style={{ textAlign: 'center' }}>No records found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Patient;
