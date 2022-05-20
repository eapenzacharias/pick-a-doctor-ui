import { Routes, Route } from 'react-router-dom';
import Doctors from './components/Doctors/doctors';
import LandingView from './components/LandingView/LandingView';
import SideNav from './components/SideNav/SideNav';
import SignInForm from './components/authPages/SignInForm';
import SignUpForm from './components/authPages/SignUpForm';
import Specializations from './components/Specialization/Specialization';
import Appointments from './components/Appointments/Appointments';
import './App.css';
import GetDoctor from './components/Doctors/doctor';
import AllDoctors from './components/Doctors/allDoctors';

function App() {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="signin" element={<SignInForm />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="specializations/:specId" element={<Doctors />} />
        <Route path="specializations" element={<Specializations />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="doctors/:docID" element={<GetDoctor />} />
        <Route path="doctors" element={<AllDoctors />} />
      </Routes>
    </>
  );
}

export default App;
