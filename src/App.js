import { Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer/MainContainer';
import SideNav from './components/SideNav/SideNav';
import SignInForm from './components/authPages/SignInForm';
import SignUpForm from './components/authPages/SignUpForm';
import './App.css';

function App() {
  return (
    <>
      <SideNav />
      <MainContainer />
      <Routes>
        <Route path="signin" element={<SignInForm />} />
        <Route path="signup" element={<SignUpForm />} />
      </Routes>
    </>
  );
}

export default App;
