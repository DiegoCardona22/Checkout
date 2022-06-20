// @packages
import { Form, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

// @scripts
import ActionButton from "src/components/atoms/action-button";

// @styles
import classes from "./styles.module.scss";
import { useRouter } from "next/router";

type PaymentInfoProps = {
  paymentInfo: any;
  setPaymentInfo: any;
  cardIsChecked: boolean;
  termsIsChecked: boolean;
};

const CheckoutForm = ({
  paymentInfo,
  setPaymentInfo,
  cardIsChecked,
  termsIsChecked
}: PaymentInfoProps) => {
  const [error, setError] = useState(null);
  const [buyed, setBuyed] = useState(false);

  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const response = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardNumberElement) as any
    });
    if (response?.error) {
      setError(response.error.message as any);
    }
    setPaymentInfo(response as any);
  };

  useEffect(() => {
    if (buyed) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [buyed]);

  return (
    <Form onSubmit={handleSubmit}>
      {paymentInfo?.paymentMethod ? (
        <>
          <ActionButton
            label="Pay"
            onClick={() => setBuyed(true)}
            className={classes.placeOrderButton}
            disabled={
              !paymentInfo?.paymentMethod || !cardIsChecked || !termsIsChecked
            }
          />
          {buyed && (
            <Alert variant="success" className="mt-3">
              <Alert.Heading>Payment successful</Alert.Heading>
              <p>
                Your payment has been processed successfully.
                <br />
                You will receive an email with your tickets.
              </p>
            </Alert>
          )}
        </>
      ) : (
        <div className="mt-4">
          <p>Card number</p>
          <CardNumberElement className={classes.inputCards} />
          <p>Expiration date</p>
          <CardExpiryElement className={classes.inputCards} />
          <p>CVC</p>
          <CardCvcElement className={classes.inputCards} />
          {error && <Alert variant="danger">{error}</Alert>}
          <ActionButton
            label="Save"
            type="submit"
            className={classes.placeOrderButtonSave}
          />
        </div>
      )}
    </Form>
  );
};

export default CheckoutForm;
