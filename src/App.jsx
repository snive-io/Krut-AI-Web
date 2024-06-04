import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import AddBlog from "./Pages/AddBlog/AddBlog";
import ToolsMobile from "./Pages/ToolsMobile/ToolsMobile";
import Tools from "./Pages/tools/Tools";
import BookADemo from "./Pages/BookADemo/BookADemo";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import { Login } from "./Pages/Login/LoginPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookademo" element={<BookADemo />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/mobiletools" element={<ToolsMobile />} />
        <Route path="/tools" element={<Tools/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
