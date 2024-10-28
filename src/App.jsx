import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
