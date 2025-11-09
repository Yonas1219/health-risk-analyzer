import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";
import InputForm from "./pages/InputForm";
import Processing from "./pages/Processing";
import Results from "./pages/Results";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import StyleGuide from "./pages/StyleGuide";
import PageTransition from "./components/PageTransition";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Landing />
            </PageTransition>
          }
        />
        <Route
          path="/input"
          element={
            <PageTransition>
              <InputForm />
            </PageTransition>
          }
        />
        <Route
          path="/processing"
          element={
            <PageTransition>
              <Processing />
            </PageTransition>
          }
        />
        <Route
          path="/results"
          element={
            <PageTransition>
              <Results />
            </PageTransition>
          }
        />
        <Route
          path="/testimonials"
          element={
            <PageTransition>
              <Testimonials />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/resources"
          element={
            <PageTransition>
              <Resources />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/style-guide"
          element={
            <PageTransition>
              <StyleGuide />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
