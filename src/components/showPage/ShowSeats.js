import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import { setSeatsAction } from '../../actions/userActions'
import { useContext } from 'react';
import { ReservationContext } from '../../contexts/reservationContext';
import { useEffect } from 'react';

const ShowSeats = ({ show }) => {

    const { reservationData, dispatchReservationData } = useContext(ReservationContext);
    const [seatsIDs, setSeatsIDs] = useState([]);

    useEffect(() => {
        setSeatsIDs(reservationData.seats.map((seat) => {
            return seat._id
        }))
    }, [reservationData])

    const seatClicked = (seat) => {
        const filteredSeats = reservationData.seats.filter(seatT => seatT._id !== seat._id);
        if (filteredSeats.length !== reservationData.seats.length) {
            dispatchReservationData(setSeatsAction(filteredSeats))
        }
        else {
            dispatchReservationData(setSeatsAction([...reservationData.seats, seat]))
        }
    }

    return (
        <div className="seatCharts-container">
            <div className="seatCharts-screen-cell">
                <div className="seatCharts-screen">
                    <img src="https://tickets.yesplanet.co.il/YPR/Assets/Images/YesPlanet_Res/screen.png" alt="screen" />
                </div>
            </div>
            <div className="seats">
                {
                    show.seats.map((seatObj) => (
                        <div key={nanoid()} className="seatCharts-cell">
                            <div className="seatCharts-seat" onClick={() => seatClicked(seatObj.seat)}>
                                {!seatObj.seat.isTaken ? seatsIDs.includes(seatObj.seat._id) ? <svg className="selectedSeat" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="40" height="40"
                                    viewBox="0 0 172 172"
                                    style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M40.85,122.55v-100.5125c0,-8.5957 6.9918,-15.5875 15.5875,-15.5875h59.125c8.5957,0 15.5875,6.9918 15.5875,15.5875v100.5125z" fill="#e67e22"></path><path d="M115.5625,8.6c7.4089,0 13.4375,6.0286 13.4375,13.4375v98.3625h-86v-98.3625c0,-7.4089 6.0286,-13.4375 13.4375,-13.4375h59.125M115.5625,4.3h-59.125c-9.7954,0 -17.7375,7.9421 -17.7375,17.7375v102.6625h94.6v-102.6625c0,-9.7954 -7.9421,-17.7375 -17.7375,-17.7375z" fill="#000000"></path>
                                        <path d="M107.5,129h-43c-4.73,0 -8.6,-3.87 -8.6,-8.6v-90.3c0,-4.73 3.87,-8.6 8.6,-8.6h43c4.73,0 8.6,3.87 8.6,8.6v90.3c0,4.73 -3.87,8.6 -8.6,8.6z" fill="#e67e22"></path><path d="M23.65,165.55v-64.5c0,-2.3736 1.9307,-4.3 4.3,-4.3h8.6c2.3693,0 4.3,1.9264 4.3,4.3v64.5z" fill="#000000"></path><path d="M36.55,98.9c1.1868,0 2.15,0.9632 2.15,2.15v62.35h-12.9v-62.35c0,-1.1868 0.9632,-2.15 2.15,-2.15h8.6M36.55,94.6h-8.6c-3.5604,0 -6.45,2.8896 -6.45,6.45v66.65h21.5v-66.65c0,-3.5604 -2.8896,-6.45 -6.45,-6.45z" fill="#000000"></path><path d="M131.15,165.55v-64.5c0,-2.3736 1.9307,-4.3 4.3,-4.3h8.6c2.3693,0 4.3,1.9264 4.3,4.3v64.5z" fill="#000000"></path><path d="M144.05,98.9c1.1868,0 2.15,0.9632 2.15,2.15v62.35h-12.9v-62.35c0,-1.1868 0.9632,-2.15 2.15,-2.15h8.6M144.05,94.6h-8.6c-3.5604,0 -6.45,2.8896 -6.45,6.45v66.65h21.5v-66.65c0,-3.5604 -2.8896,-6.45 -6.45,-6.45z" fill="#000000"></path>
                                        <path d="M23.65,139.75v-21.5h19.35c0.6321,-0.086 22.2611,-4.3 43,-4.3c20.7389,0 42.3679,4.214 42.5829,4.257l19.7671,0.0387v21.5043z" fill="#e67e22"></path><path d="M86,116.1c20.5153,0 41.9551,4.1753 42.1701,4.2183l0.4085,0.0817h0.4214h17.2v17.2h-120.4v-17.2h17.2h0.4214l0.4128,-0.0817c0.2107,-0.043 21.6505,-4.2183 42.1658,-4.2183M86,111.8c-21.2033,0 -43,4.3 -43,4.3h-21.5v25.8h129v-25.8h-21.5c0,0 -21.7967,-4.3 -43,-4.3z" fill="#000000"></path><g><path d="M131.15,105.35h17.2v34.4h-17.2z" fill="#e67e22"></path><path d="M146.2,107.5v30.1h-12.9v-30.1h12.9M150.5,103.2h-21.5v38.7h21.5v-38.7z" fill="#000000"></path></g><g><path d="M23.65,105.35h17.2v34.4h-17.2z" fill="#e67e22"></path>
                                            <path d="M38.7,107.5v30.1h-12.9v-30.1h12.9M43,103.2h-21.5v38.7h21.5v-38.7z" fill="#000000"></path></g><path d="M60.2,38.7v-8.6c0,-2.3693 1.9307,-4.3 4.3,-4.3h43c2.3693,0 4.3,1.9307 4.3,4.3v8.6h4.3v-8.6c0,-4.7515 -3.8485,-8.6 -8.6,-8.6h-43c-4.7515,0 -8.6,3.8485 -8.6,8.6v8.6z" fill="#000000"></path></g></g></svg> : <svg className={seatsIDs.includes(seatObj.seat._id) ? 'selectedSeat' : 'availableSeat'}
                                                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="40" height="40"
                                                viewBox="0 0 172 172"
                                            ><g transform="translate(4.73,4.73) scale(0.945,0.945)"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="none" strokeLinecap="butt" strokeLinejoin="none" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g stroke="#ffffff" strokeWidth="10" strokeLinejoin="round"><path d="M39.775,123.625v-101.5875c0,-9.18695 7.47555,-16.6625 16.6625,-16.6625h59.125c9.18695,0 16.6625,7.47555 16.6625,16.6625v101.5875z" fill="#f78f8f"></path><path d="M115.5625,6.45h-59.125c-8.5957,0 -15.5875,6.9918 -15.5875,15.5875v100.5125h90.3v-100.5125c0,-8.5957 -6.9918,-15.5875 -15.5875,-15.5875M115.5625,4.3c9.7954,0 17.7375,7.9421 17.7375,17.7375v102.6625h-94.6v-102.6625c0,-9.7954 7.9421,-17.7375 17.7375,-17.7375z" fill="#c74343"></path><path d="M107.5,129h-43c-4.73,0 -8.6,-3.87 -8.6,-8.6v-90.3c0,-4.73 3.87,-8.6 8.6,-8.6h43c4.73,0 8.6,3.87 8.6,8.6v90.3c0,4.73 -3.87,8.6 -8.6,8.6z" fill="#ea7575"></path>
                                                <path d="M22.575,166.625v-65.575c0,-2.96485 2.4123,-5.375 5.375,-5.375h8.6c2.9627,0 5.375,2.41015 5.375,5.375v65.575z" fill="#f5ce85"></path><path d="M36.55,96.75h-8.6c-2.37145,0 -4.3,1.92855 -4.3,4.3v64.5h17.2v-64.5c0,-2.37145 -1.92855,-4.3 -4.3,-4.3M36.55,94.6c3.56255,0 6.45,2.88745 6.45,6.45v66.65h-21.5v-66.65c0,-3.56255 2.88745,-6.45 6.45,-6.45z" fill="#967a44"></path><path d="M130.075,166.625v-65.575c0,-2.96485 2.4123,-5.375 5.375,-5.375h8.6c2.9627,0 5.375,2.41015 5.375,5.375v65.575z" fill="#f5ce85"></path><path d="M144.05,96.75h-8.6c-2.37145,0 -4.3,1.92855 -4.3,4.3v64.5h17.2v-64.5c0,-2.37145 -1.92855,-4.3 -4.3,-4.3M144.05,94.6c3.56255,0 6.45,2.88745 6.45,6.45v66.65h-21.5v-66.65c0,-3.56255 2.88745,-6.45 6.45,-6.45z" fill="#967a44"></path><path d="M22.575,140.825v-23.65h20.425c0.4257,-0.06235 22.1493,-4.3 43,-4.3c20.8507,0 42.5743,4.23765 42.79145,4.2785l20.63355,0.0215v23.65z" fill="#f78f8f"></path><path d="M86,113.95c-20.7389,0 -42.3679,4.21615 -42.5829,4.25915l-0.2064,0.04085h-19.5607v21.5h124.7v-21.5h-19.5607l-0.20425,-0.04085c-0.21715,-0.043 -21.84615,-4.25915 -42.58505,-4.25915M86,111.8c21.2033,0 43,4.3 43,4.3h21.5v25.8h-129v-25.8h21.5c0,0 21.7967,-4.3 43,-4.3z" fill="#c74343"></path><g><path d="M130.075,104.275h19.35v36.55h-19.35z" fill="#f78f8f"></path><path d="M148.35,105.35h-17.2v34.4h17.2v-34.4M150.5,103.2v38.7h-21.5v-38.7z" fill="#c74343"></path></g><g><path d="M22.575,104.275h19.35v36.55h-19.35z" fill="#f78f8f"></path><path d="M40.85,105.35h-17.2v34.4h17.2v-34.4M43,103.2v38.7h-21.5v-38.7z" fill="#c74343"></path>
                                                </g><path d="M116.1,30.1v8.6h-2.15v-8.6c0,-3.5475 -2.9025,-6.45 -6.45,-6.45h-43c-3.5475,0 -6.45,2.9025 -6.45,6.45v8.6h-2.15v-8.6c0,-4.74935 3.85065,-8.6 8.6,-8.6h43c4.74935,0 8.6,3.85065 8.6,8.6z" fill="#c74343"></path></g><path d="M0,172v-172h172v172z" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path><g stroke="none" strokeWidth="1" strokeLinejoin="miter"><path d="M39.775,123.625v-101.5875c0,-9.18695 7.47555,-16.6625 16.6625,-16.6625h59.125c9.18695,0 16.6625,7.47555 16.6625,16.6625v101.5875z" fill="#2ecc71"></path><path d="M115.5625,6.45c8.5957,0 15.5875,6.9918 15.5875,15.5875v100.5125h-90.3v-100.5125c0,-8.5957 6.9918,-15.5875 15.5875,-15.5875h59.125M115.5625,4.3h-59.125c-9.7954,0 -17.7375,7.9421 -17.7375,17.7375v102.6625h94.6v-102.6625c0,-9.7954 -7.9421,-17.7375 -17.7375,-17.7375z" fill="#000000"></path><path d="M107.5,129h-43c-4.73,0 -8.6,-3.87 -8.6,-8.6v-90.3c0,-4.73 3.87,-8.6 8.6,-8.6h43c4.73,0 8.6,3.87 8.6,8.6v90.3c0,4.73 -3.87,8.6 -8.6,8.6z" fill="#2ecc71"></path><path d="M22.575,166.625v-65.575c0,-2.96485 2.4123,-5.375 5.375,-5.375h8.6c2.9627,0 5.375,2.41015 5.375,5.375v65.575z" fill="#333333"></path><path d="M36.55,96.75c2.37145,0 4.3,1.92855 4.3,4.3v64.5h-17.2v-64.5c0,-2.37145 1.92855,-4.3 4.3,-4.3h8.6M36.55,94.6h-8.6c-3.56255,0 -6.45,2.88745 -6.45,6.45v66.65h21.5v-66.65c0,-3.56255 -2.88745,-6.45 -6.45,-6.45z" fill="#000000"></path><path d="M130.075,166.625v-65.575c0,-2.96485 2.4123,-5.375 5.375,-5.375h8.6c2.9627,0 5.375,2.41015 5.375,5.375v65.575z" fill="#333333"></path><path d="M144.05,96.75c2.37145,0 4.3,1.92855 4.3,4.3v64.5h-17.2v-64.5c0,-2.37145 1.92855,-4.3 4.3,-4.3h8.6M144.05,94.6h-8.6c-3.56255,0 -6.45,2.88745 -6.45,6.45v66.65h21.5v-66.65c0,-3.56255 -2.88745,-6.45 -6.45,-6.45z" fill="#000000"></path>
                                                    <path d="M22.575,140.825v-23.65h20.425c0.4257,-0.06235 22.1493,-4.3 43,-4.3c20.8507,0 42.5743,4.23765 42.79145,4.2785l20.63355,0.0215v23.65z" fill="#2ecc71"></path><path d="M86,113.95c20.7389,0 42.3679,4.21615 42.58505,4.25915l0.20425,0.04085h0.2107h19.35v21.5h-124.7v-21.5h19.35h0.2107l0.2064,-0.04085c0.215,-0.043 21.844,-4.25915 42.5829,-4.25915M86,111.8c-21.2033,0 -43,4.3 -43,4.3h-21.5v25.8h129v-25.8h-21.5c0,0 -21.7967,-4.3 -43,-4.3z" fill="#000000"></path><g><path d="M130.075,104.275h19.35v36.55h-19.35z" fill="#2ecc71"></path><path d="M148.35,105.35v34.4h-17.2v-34.4h17.2M150.5,103.2h-21.5v38.7h21.5v-38.7z" fill="#000000"></path></g><g><path d="M22.575,104.275h19.35v36.55h-19.35z" fill="#2ecc71"></path><path d="M40.85,105.35v34.4h-17.2v-34.4h17.2M43,103.2h-21.5v38.7h21.5v-38.7z" fill="#000000"></path></g><path d="M107.5,21.5h-43c-4.74935,0 -8.6,3.85065 -8.6,8.6v8.6h2.15v-8.6c0,-3.5475 2.9025,-6.45 6.45,-6.45h43c3.5475,0 6.45,2.9025 6.45,6.45v8.6h2.15v-8.6c0,-4.74935 -3.85065,-8.6 -8.6,-8.6z" fill="#000000"></path></g>
                                                <path d="" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path><path d="" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path><path d="" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path></g></g></svg>
                                    : <svg className='takenSeat' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="40" height="40"
                                        viewBox="0 0 172 172"
                                    ><g transform="translate(4.73,4.73) scale(0.945,0.945)"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="none" strokeLinecap="butt" strokeLinejoin="none" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                        <g stroke="#ffffff" strokeWidth="10" strokeLinejoin="round"><path d="M39.775,123.625v-101.5875c0,-9.18695 7.47555,-16.6625 16.6625,-16.6625h59.125c9.18695,0 16.6625,7.47555 16.6625,16.6625v101.5875z" fill="#f78f8f"></path>
                                            <path d="M115.5625,6.45h-59.125c-8.5957,0 -15.5875,6.9918 -15.5875,15.5875v100.5125h90.3v-100.5125c0,-8.5957 -6.9918,-15.5875 -15.5875,-15.5875M115.5625,4.3c9.7954,0 17.7375,7.9421 17.7375,17.7375v102.6625h-94.6v-102.6625c0,-9.7954 7.9421,-17.7375 17.7375,-17.7375z" fill="#c74343"></path>
                                            <path d="M107.5,129h-43c-4.73,0 -8.6,-3.87 -8.6,-8.6v-90.3c0,-4.73 3.87,-8.6 8.6,-8.6h43c4.73,0 8.6,3.87 8.6,8.6v90.3c0,4.73 -3.87,8.6 -8.6,8.6z" fill="#ea7575"></path><path d="M22.575,166.625v-65.575c0,-2.96485 2.4123,-5.375 5.375,-5.375h8.6c2.9627,0 5.375,2.41015 5.375,5.375v65.575z" fill="#f5ce85"></path>
                                            <path d="M36.55,96.75h-8.6c-2.37145,0 -4.3,1.92855 -4.3,4.3v64.5h17.2v-64.5c0,-2.37145 -1.92855,-4.3 -4.3,-4.3M36.55,94.6c3.56255,0 6.45,2.88745 6.45,6.45v66.65h-21.5v-66.65c0,-3.56255 2.88745,-6.45 6.45,-6.45z" fill="#967a44"></path><path d="M130.075,166.625v-65.575c0,-2.96485 2.4123,-5.375 5.375,-5.375h8.6c2.9627,0 5.375,2.41015 5.375,5.375v65.575z" fill="#f5ce85"></path>
                                            <path d="M144.05,96.75h-8.6c-2.37145,0 -4.3,1.92855 -4.3,4.3v64.5h17.2v-64.5c0,-2.37145 -1.92855,-4.3 -4.3,-4.3M144.05,94.6c3.56255,0 6.45,2.88745 6.45,6.45v66.65h-21.5v-66.65c0,-3.56255 2.88745,-6.45 6.45,-6.45z" fill="#967a44"></path><path d="M22.575,140.825v-23.65h20.425c0.4257,-0.06235 22.1493,-4.3 43,-4.3c20.8507,0 42.5743,4.23765 42.79145,4.2785l20.63355,0.0215v23.65z" fill="#f78f8f"></path>
                                            <path d="M86,113.95c-20.7389,0 -42.3679,4.21615 -42.5829,4.25915l-0.2064,0.04085h-19.5607v21.5h124.7v-21.5h-19.5607l-0.20425,-0.04085c-0.21715,-0.043 -21.84615,-4.25915 -42.58505,-4.25915M86,111.8c21.2033,0 43,4.3 43,4.3h21.5v25.8h-129v-25.8h21.5c0,0 21.7967,-4.3 43,-4.3z" fill="#c74343"></path><g><path d="M130.075,104.275h19.35v36.55h-19.35z" fill="#f78f8f"></path><path d="M148.35,105.35h-17.2v34.4h17.2v-34.4M150.5,103.2v38.7h-21.5v-38.7z" fill="#c74343"></path>
                                            </g><g><path d="M22.575,104.275h19.35v36.55h-19.35z" fill="#f78f8f"></path><path d="M40.85,105.35h-17.2v34.4h17.2v-34.4M43,103.2v38.7h-21.5v-38.7z" fill="#c74343"></path></g><path d="M116.1,30.1v8.6h-2.15v-8.6c0,-3.5475 -2.9025,-6.45 -6.45,-6.45h-43c-3.5475,0 -6.45,2.9025 -6.45,6.45v8.6h-2.15v-8.6c0,-4.74935 3.85065,-8.6 8.6,-8.6h43c4.74935,0 8.6,3.85065 8.6,8.6z" fill="#c74343"></path></g>
                                        <path d="M0,172v-172h172v172z" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path><g stroke="none" strokeWidth="1" strokeLinejoin="miter"><path d="M39.775,123.625v-101.5875c0,-9.18695 7.47555,-16.6625 16.6625,-16.6625h59.125c9.18695,0 16.6625,7.47555 16.6625,16.6625v101.5875z" fill="#e74c3c"></path>
                                            <path d="M115.5625,6.45c8.5957,0 15.5875,6.9918 15.5875,15.5875v100.5125h-90.3v-100.5125c0,-8.5957 6.9918,-15.5875 15.5875,-15.5875h59.125M115.5625,4.3h-59.125c-9.7954,0 -17.7375,7.9421 -17.7375,17.7375v102.6625h94.6v-102.6625c0,-9.7954 -7.9421,-17.7375 -17.7375,-17.7375z" fill="#000000"></path><path d="M107.5,129h-43c-4.73,0 -8.6,-3.87 -8.6,-8.6v-90.3c0,-4.73 3.87,-8.6 8.6,-8.6h43c4.73,0 8.6,3.87 8.6,8.6v90.3c0,4.73 -3.87,8.6 -8.6,8.6z" fill="#e74c3c"></path>
                                            <path d="M22.575,166.625v-65.575c0,-2.96485 2.4123,-5.375 5.375,-5.375h8.6c2.9627,0 5.375,2.41015 5.375,5.375v65.575z" fill="#333333"></path><path d="M36.55,96.75c2.37145,0 4.3,1.92855 4.3,4.3v64.5h-17.2v-64.5c0,-2.37145 1.92855,-4.3 4.3,-4.3h8.6M36.55,94.6h-8.6c-3.56255,0 -6.45,2.88745 -6.45,6.45v66.65h21.5v-66.65c0,-3.56255 -2.88745,-6.45 -6.45,-6.45z" fill="#000000"></path>
                                            <path d="M130.075,166.625v-65.575c0,-2.96485 2.4123,-5.375 5.375,-5.375h8.6c2.9627,0 5.375,2.41015 5.375,5.375v65.575z" fill="#333333"></path><path d="M144.05,96.75c2.37145,0 4.3,1.92855 4.3,4.3v64.5h-17.2v-64.5c0,-2.37145 1.92855,-4.3 4.3,-4.3h8.6M144.05,94.6h-8.6c-3.56255,0 -6.45,2.88745 -6.45,6.45v66.65h21.5v-66.65c0,-3.56255 -2.88745,-6.45 -6.45,-6.45z" fill="#000000"></path>
                                            <path d="M22.575,140.825v-23.65h20.425c0.4257,-0.06235 22.1493,-4.3 43,-4.3c20.8507,0 42.5743,4.23765 42.79145,4.2785l20.63355,0.0215v23.65z" fill="#e74c3c"></path><path d="M86,113.95c20.7389,0 42.3679,4.21615 42.58505,4.25915l0.20425,0.04085h0.2107h19.35v21.5h-124.7v-21.5h19.35h0.2107l0.2064,-0.04085c0.215,-0.043 21.844,-4.25915 42.5829,-4.25915M86,111.8c-21.2033,0 -43,4.3 -43,4.3h-21.5v25.8h129v-25.8h-21.5c0,0 -21.7967,-4.3 -43,-4.3z" fill="#000000"></path>
                                            <g><path d="M130.075,104.275h19.35v36.55h-19.35z" fill="#e74c3c"></path><path d="M148.35,105.35v34.4h-17.2v-34.4h17.2M150.5,103.2h-21.5v38.7h21.5v-38.7z" fill="#000000"></path></g><g><path d="M22.575,104.275h19.35v36.55h-19.35z" fill="#e74c3c"></path><path d="M40.85,105.35v34.4h-17.2v-34.4h17.2M43,103.2h-21.5v38.7h21.5v-38.7z" fill="#000000"></path></g>
                                            <path d="M107.5,21.5h-43c-4.74935,0 -8.6,3.85065 -8.6,8.6v8.6h2.15v-8.6c0,-3.5475 2.9025,-6.45 6.45,-6.45h43c3.5475,0 6.45,2.9025 6.45,6.45v8.6h2.15v-8.6c0,-4.74935 -3.85065,-8.6 -8.6,-8.6z" fill="#000000"></path></g><path d="" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path><path d="" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path><path d="" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path></g></g></svg>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowSeats
