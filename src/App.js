import { Routes, Route } from 'react-router-dom';
import LandingView from './components/LandingView/LandingView';
import SideNav from './components/SideNav/SideNav';
import SignInForm from './components/authPages/SignInForm';
import SignUpForm from './components/authPages/SignUpForm';
import Specializations from './components/Specialization/Specialization';

function App() {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="signin" element={<SignInForm />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="specializations" element={<Specializations />} />
      </Routes>
    </>
  );
}

export default App;
