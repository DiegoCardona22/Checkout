// @packages
import { Container, Row, Col } from "react-bootstrap";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// @scripts
import ActionButton from "src/components/atoms/action-button";
import PaymentsPage from "src/components/organisms/payment-page";
import TicketsSelection from "src/components/organisms/tickets";
import { CardItems } from "src/components/atoms/card/card-items";

type TicketsInfoProps = {
  id: string;
  length: number;
}

type EventsInfoProps = {
  tickets: TicketsInfoProps[];
  id: string;
  day: any;
  title: string;
  imageUrl: string;
  description: string;
  date: any;
}

const TicketsPage: NextPage = () => {
  const [buyPage, setBuyPage] = useState(false);
  const [eventsInfo, setEventsInfo] = useState<EventsInfoProps>([] as any);
  const [isTickets, setIsTickets] = useState(true);
  const [itemsToBuy, setItemsToBuy] = useState([]);
  const [ticketsInfo, setTicketsInfo] = useState<TicketsInfoProps>([] as any);
  const [total, setTotal] = useState(0);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const ticketsInfoMap = CardItems.map(item => item?.events?.filter(event => event?.eventId === id));
      const ticketsInfoFilter = ticketsInfoMap.filter(item => item?.length > 0);
      const ticketsArray = ticketsInfoFilter.flat();
      setTicketsInfo(ticketsArray[0] as any);
    }
  }, [id]);

  useEffect(() => {
    if (ticketsInfo?.id) {
      const eventsInfoMap = CardItems.filter(item => item?.id === ticketsInfo?.id);
      setEventsInfo(eventsInfoMap[0] as any);
    }
  }, [ticketsInfo]);

  return (
    <Container>
      <Row>
        <Col>
          {!buyPage ? (
            <>
              {eventsInfo?.tickets?.map((item: any, index: number) => (
                <div key={index}>
                  <TicketsSelection
                    total={total}
                    setTotal={setTotal}
                    setItemsToBuy={setItemsToBuy}
                    setIsTickets={setIsTickets}
                    index={index}
                    itemsToBuy={itemsToBuy}
                    items={item}
                  />
                </div>
              ))}
              {isTickets && (
                <div className="d-flex justify-content-center mt-3">
                  <ActionButton
                    label="Comprar Boletos"
                    onClick={() => setBuyPage(true)}
                    className="btn-primary"
                  />
                </div>
              )}
            </>
          ) : (
            <PaymentsPage
              eventSelected={ticketsInfo as any}
              itemsToBuy={itemsToBuy}
              total={total}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default TicketsPage;
