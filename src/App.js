import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage"
import WorkPlaces from './Pages/WorkPlaces/WorkPlaces';
import Blog from './Pages/Blog/Blog';
import AddBlog from './Pages/AddBlog/AddBlog';
import Contact from './Pages/Contact/Contact';
import Member from './Pages/Member/Member';
import Call from './Pages/Call/Call';
import Privacy from './Pages/privacyPolicy/Privacy';
import About from './Pages/About/About';
import Testimonial from './Pages/Testimonial/Testimonial';
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
            <Route path="/8176b96f25d06067bec0d88d69e2aa721fe92bf61b17b459eb17beae11aca1b3" element={<Member/>}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path='/t&c' element={<Privacy />} />
            <Route path='/About' element={<About />} />
            <Route path='/testimonial' element={<Testimonial />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;