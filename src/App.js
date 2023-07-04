import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Layout from "./layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route exact path="/" component={About} /> {/* About Me as the landing page */}
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;