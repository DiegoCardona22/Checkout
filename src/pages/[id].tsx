// @packages
import { useState, useEffect } from "react";
import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

// @scripts
import { CardItems } from "src/components/atoms/card/card-items";
import Events from "src/components/molecules/events";
import ActionButton from "src/components/atoms/action-button";

const ArtistasAvailabilityPage: NextPage = () => {
  const [artistInfo, setArtistInfo] = useState([] as any);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const cardInfoFilter = CardItems.filter((item) => item.id === id);
      setArtistInfo(cardInfoFilter as any);
    }
  }, [id]);

  return (
    <Container>
      <Row>
        <Col>{artistInfo[0] ? <h1>Events</h1> : <h1>{id}</h1>}</Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="my-4">
          {artistInfo[0]?.events?.map((item: any, index: number) => (
            <div key={index}>
              <Events
                events={artistInfo[0]?.events?.length}
                id={item.eventId}
                country={item.country}
                name={artistInfo[0]?.title}
                day={item.day}
                city={item.city}
                index={index}
                date={item.date}
                time={item.time}
              />
            </div>
          ))}
          {artistInfo[0]?.events === null && (
            <div>
              <h3>No hay eventos para este artista :(</h3>
              <ActionButton
                label="Volver"
                onClick={() => router.push("/")}
                className="w-100 rounded-0"
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ArtistasAvailabilityPage;
