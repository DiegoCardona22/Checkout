/* eslint-disable max-len */
// @packages
import Link from "next/link";
import moment from "moment";
import { useState, useEffect } from "react";
import {
  Card,
  Col,
  FormCheck,
  Row
} from "react-bootstrap";

// @scripts
import ActionButton from "src/components/atoms/action-button";
import AddIcon from "src/components/atoms/icons/add-icon";
import CheckIcon from "src/components/atoms/icons/check-icon";
import StripeComponent from "src/components/molecules/stripe";
import { config } from "src/config";
import Image from "src/components/atoms/image";

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

const PaymentsPage = ({
  eventSelected,
  total,
  itemsToBuy
}: PaymentsPageProps) => {
  const [cardIsChecked, setCardIsChecked] = useState(false);
  const [generalTickets, setGeneralTickets] = useState([] as any);
  const [isCardValid, setIsCardValid] = useState(false);
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
                        <Card.Title>Payment</Card.Title>
                        <CheckIcon />
                      </div>
                      <Card.Text>
                        <p>Use Credit / Debit Card</p>
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
                        <Col lg={2} className="h-50">
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
                            <Card.Title>Payment</Card.Title>
                            <CheckIcon />
                          </div>
                          <Card.Text>
                            <p>Use Credit / Debit Card</p>
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
                            <Card.Title>Payment</Card.Title>
                            <CheckIcon />
                          </div>
                          <Card.Text>
                            <p>Use Credit / Debit Card</p>
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
          <Card className={classes.totalContainer}>
            <Card.Body>
              <div className={classes.totalPayment}>
                <p>Total</p>
                <span>{`$${total.toFixed(2)}`}</span>
              </div>
              <Card.Text>
                <p>Tickets</p>
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
                <p>Vip Tickets</p>
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
                <p>Notes from seller</p>
                <span>
                  xfr XFER Proof of at least on dose COVID-19 vaccination for
                  ages 5 to 11 and guests ages 12 andup will be required to show
                  proof of two COVID-19 vaccine does or one dose of the Johnson
                  & Johnson vaccine Masks must be warn.
                </span>
              </Card.Text>
              <br />
              <Card.Text>
                <p>Fees</p>
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
                  <span>Order Processing Fee</span>
                  <span>{`$${itemsToBuy[0]?.price}`}</span>
                </div>
              </Card.Text>
              <br />
              <Card.Text>
                <p>Delivery</p>
                <div className="d-flex justify-content-between">
                  <span>Mobile Entry</span>
                  <span>Free</span>
                </div>
              </Card.Text>
              <br />
              <Link href="/">
                <a>
                  <span className={classes.link}>Cancel Order</span>
                </a>
              </Link>
              <br />
              <br />
              <Card.Text>
                <p>*All Sales Final - No Refunds</p>
              </Card.Text>
              <br />
              <FormCheck className={classes.termsCheck}>
                <FormCheck.Input
                  type="checkbox"
                  checked={termsIsChecked}
                  onChange={() => setTermsIsChecked(!termsIsChecked)}
                />
                <FormCheck.Label>
                  I have read and agree to the current
                  <Link href="/">
                    <a>
                      <span className={classes.link}> Terms of Use.</span>
                    </a>
                  </Link>
                </FormCheck.Label>
              </FormCheck>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PaymentsPage;
