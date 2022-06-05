import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Navbar from "~/components/navbar/Navbar";
import ScrollToTop from "~/components/shared/ScrollToTop";

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
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/business" element={<Business />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
