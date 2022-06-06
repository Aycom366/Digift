import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Navbar from "~/components/navbar/Navbar";
import ScrollToTop from "~/components/shared/ScrollToTop";
import { AnimatePresence } from "framer-motion";

//pages
import Business from "~/pages/Business";
import Personal from "~/pages/Personal";
import Footer from "~/components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Personal />} />
            <Route path="/business" element={<Business />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
