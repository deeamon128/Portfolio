import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/aboutme">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contactme">
            <Contact />
          </Route>
          <Route path="/">
            <Home exact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
