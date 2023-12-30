import {
  Row,
  Col,
  Image,
  Card,
  CardBody,
  Table,
  ListGroup,
} from "react-bootstrap";
import useSWR from "swr";
import Link from "next/link";

const AnimeDetail = ({ detail }) => {

  const { data: video, error: videoData } = useSWR(
    `https://api.jikan.moe/v4/anime/${detail.data.mal_id}/videos`
  );
  const { data: characters, error: characterData } = useSWR(
    `https://api.jikan.moe/v4/anime/${detail.data.mal_id}/characters`
  );
  const { data: staff, error: staffData } = useSWR(
    `https://api.jikan.moe/v4/anime/${detail.data.mal_id}/staff`
  );
  if (videoData || characterData || staffData) {
    return <div>Error loading</div>;
  }

  if (!video || !characters || !staff || !detail) {
    return <div>loading</div>;
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
      <br></br>
      <h5>{detail.data.title}</h5>
      <h6>{detail.data.title_english}</h6>
      <hr></hr>
      <Row>
        <Col md={3}>
          <Image
            src={detail.data.images.jpg.image_url}
            alt={detail.data.title}
            fluid
          />
          <br></br>
          <br></br>
          <h6>
            <b>Alternative Titles</b>
          </h6>
          <hr></hr>
          {detail.data.title_synonyms.length > 0 && (
            <p>
              <b>Synonyms:</b>{" "}
              {detail.data.title_synonyms.includes(",")
                ? detail.data.title_synonyms
                : detail.data.title_synonyms.join(", ")}
            </p>
          )}

          {detail.data.title_japanese.length > 0 && (
            <p>
              <b>Japanese:</b> {detail.data.title_japanese}
            </p>
          )}

          {detail.data.title_english.length > 0 && (
            <p>
              <b>English:</b> {detail.data.title_english}
            </p>
          )}

          <br></br>
          <h6>
            <b>Information</b>
          </h6>
          <hr></hr>
          <p>
            <b>Type:</b> {detail.data.type}
          </p>

          <p>
            <b>Episode:</b>{" "}
            {detail.data.episodes ? detail.data.episodes : "Unknown"}
          </p>

          <p>
            <b>Status:</b>{" "}
            {detail.data.status ? detail.data.status : "Not yet aired"}
          </p>

          <p>
            <b>Aired:</b>{" "}
            {detail.data.airing ? (
              <>
                {`${getMonthName(detail.data.aired.prop.from.month)} ${
                  detail.data.aired.prop.from.day
                }, ${detail.data.aired.prop.from.year}`}
                {detail.data.aired.prop.to.month ? (
                  <>
                    {` to ${getMonthName(detail.data.aired.prop.to.month)} ${
                      detail.data.aired.prop.to.day
                    }, ${detail.data.aired.prop.to.year}`}
                  </>
                ) : (
                  " to ?"
                )}
              </>
            ) : (
              "Not available"
            )}
          </p>

          <p>
            <b>Premiered:</b>{" "}
            {detail.data.season
              ? `${detail.data.season} ${detail.data.year}`
              : "?"}
          </p>

          <p>
            <b>Broadcast:</b>{" "}
            {detail.data.airing
              ? `${detail.data.broadcast.day} at ${detail.data.broadcast.time} (JST)`
              : "Unknown"}
          </p>

          <p>
            <b>Producers:</b>{" "}
            {detail.data.producers && detail.data.producers.length > 0
              ? detail.data.producers.map((producer, index) => (
                  <span key={producer.mal_id}>
                    {index > 0 && ", "}
                    {producer.name}
                  </span>
                ))
              : "Unknown"}
          </p>
          <p>
            <b>Licensors:</b>{" "}
            {detail.data.licensors && detail.data.licensors.length > 0
              ? detail.data.licensors.map((licensor, index) => (
                  <span key={licensor.mal_id}>
                    {index > 0 && ", "}
                    {licensor.name}
                  </span>
                ))
              : "None found"}
          </p>
          <p>
            <b>Studios:</b>{" "}
            {detail.data.studios && detail.data.studios.length > 0
              ? detail.data.studios.map((studio, index) => (
                  <span key={studio.mal_id}>
                    {index > 0 && ", "}
                    {studio.name}
                  </span>
                ))
              : "None found"}
          </p>

          <p>
            <b>Source:</b>{" "}
            {detail.data.source ? detail.data.source : "No source"}
          </p>

          <p>
            <b>Genres:</b>{" "}
            {detail.data.genres && detail.data.genres.length > 0
              ? detail.data.genres.map((genre, index) => (
                  <span key={genre.mal_id}>
                    {index > 0 && ", "}
                    {genre.name}
                  </span>
                ))
              : "No genre"}
          </p>

          <p>
            <b>Themes:</b>{" "}
            {detail.data.themes && detail.data.themes.length > 0
              ? detail.data.themes.map((theme, index) => (
                  <span key={theme.mal_id}>
                    {index > 0 && ", "}
                    {theme.name}
                  </span>
                ))
              : "No themes"}
          </p>

          <p>
            <b>Demographics:</b>{" "}
            {detail.data.demographics && detail.data.demographics.length > 0
              ? detail.data.demographics.map((demographic, index) => (
                  <span key={demographic.mal_id}>
                    {index > 0 && ", "}
                    {demographic.name}
                  </span>
                ))
              : "No demographic"}
          </p>

          <p>
            <b>Duration:</b>{" "}
            {detail.data.duration ? detail.data.duration : "Unknown"}
          </p>

          <p>
            <b>Rating:</b> {detail.data.rating ? detail.data.rating : "Unknown"}
          </p>

          <br></br>

          <h6>
            <b>Statistics</b>
          </h6>
          <hr></hr>

          <p>
            <b>Score:</b> {detail.data.score ? detail.data.score : "N/A"}
          </p>

          <p>
            <b>Rank:</b> {detail.data.rank ? detail.data.rank : "N/A"}
          </p>

          <p>
            <b>Popularity:</b>{" "}
            {detail.data.popularity ? detail.data.popularity : "N/A"}
          </p>
        </Col>
        <Col>
          <Row>
            <Col>
              {/* 
                 <Link
                            href={`/animeDetail/${animePop.mal_id}`}
                            passHref
                          >
                            Details
                          </Link>
                           <Link
                            href={`/}`}
                            passHref
                          >
                            Characters and Staff
                          </Link>
                <Link
                            href={`/}`}
                            passHref
                          >
                            Episodes
                          </Link>
               */}
            </Col>
            <br></br>
          </Row>
          <Row></Row>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Row>
                    <Col md={4}>
                      <b>Score </b>{" "}
                      {detail.data.score ? `# ${detail.data.score}` : "N/A"}
                    </Col>
                    <Col md={3}>
                      <b>Rank</b>{" "}
                      {detail.data.rank ? `# ${detail.data.rank}` : "N/A"}
                    </Col>
                    <Col md={5}>
                      <b>Popularity</b>{" "}
                      {detail.data.rank ? detail.data.popularity : "N/A"}
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            {video.data.promo.length !== 0 && (
              <Col>
                <iframe
                  title={video.data.title}
                  width="100%"
                  height="300"
                  src={video.data.promo[0].trailer.embed_url}
                  allowFullScreen
                ></iframe>
              </Col>
            )}
          </Row>
          <Row md={1}>
            <Col>
              <br></br>
              <h6>
                <b>Synopsis</b>
              </h6>
              <hr></hr>
              {detail.data.background ? (
                <p>{detail.data.synopsis}</p>
              ) : (
                <p>No synopsis information available</p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <br></br>
              <h6>
                <b>Background</b>
              </h6>
              <hr></hr>
              {detail.data.background ? (
                <p>{detail.data.background}</p>
              ) : (
                <p>No background information available</p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <br></br>
              <h6>
                <b>Related Anime</b>
              </h6>
              <hr></hr>
              {detail.data.relations.map((anime) => (
                <Row key={anime.mal_id}>
                  <Col md={2}>
                    <p>{anime.relation}:</p>
                  </Col>
                  <Col>
                    {anime.entry.map((e, index) => {
                      if (anime.relation === "Adaptation") {
                        return (
                          <>
                            <span key={e.mal_id}>{e.name}</span>
                            <br></br>
                          </>
                        );
                      } else if (
                        anime.relation === "Prequel" ||
                        anime.relation === "Sequel" ||
                        anime.relation === "Spin-off" ||
                        anime.relation === "Side story" ||
                        anime.relation === "Character" ||
                        anime.relation === "Summary" ||
                        anime.relation === "Alternative version" ||
                        anime.relation === "Other"
                      ) {
                        return e.length > 1 ? (
                          <>
                            <Link
                              key={e.mal_id}
                              href={`/animeDetail/${e.mal_id}`}
                            >
                              {e.name}
                            </Link>
                          </>
                        ) : (
                          <Link
                            key={e.mal_id}
                            href={`/animeDetail/${e.mal_id}`}
                          >
                            {e.name}
                            {index < anime.entry.length - 1 && <>, </>}
                          </Link>
                        );
                      }
                    })}
                  </Col>
                  <hr></hr>
                </Row>
              ))}
            </Col>
          </Row>
          <Row>
            <Col>
              <br></br>
              <h6>
                <b>Characters and Voice Actors</b>
              </h6>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Table>
              <tbody>
                <tr>
                  <td style={{ borderRight: "1px solid #000" }}>
                    {characters.data.slice(0, 5).map((character) => (
                      <>
                        <tr key={character.mal_id}>
                          <td>
                            <Image
                              src={character.character.images.webp.image_url}
                              alt={character.character.name}
                              style={{ width: "42px", height: "62px" }}
                            />
                          </td>
                          <td style={{ padding: "0 10px" }}>
                            {character.character.name} <br></br>
                            {character.role}
                          </td>

                          {character.voice_actors.some(
                            (voiceActor) => voiceActor.language === "Japanese"
                          ) && (
                            <td>
                              {
                                character.voice_actors.find(
                                  (voiceActor) =>
                                    voiceActor.language === "Japanese"
                                ).person.name
                              }
                              <br />
                              {
                                character.voice_actors.find(
                                  (voiceActor) =>
                                    voiceActor.language === "Japanese"
                                ).language
                              }
                            </td>
                          )}

                          <td style={{ padding: "0 10px" }}>
                            {character.voice_actors.some(
                              (voiceActor) => voiceActor.language === "Japanese"
                            ) && (
                              <Image
                                src={
                                  character.voice_actors.find(
                                    (voiceActor) =>
                                      voiceActor.language === "Japanese"
                                  ).person.images.jpg.image_url
                                }
                                alt={
                                  character.voice_actors.find(
                                    (voiceActor) =>
                                      voiceActor.language === "Japanese"
                                  ).person.name
                                }
                                style={{ width: "42px", height: "62px" }}
                                className="mb-2"
                              />
                            )}
                          </td>
                        </tr>
                      </>
                    ))}
                  </td>
                  <td>
                    {characters.data.slice(6, 11).map((character) => (
                      <>
                        <tr key={character.mal_id}>
                          <td>
                            <Image
                              src={character.character.images.webp.image_url}
                              alt={character.character.name}
                              style={{ width: "42px", height: "62px" }}
                            />
                          </td>
                          <td style={{ padding: "0 10px" }}>
                            {character.character.name} <br></br>
                            {character.role}
                          </td>

                          {character.voice_actors.some(
                            (voiceActor) => voiceActor.language === "Japanese"
                          ) && (
                            <td>
                              {
                                character.voice_actors.find(
                                  (voiceActor) =>
                                    voiceActor.language === "Japanese"
                                ).person.name
                              }
                              <br />
                              {
                                character.voice_actors.find(
                                  (voiceActor) =>
                                    voiceActor.language === "Japanese"
                                ).language
                              }
                            </td>
                          )}

                          <td style={{ padding: "0 10px" }}>
                            {character.voice_actors.some(
                              (voiceActor) => voiceActor.language === "Japanese"
                            ) && (
                              <Image
                                src={
                                  character.voice_actors.find(
                                    (voiceActor) =>
                                      voiceActor.language === "Japanese"
                                  ).person.images.jpg.image_url
                                }
                                alt={
                                  character.voice_actors.find(
                                    (voiceActor) =>
                                      voiceActor.language === "Japanese"
                                  ).person.name
                                }
                                style={{ width: "42px", height: "62px" }}
                                className="mb-2"
                              />
                            )}
                          </td>
                        </tr>
                      </>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>

          <Row>
            <Col>
              <br></br>
              <h6>
                <b>Staff</b>
              </h6>
              <hr></hr>
            </Col>
          </Row>

          <Row>
            <Table>
              <tbody>
                <tr>
                  <td style={{ borderRight: "1px solid #000" }}>
                    {staff.data.slice(0, 2).map((staff) => {
                      return (
                        <Row key={staff.mal_id}>
                          <Col md={2}>
                            <Image
                              src={staff.person.images.jpg.image_url}
                              alt={staff.person.name}
                              style={{ width: "42px", height: "62px" }}
                              className="mb-2"
                            />
                          </Col>
                          <Col>
                            {staff.person.name} <br></br>
                            {staff.positions.length > 1 ? (
                              <p>{staff.positions.join(", ")}</p>
                            ) : (
                              <p>{staff.positions[0]}</p>
                            )}
                          </Col>
                        </Row>
                      );
                    })}
                  </td>

                  <td>
                    {staff.data.slice(3, 5).map((staff) => {
                      return (
                        <Row key={staff.mal_id}>
                          <Col md={2}>
                            <Image
                              src={staff.person.images.jpg.image_url}
                              alt={staff.person.name}
                              style={{ width: "42px", height: "62px" }}
                              className="mb-2"
                            />
                          </Col>
                          <Col>
                            {staff.person.name} <br></br>
                            {staff.positions.length > 1 ? (
                              <p>{staff.positions.join(", ")}</p>
                            ) : (
                              <p>{staff.positions[0]}</p>
                            )}
                          </Col>
                        </Row>
                      );
                    })}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row>
            <Col>
              <br></br>
              <h6>
                <b>Opening Theme</b>
              </h6>
              <hr></hr>
            </Col>
            <Col>
              <br></br>
              <h6>
                <b>Ending Theme</b>
              </h6>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>
              {detail.data.theme.openings.length > 0 ? (
                <ListGroup>
                  {detail.data.theme.openings.map((opening) => (
                    <ListGroup.Item key={opening.mal_id}>
                      <span className="list-number"></span> {opening}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>No opening</p>
              )}
            </Col>
            <Col>
              {detail.data.theme.endings.length > 0 ? (
                <ListGroup>
                  {detail.data.theme.endings.map((opening) => (
                    <ListGroup.Item key={opening.mal_id}>
                      <span className="list-number"></span> {opening}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>No Ending</p>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AnimeDetail;
