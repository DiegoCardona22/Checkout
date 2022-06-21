// @packages
import { Container, Row, Col } from "react-bootstrap";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// @scripts
import ActionButton from "src/components/atoms/action-button";
import Events from "src/components/molecules/events";
import { CardItems } from "src/components/atoms/card/card-items";
import { config } from "src/config";

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
        <Col>{artistInfo[0] ? <h1>{config.text.events.events}</h1> : <h1>{id}</h1>}</Col>
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
              <h3>{config.text.events.noEvents}</h3>
              <ActionButton
                label="Back"
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
