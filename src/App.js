import './App.css';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
   <div className='App'>
       <Router>
            <Routes>
                <Route  path="/" element={<Home/>}></Route>
                <Route  path="/Profile/:id" element={<Profile/>}></Route>
            </Routes>
       </Router>
   </div>
  );
}

export default App;
