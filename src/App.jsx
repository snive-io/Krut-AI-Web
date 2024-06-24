import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
const AddBlog = lazy(() => import("./Pages/AddBlog/AddBlog"));
import ToolsMobile from "./Pages/ToolsMobile/ToolsMobile";
import Tools from "./Pages/tools/Tools";
import BookADemo from "./Pages/BookADemo/BookADemo";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Help from "./Pages/Help/Help";
import AOS from "aos";
import "aos/dist/aos.css";
import EarlyAccess from "./Pages/BookADemo/EarlyAccess";

function App() {

  useEffect(() => {
    AOS.init({
      disable: window.innerWidth < 1024,
      duration: 700,
      easing: "ease-out-cubic",
      once: true
    });
  }, [])

  return (

    <>
      <Suspense
        fallback={ //loading spinner
          <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="w-36 text-white">
              Loading... Please wait
            </div>
          </div>

        }>
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
          <Route path="/tools" element={<Tools />} />
          <Route path="/help" element={<Help />} />
          <Route path="/early_access" element={<EarlyAccess />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
