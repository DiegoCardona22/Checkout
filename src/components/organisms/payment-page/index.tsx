/* eslint-disable max-len */
// @packages
import Link from "next/link";
import moment from "moment";
import { useState, useEffect } from "react";
import {
  Card,
  Col,
  Collapse,
  FormCheck,
  Row
} from "react-bootstrap";

// @scripts
import ActionButton from "src/components/atoms/action-button";
import AddIcon from "src/components/atoms/icons/add-icon";
import CheckIcon from "src/components/atoms/icons/check-icon";
import Image from "src/components/atoms/image";
import StripeComponent from "src/components/molecules/stripe";
import { config } from "src/config";

// @styles
import classes from "./styles.module.scss";

type PaymentsPageProps = {
  eventSelected: {
    title: string;
    day: any;
    date: any;
    description: string;
    imageUrl: string;
  };
  itemsToBuy: any;
  total: number;
};

type PaymentInfoProps = {
  id: string;
  paymentMethod: {
    card: {
      brand: string;
      last4: string;
      exp_month: string;
      exp_year: string;
    }
  }
};

const PaymentsPage = ({ eventSelected, itemsToBuy, total }: PaymentsPageProps) => {
  const [cardIsChecked, setCardIsChecked] = useState(false);
  const [generalTickets, setGeneralTickets] = useState([] as any);
  const [isCardValid, setIsCardValid] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(true);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfoProps>({} as any);
  const [serviceFeeTickets, setServiceFeeTickets] = useState([] as any);
  const [termsIsChecked, setTermsIsChecked] = useState(false);
  const [vipTickets, setVipTickets] = useState([] as any);

  useEffect(() => {
    const generalFilter = itemsToBuy.filter(
      (item: { name: string }) => item.name === "general"
    );
    const vipFilter = itemsToBuy.filter(
      (item: { name: string }) => item.name === "vip"
    );
    const serviceFeeFilter = itemsToBuy.filter(
      (item: { name: string }) => item.name === "serviceFee"
    );
    setGeneralTickets(generalFilter);
    setVipTickets(vipFilter);
    setServiceFeeTickets(serviceFeeFilter);
  }, [itemsToBuy]);

  const handleCollapse = () => {
    setOpenCollapse(!openCollapse);
  }

  return (
    <>
      <Row className="mt-3 mb-5">
        <Col xs={12} sm={12} md={12} lg={6}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Card className={classes.deliveryContainer}>
                <Card.Body>
                  <div className={classes.paymentsIcon}>
                    <Card.Title className="mb-2">
                      {config.text.payments.delivery}
                    </Card.Title>
                    <CheckIcon />
                  </div>
                  <Card.Text>{config.text.payments.mobileEntry}</Card.Text>
                  <Card.Text className="mt-2">
                    <span>
                      {`Tickets available by: ${eventSelected.day} 
                      ${moment(eventSelected.date).format("MMM D, YYYY")} `}
                    </span>
                    <span>{config.text.payments.deliveryDescription}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} className="mt-3">
              <Card className={classes.paymentContainer}>
                <Card.Body>
                  {paymentInfo?.paymentMethod ? (
                    <>
                      <div className={classes.paymentsIcon}>
                        <Card.Title>{config.text.payments.payment}</Card.Title>
                        <CheckIcon />
                      </div>
                      <Card.Text>
                        <p>{config.text.payments.useCard}</p>
                      </Card.Text>
                      <Row className={classes.paymentsInfo}>
                        <Col lg={1}>
                          <FormCheck className={classes.checkbox}>
                            <FormCheck.Input
                              type="checkbox"
                              checked={cardIsChecked}
                              onChange={() => setCardIsChecked(!cardIsChecked)}
                            />
                          </FormCheck>
                        </Col>
                        <Col lg={2} className="h-0">
                          <div className={classes.cards}>
                            {paymentInfo?.paymentMethod?.card?.brand
                            === "visa" && <Image src="/assets/images/visa.png" className="img-fluid bg-white"/>}
                            {paymentInfo?.paymentMethod?.card?.brand
                            === "mastercard" && (
                              <Image src="/assets/images/mastercard.png" className="img-fluid bg-white"/>
                            )}
                            {paymentInfo?.paymentMethod?.card?.brand
                            === "amex" && <Image src="/assets/images/amex.png" className="img-fluid bg-white"/>}
                            {paymentInfo?.paymentMethod?.card?.brand
                            === "discover" && <Image src="/assets/images/discover.png" className="img-fluid bg-white"/>}
                            {paymentInfo?.paymentMethod?.card?.brand
                            === "jcb" && <Image src="/assets/images/jcb.png" className="img-fluid bg-white"/>}
                          </div>
                        </Col>
                        <Col lg={4}>
                          <Card.Text>
                            <p>
                              {`${paymentInfo?.paymentMethod?.card?.brand} - ${paymentInfo?.paymentMethod?.card?.last4}`}
                            </p>
                          </Card.Text>
                          <Card.Text>
                            <span>
                              {`User Name - exp. ${paymentInfo?.paymentMethod?.card?.exp_month}/${paymentInfo?.paymentMethod?.card?.exp_year}`}
                            </span>
                          </Card.Text>
                        </Col>
                      </Row>
                      <StripeComponent
                        cardIsChecked={cardIsChecked}
                        termsIsChecked={termsIsChecked}
                        paymentInfo={paymentInfo}
                        setPaymentInfo={setPaymentInfo}
                      />
                      <div className={classes.paymentsAddCardContainer}>
                        <AddIcon />
                        <i
                          className="fa fa-credit-card-alt"
                          aria-hidden="true"
                        />
                        <ActionButton
                          onClick={() => setIsCardValid(true)}
                          className={classes.addCardButton}
                          label="Add Card"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {!isCardValid ? (
                        <>
                          <div className={classes.paymentsIcon}>
                            <Card.Title>{config.text.payments.payment}</Card.Title>
                            <CheckIcon />
                          </div>
                          <Card.Text>
                            <p>{config.text.payments.useCard}</p>
                          </Card.Text>
                          <div className={classes.paymentsAddCardContainer}>
                            <AddIcon />
                            <i
                              className="fa fa-credit-card-alt"
                              aria-hidden="true"
                            />
                            <ActionButton
                              onClick={() => setIsCardValid(true)}
                              className={classes.addCardButton}
                              label="Add Card"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={classes.paymentsIcon}>
                            <Card.Title>{config.text.payments.payment}</Card.Title>
                            <CheckIcon />
                          </div>
                          <Card.Text>
                            <p>{config.text.payments.useCard}</p>
                          </Card.Text>
                          <StripeComponent
                            cardIsChecked={cardIsChecked}
                            termsIsChecked={termsIsChecked}
                            paymentInfo={paymentInfo}
                            setPaymentInfo={setPaymentInfo}
                          />
                        </>
                      )}
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Card className={openCollapse ? classes.totalContainer : classes.totalContainerExpand}>
            <Card.Body>
              <ActionButton
                onClick={handleCollapse}
                className={classes.collapseButton}
                label=""
                startIcon={openCollapse ? "fa fa-arrow-down" : "fa fa-arrow-up"}
              />
              <div className={classes.totalPayment}>
                <p>{config.text.payments.total}</p>
                <span>{`$${total.toFixed(2)}`}</span>
              </div>
              <Collapse in={openCollapse}>
                <div id="example-collapse-text">
                  <Card.Text>
                    <p>{config.text.payments.tickets}</p>
                    <div className="d-flex justify-content-between">
                      <span>
                        {`Resale Tickets: $${generalTickets[0]?.price || 0} x ${
                          generalTickets?.length
                        }`}
                      </span>
                      <span>
                        {`$${(
                          (generalTickets[0]?.price || 0) * generalTickets?.length
                        ).toFixed(2)}`}
                      </span>
                    </div>
                  </Card.Text>
                  <br />
                  <Card.Text>
                    <p>{config.text.payments.vipTickets}</p>
                    <div className="d-flex justify-content-between">
                      <span>
                        {`Resale Tickets: $${vipTickets[0]?.price || 0} x ${
                          vipTickets?.length
                        }`}
                        </span>
                      <span>
                        {`$${(
                          (vipTickets[0]?.price || 0) * vipTickets?.length
                        ).toFixed(2)}`}
                        </span>
                    </div>
                  </Card.Text>
                  <br />
                  <Card.Text>
                    <p>{config.text.payments.notes}</p>
                    <span>{config.text.payments.notesFromSeller}</span>
                  </Card.Text>
                  <br />
                  <Card.Text>
                    <p>{config.text.payments.fees}</p>
                    <div className="d-flex justify-content-between">
                      <span>
                        {`Service Fee: $${serviceFeeTickets[0]?.price || 0} x ${
                          serviceFeeTickets?.length
                        }`}
                        </span>
                      <span>
                        {`$${(
                          (serviceFeeTickets[0]?.price || 0)
                          * serviceFeeTickets?.length
                        ).toFixed(2)}`}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>{config.text.payments.orderProcessingFees}</span>
                      <span>{`$${itemsToBuy[0]?.price}`}</span>
                    </div>
                  </Card.Text>
                  <br />
                  <Card.Text>
                    <p>{config.text.payments.delivery}</p>
                    <div className="d-flex justify-content-between">
                      <span>{config.text.payments.mobileEntryFree}</span>
                      <span>{config.text.payments.free}</span>
                    </div>
                  </Card.Text>
                  <br />
                  <Link href="/">
                    <a>
                      <span className={classes.link}>{config.text.payments.cancelOrder}</span>
                    </a>
                  </Link>
                  <br />
                  <br />
                  <Card.Text>
                    <p>{config.text.payments.noRefund}</p>
                  </Card.Text>
                  <br />
                  <FormCheck className={classes.termsCheck}>
                    <FormCheck.Input
                      type="checkbox"
                      checked={termsIsChecked}
                      onChange={() => setTermsIsChecked(!termsIsChecked)}
                    />
                    <FormCheck.Label>
                      {config.text.payments.iHaveReadCurrently}
                      <Link href="/">
                        <a>
                          <span className={classes.link}>{config.text.payments.termsOfUse}</span>
                        </a>
                      </Link>
                    </FormCheck.Label>
                  </FormCheck>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PaymentsPage;
