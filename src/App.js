import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import About from './page/about';
import Portfolio from './page/portfolio';
import Contact from './page/contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Footer />
          <Route path="/" component={About} />
          <Route path="/" component={Contact} />
          <Route path="/" component={Portfolio} />    
        <Footer />
      </div>
    </Router>
  );
}

export default App;
