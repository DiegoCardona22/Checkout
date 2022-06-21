// @packages
import classNames from "classnames";
import moment from "moment";
import { Card, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";

// @scripts
import ActionButton from "src/components/atoms/action-button";

// @styles
import classes from "./styles.module.scss";

type EventsProps = {
  city: string;
  country: string;
  date: string;
  day: string;
  events: number;
  id: string;
  index: number;
  name: string;
  time: string;
};

const Events = ({
  city,
  country,
  date,
  day,
  events,
  id,
  index,
  name,
  time
}: EventsProps) => {
  const router = useRouter();
  const handleSearchTickets = () => {
    router.push(`/tickets/${id}`);
  };

  return (
    <Card className={classNames(classes.eventsCardContainer)}>
      {index === 0 && (
        <Card.Header className={classes.eventsCardHeader}>
          {events < 2
            ? `${events} Next Event`
            : `${events} Upcoming Events`}
        </Card.Header>
      )}
      <Card.Body>
        {index === 0 && <h4>{country}</h4>}
        <Row>
          <Col xs={12} sm={12} md={2} lg={2}>
            <div className={classes.eventsDateContainer}>
              <p>{moment(date).format("LL")}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8}>
            <span>{`${day} · ${time}`}</span>
            <h5 className="mt-1">{city}</h5>
            <p>{name}</p>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2} className={classes.eventsButton}>
            <ActionButton
              label="Search Tickets"
              onClick={handleSearchTickets}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Events;
