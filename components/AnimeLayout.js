import React from "react";
import { Table, Row, Col, Image, ButtonGroup, Button } from "react-bootstrap";
import Link from "next/link";

const AnimeLayout = ({ animes, title, onPageChange, currentPage }) => {
  if (!animes || !animes.data) {
    return <div>No data available</div>;
  }

  function getMonthName(monthNumber) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return monthNames[monthNumber - 1] || "";
  }

  return (
    <div>
      <h3>{title}</h3>
      <Table bordered>
        <thead>
          <tr>
            <th className="bg-secondary text-light">Rank</th>
            <th className="bg-secondary text-light">Title</th>
            <th className="bg-secondary text-light">Score</th>
          </tr>
        </thead>
        <tbody>
          {animes.data.map((anime) => (
            <tr key={anime.mal_id}>
              <td>{anime.rank}</td>
              <td>
                <Row>
                  <Col md={2}>
                    <Image
                      src={anime.images.jpg.small_image_url}
                      alt={anime.title}
                      
                    />
                  </Col>
                  <Col md={9}>
                    <Link href={`/animeDetail/${anime.mal_id}`} passHref>
                      {anime.title}
                    </Link>
                    <Row mid={1}>
                      {anime.type} ({anime.episodes} eps)
                    </Row>
                    <Row mid={1}>
                      {getMonthName(anime.aired.prop.from.month)}{" "}
                      {anime.aired.prop.from.year} -{" "}
                      {getMonthName(anime.aired.prop.to.month)}{" "}
                      {anime.aired.prop.to.year}
                    </Row>
                  </Col>
                </Row>
              </td>
              <td>{anime.score ? `${anime.score}` : "N/A"}&#9733;</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonGroup>
        <Button
          variant="secondary"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          variant="secondary"
          disabled={currentPage === 1042}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default AnimeLayout;
