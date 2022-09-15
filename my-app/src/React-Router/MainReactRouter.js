import BlogsPage from './BlogsPage';
import Contact from './Contact';
import Home from './Home';
import ERROR from './ERROR';
import Blog from './Blog';
import User from './User';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBarDesign from '../NavBarDesigning/NavBarDesign';
const MainReactRouter = () => {
  return (
    <div>
      <NavBarDesign/>
     <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blogspot" element={<BlogsPage/>}/>
          <Route path="/blog/:title" element={<Blog/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="*" element={<ERROR/>}/>
       </Routes>
    </div>
  )
}

export default MainReactRouter
