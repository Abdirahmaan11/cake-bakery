import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Image, Card, Button,Row,Col } from 'react-bootstrap';
import Login from './Login';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home"> Cake Shope </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>
    <div className='Container px-5 my-4'>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://www.shutterstock.com/image-photo/delicious-birthday-cake-candle-on-260nw-1685164234.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://www.publicdomainpictures.net/pictures/540000/nahled/colorful-birthday-cake-1694792404bHP.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://t3.ftcdn.net/jpg/07/09/31/84/240_F_709318484_6xnReQZpRSYpB3yE7BpRoF779sOCJUos.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>

  );
}

export default App;
