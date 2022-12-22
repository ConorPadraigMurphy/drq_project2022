import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { CurrentJobs } from './components/CurrentJobs';
import { AddJob } from './components/AddJob';
// import { UpdateJob } from './components/CurrentJobs';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Mechanics Journal</Navbar.Brand>
              <Nav className="me-auto">
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Nav.Link href="/CurrentJobs">| Current Jobs |</Nav.Link>
                <Nav.Link href="/AddJob">| Add Job |</Nav.Link>
                <Nav.Link href="/UpdateJobs">| Update Job |</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Content></Content>}></Route>
            <Route path='/CurrentJobs' element={<CurrentJobs></CurrentJobs>}></Route>
            <Route path='/AddJob' element={<AddJob></AddJob>}></Route>
          </Routes>
          {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
