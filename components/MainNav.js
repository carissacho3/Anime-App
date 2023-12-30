import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";

const MainNav = ({ onClickPage }) => {
  return (
    <>
      <Navbar fixed="top" expand="lg" className="bg-success">
        <Container fluid>
          <Navbar.Brand>All Animes</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Link href="/" passHref legacyBehavior>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Anime" id="anime-dropdown">
                <Link href="/AllAnime" passHref legacyBehavior>
                  <NavDropdown.Item onClick={onClickPage}>
                    {" "}
                    All Anime
                  </NavDropdown.Item>
                </Link>

                <Link href="/AiringAnime" passHref legacyBehavior>
                  <NavDropdown.Item onClick={onClickPage}>
                    Top Airing
                  </NavDropdown.Item>
                </Link>
                <Link href="/UpcomingAnime" passHref legacyBehavior>
                  <NavDropdown.Item onClick={onClickPage}>
                    Top Upcoming
                  </NavDropdown.Item>
                </Link>
                <Link href="/TvSeriesAnime" passHref legacyBehavior>
                  <NavDropdown.Item onClick={onClickPage}>
                    Top Tv Series
                  </NavDropdown.Item>
                </Link>
                <Link href="/MovieAnime" passHref legacyBehavior>
                  <NavDropdown.Item onClick={onClickPage}>
                    Top Movies
                  </NavDropdown.Item>
                </Link>
                <Link href="/OvaAnime" passHref legacyBehavior>
                  <NavDropdown.Item onClick={onClickPage}>
                    Top OVAs
                  </NavDropdown.Item>
                </Link>
                <Link href="/OnaAnime" passHref legacyBehavior>
                  <NavDropdown.Item onClick={onClickPage}>
                    Top ONAs
                  </NavDropdown.Item>
                </Link>
                <Link href="/SpecialAnime" passHref legacyBehavior>
                  <NavDropdown.Item onClick={onClickPage}>
                    Top Specials
                  </NavDropdown.Item>
                </Link>
                <Link href="/PopularAnime" passHref legacyBehavior>
                  <NavDropdown.Item onClick={onClickPage}>
                    Most Popular
                  </NavDropdown.Item>
                </Link>
                <Link href="/FavoriteAnime" passHref legacyBehavior>
                  <NavDropdown.Item onClick={onClickPage}>
                    Most Favorited
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>

              <Link href="" passHref legacyBehavior>
                <Nav.Link>Credit</Nav.Link>
              </Link>
              <Link href="" passHref legacyBehavior>
                <Nav.Link>Contact me</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
};

export default MainNav;
