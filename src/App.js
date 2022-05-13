import { Routes, Route } from 'react-router-dom';
import SignInForm from './components/authPages/SignInForm';
import SignUpForm from './components/authPages/SignUpForm';
import LandingView from './components/LandingView/LandingView';
import SideNav from './components/SideNav/SideNav';

function App() {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="signin" element={<SignInForm />} />
        <Route path="signup" element={<SignUpForm />} />
      </Routes>
    </>
  );
}

export default App;
