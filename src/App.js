import React from 'react';
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/NavbarComponent";
import Footer from "./Components/FooterComponent";
import Home from "./Pages/Home";
import DetailSurat from "./Pages/DetailSurat.jsx";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <br />
        <Container>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/surat/:id" component={DetailSurat} />
            </Switch>
          </main>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
