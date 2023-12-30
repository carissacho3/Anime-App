import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,Image
} from "react-bootstrap";
import Link from "next/link";
import useSWR from "swr";

export default function Home() {
  const { data: AnimesAiring, error: errorAiring } = useSWR(
    `https://api.jikan.moe/v4/top/anime?filter=airing&limit=5`
  );

  const { data: AnimesUpcoming, error: errorUpcoming } = useSWR(
    `https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=5`
  );

  const { data: AnimesPopularity, error: errorPopularity } = useSWR(
    `https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=5`
  );

  if (errorAiring || errorUpcoming || errorPopularity) {
    return <div>Error loading</div>;
  }

  if (!AnimesAiring || !AnimesUpcoming || !AnimesPopularity) {
    return <div>loading</div>;
  }

  return (
    <>
      <br></br>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>
                  <h2>Top Airing Anime</h2>
                </CardTitle>
                <Link href="/AiringAnime" passHref>
                  View More
                </Link>

                <br />
                <ListGroup>
                  {AnimesAiring.data.map((animeAiring, index) => (
                    <ListGroupItem key={animeAiring.mal_id}>
                      <Row>
                        <Col md={1}>
                          <span>{index + 1}</span>
                        </Col>
                        <Col md={2}>
                          <Image
                            src={animeAiring.images.jpg.small_image_url}
                            alt={animeAiring.title}
                            width={50}
                            height={75}
                          />
                        </Col>
                        <Col md={9}>
                          <Link
                            href={`/animeDetail/${animeAiring.mal_id}`}
                            passHref
                          >
                            {animeAiring.title}
                          </Link>
                          <div className="row-md-1">
                            {animeAiring.type}, {animeAiring.episodes} ep,
                            scored {animeAiring.score}
                          </div>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardBody>
                <CardTitle>
                  <h2>Upcoming Anime</h2>
                </CardTitle>
                <Link href="/UpcomingAnime" passHref>
                  View More
                </Link>
                <br />
                <ListGroup>
                  {AnimesUpcoming.data.map((animesUpcoming, index) => (
                    <ListGroupItem key={animesUpcoming.mal_id}>
                      <Row>
                        <Col md={1}>
                          <span>{index + 1}</span>
                        </Col>
                        <Col md={2}>
                          <Image
                            src={animesUpcoming.images.jpg.small_image_url}
                            alt={animesUpcoming.title}
                            width={50}
                            height={75}
                          />
                        </Col>
                        <Col md={9}>
                          <Link
                            href={`/animeDetail/${animesUpcoming.mal_id}`}
                            passHref
                          >
                            {animesUpcoming.title}
                          </Link>
                          <div className="row-md-1">
                            {animesUpcoming.type}, {animesUpcoming.episodes} ep,
                            scored {animesUpcoming.score}
                          </div>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardBody>
                <CardTitle>
                  <h2>Most Popular Anime</h2>
                </CardTitle>
                <Link href="/PopularAnime" passHref>
                  View More
                </Link>

                <br />
                <ListGroup>
                  {AnimesPopularity.data.map((animePop, index) => (
                    <ListGroupItem key={animePop.mal_id}>
                      <Row>
                        <Col md={1}>
                          <span>{index + 1}</span>
                        </Col>
                        <Col md={2}>
                          <Image
                            src={animePop.images.jpg.small_image_url}
                            alt={animePop.title}
                            width={50}
                            height={75}
                          />
                        </Col>
                        <Col md={9}>
                          <Link
                            href={`/animeDetail/${animePop.mal_id}`}
                            passHref
                          >
                            {animePop.title}
                          </Link>
                          <div className="row-md-1">
                            {animePop.type}, {animePop.episodes} ep, scored{" "}
                            {animePop.score}
                          </div>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
