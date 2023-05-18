import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className='fixed-top'>
      <Container>
        <Navbar.Brand href="#home">STO-Ditailen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> <Link to="/"> Главная </Link> </Nav.Link>
            <Nav.Link href="#link"> <Link to="./Stet/Record"> Записаться </Link> </Nav.Link>
            <NavDropdown title="Услуги" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> <Link to="./Stet/Usual">Обычная мойка</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <Link to="./Stet/Scleaner">Мойка + пылесос</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> <Link to="./Stet/Regular">Наненесение воска</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> <Link to="./Stet/Complex">Комплексная мойка</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> <Link to="./Stet/Ditaling">Детайлинг</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                тел:+7(960)-015-01-50
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant='primary' className='mr-2'>   Логин   </Button>
            <Button variant='primary'>  Sign out   </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;