/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingView from '../LandingView/LandingView';
import GetDoctor from '../Doctors/doctor';
import Doctors from '../Doctors/doctors';
import AllDoctors from '../Doctors/allDoctors';
import Specializations from '../Specialization/Specialization';
import Appointments from '../Appointments/Appointments';
import Profile from '../Profile/Profile';

const MainContainer = () => {
  const navigate = useNavigate();
  const isSignedIn = useSelector(
    (state) => state.usersReducer.currentUser.isSignedIn,
  );

  useEffect(() => {
    !isSignedIn ? navigate('/') : null;
  }, [isSignedIn]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingView />} />
        <Route path="doctors" element={<AllDoctors />} />
        <Route path="doctors/:docID" element={<GetDoctor />} />
        <Route path="specializations/:specId" element={<Doctors />} />
        <Route path="specializations" element={<Specializations />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default MainContainer;
