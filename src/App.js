import './App.css';
import { Routes, Route } from "react-router-dom";
//import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage"
import WorkPlaces from './Pages/WorkPlaces/WorkPlaces';
import Blog from './Pages/Blog/Blog';
import AddBlog from './Pages/AddBlog/AddBlog';
//import Pblog from './Pages/Pblog/Pblog';
import Contact from './Pages/Contact/Contact';
import Member from './Pages/Member/Member';
import Call from './Pages/Call/Call';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Call />
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/workplaces" element={<WorkPlaces />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/AddBlog" element={<AddBlog />}/>
            <Route path="/Admin" element={<Member />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
