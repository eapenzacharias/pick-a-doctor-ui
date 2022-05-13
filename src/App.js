import SignUpForm from './components/authPages/SignUpForm';
import SignInForm from './components/authPages/SignInForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SignUpForm />
      <SignInForm />
    </div>
  );
}

export default App;
