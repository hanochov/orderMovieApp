import Movies from "../Movies/Movies";
import Order from "../Order/Order";
import FavoritesAndHistory from "../FavoritesAndHistory/FavoritesAndHistory";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Route, Link } from "react-router-dom";

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Cinema Planet</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/movies">
                Movies
              </Nav.Link>
              <Nav.Link>Order tickets</Nav.Link>
              <Nav.Link as={Link} to="fav">
                Favorites And History
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/fav">
          <FavoritesAndHistory />
        </Route>
      </Container>
    </div>
  );
};

export default Navigation;
