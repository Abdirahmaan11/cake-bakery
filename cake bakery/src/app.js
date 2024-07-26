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
                <Nav.Link href="#cake">Cake</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#content">Content</Nav.Link>
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

      <main className='Container px-5 my-5'>
         <h6 id='home'></h6>
        <h1 className='text-center my-4'>Welcome to our Cake Bakery Shope!</h1>
        <div className='Container' >
          <div className='row'>

            <div className='col-md-3'>
              <div class="card">
                <img src="https://images.pexels.com/photos/1179002/pexels-photo-1179002.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cocunet Cake</h5>
                  <p class="card-text">Cocunet Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Order Now </a>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div class="card">
                <img src="https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">rope Cake</h5>
                  <p class="card-text">rope Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Order Now </a>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div class="card">
                <img src="https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Chocolate Cake</h5>
                  <p class="card-text">Chocolate Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Order Now </a>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div class="card">
                <img src="https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Strewpery Cake</h5>
                  <p class="card-text">Strewpery Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Order Now </a>
                </div>
              </div>
            </div>



          </div>
           <br></br>
           <br></br>
           <br></br>
        </div>
        <div className='Container px-5 my-5' >
          <h6 id='cake'></h6>
          <h1 className='text-center my-4'> Cakes</h1>
          <p className='text-center'>The cakes we offer are defferent types which are include low size, medium size and king size. you can get any type or size that you deseir 
          Some of the cakes defferent types which are include low size, medium size and king size. you can get any  we have for are here.
          which are include low size, medium size and king size. you can get any type or size that you deseir any you like too will be here 
          Some of the cakes defferent types which are include low size, medium size and king size. you can get any  we have for are here </p>
          
          <div className='row'>

          <div className='col-md-3 my-5'>
              <div class="card">
                <img src="https://images.pexels.com/photos/1027811/pexels-photo-1027811.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Nute Cake</h5>
                  <p class="card-text">Nute Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary"> $69.99 Order Now </a>
                </div>
              </div>
            </div>

            <div className='col-md-3 my-5'>
              <div class="card">
                <img src="https://images.pexels.com/photos/1359294/pexels-photo-1359294.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Birthday Cake</h5>
                  <p class="card-text">Birthday Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">$89.99 Order Now </a>
                </div>
              </div>
            </div>

            <div className='col-md-3 my-5'>
              <div class="card">
                <img src="https://images.pexels.com/photos/2337818/pexels-photo-2337818.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Wedding Cake</h5>
                  <p class="card-text">Wedding Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">$59.99 Order Now </a>
                </div>
              </div>
            </div>

            <div className='col-md-3 my-5'>
              <div class="card">
                <img src="https://images.pexels.com/photos/1835765/pexels-photo-1835765.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Celeberating Cake</h5>
                  <p class="card-text">Celeberating Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">$79.99 Order Now </a>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div class="card">
                <img src="https://images.pexels.com/photos/1179002/pexels-photo-1179002.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cocunet Cake</h5>
                  <p class="card-text">Cocunet Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">$99.99 Order Now </a>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div class="card">
                <img src="https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">rope Cake</h5>
                  <p class="card-text">rope Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">$49.99 Order Now </a>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div class="card">
                <img src="https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Chocolate Cake</h5>
                  <p class="card-text">Chocolate Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">$79.99 Order Now </a>
                </div>
              </div>
            </div>

            <div className='col-md-3'>
              <div class="card">
                <img src="https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Strewpery Cake</h5>
                  <p class="card-text">Strewpery Cake is so delicouse text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">$99.99 Order Now </a>
                </div>
              </div>
            </div>



          </div>

        </div>
          <br></br>
          <br></br>
          <br></br>
        <div className='container my-5 px-5'>
        <h6 id='about'></h6>
        <h1 className='text-center my-4'> Who Are We?</h1>
          <p className='text-center '> We are The Best Cake Bakery iN The World The cakes we offer are defferent types which are include low size, medium size and king size. you can get any type or size that you deseir 
          Some of the cakes defferent types which are include low size, medium size and king size. you can get any  we have for are here.
          which are include low size, medium size and king size. you can get any type or size that you deseir any you like too will be here 
          Some of the cakes defferent types which are include low size, medium size and king size. The Best Cake Bakery iN The World The cakes we offer a you can get any  we have for are here </p>

          <Container>
      <Row>
        <Col xs={6} md={6}>
          <Image src="https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=600" rounded />
        </Col>
        <Col xs={6} md={6}>
          <Image src="https://images.pexels.com/photos/1179002/pexels-photo-1179002.jpeg?auto=compress&cs=tinysrgb&w=600" rounded />
        </Col>
      </Row>
    </Container>
        </div>
        <br></br>
        <div className='container text-center my-5 px-5'>
        <h6 id='content'></h6>
        <h1 className=' my-4'> Content Us</h1>

          <p> Phone No:   +252614412610  <br></br>
              Email:      Cakeb1@gmail.com<br></br>
              Adress:      KM4 Street, Banaadir, Somalia<br></br>
              WhatsApp:      +252616082853<br></br>
          </p>

        </div>
      </main>

      <footer >
        <Container className='bg-primary text-center text-white my-4  '>
        <Row>
          <Col> <h5> @ Copy right reseverd Abdirahmaan ,  Hussein,   Ali </h5></Col>
        </Row>
      </Container>
      </footer>
    </div>
  );
}

export default App;
