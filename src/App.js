
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginUser from "./containers/loginuser/LoginUser";
import SignUP from "./containers/signup/SignUP";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<LoginUser/>}/>
        <Route path={'/signUp'} element={<SignUP/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
