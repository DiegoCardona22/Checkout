// @packages
import { Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

// @scripts
import ActionButton from "src/components/atoms/action-button";

// @styles
import classes from "./styles.module.scss";

type TicketsProps = {
  index: number;
  items: any;
  itemsToBuy: any;
  setIsTickets: (value: boolean) => void;
  setItemsToBuy: (items: any) => void;
  setTotal: any;
  total: any;
};

const TicketsSelection = ({
  index,
  items,
  itemsToBuy,
  setIsTickets,
  setItemsToBuy,
  setTotal,
  total
}: TicketsProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddQuantity = (position: number) => {
    setQuantity(quantity + 1);
    setTotal(total + items.price);
    setItemsToBuy([
      ...itemsToBuy,
      {
        ...items,
        quantity: quantity + 1,
        id: quantity + 1,
        index: position
      }
    ]);
  };

  const handleRemoveQuantity = (position: number) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotal(total - items.price);
      setItemsToBuy(
        itemsToBuy.filter(
          (item: { id: number; index: number }) =>
            item.id !== quantity || item.index !== position
        )
      );
    }
  };

  useEffect(() => {
    if (items?.quantityDefault > 0) {
      setItemsToBuy([...itemsToBuy, items]);
    }
  }, [items]);

  useEffect(() => {
    if (
      (itemsToBuy.map((item: { name: any }) => item.name).includes("general")
      || itemsToBuy.map((item: { name: any }) => item.name).includes("vip"))
      && itemsToBuy.map((item: { name: any }) => item.name).includes("serviceFee")
    ) {
      setIsTickets(true);
    } else {
      setIsTickets(false);
    }
  }, [quantity, setIsTickets]);

  useEffect(() => {
    setTotal(items?.price * items?.quantityDefault);
  }, [items.price, items.quantityDefault]);

  return (
    <Card className={classes.ticketsCardContainer}>
      {index === 0 && (
        <Card.Header className={classes.ticketsCardHeader}>
          <h3>Your Selection</h3>
        </Card.Header>
      )}
      <Card.Body>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={1}
            lg={1}
            className={classes.ticketsIconContainer}
          >
            <i className="fa fa-ticket" aria-hidden="true" />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={9}
            lg={9}
            className="d-flex justify-content-center align-items-end"
          >
            <h4>{items.description}</h4>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2} className={classes.ticketsButtons}>
            <ActionButton
              label="-"
              onClick={() => handleRemoveQuantity(index)}
              className={classes.actionButton}
              disabled={items.quantityDefault || quantity === 0}
            />
            <span>
              {items.quantityDefault ? items.quantityDefault : quantity}
            </span>
            <ActionButton
              label="+"
              onClick={() => handleAddQuantity(index)}
              className={classes.actionButton}
              disabled={items.quantityDefault}
            />
          </Col>
        </Row>
        {items.price && (
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              {items.quantityDefault ? (
                <p>
                  <span>{`$${items.price}`}</span>
                </p>
              ) : (
                <p>
                  <span>{`$${quantity} x $${items.price}`}</span>
                </p>
              )}
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default TicketsSelection;
