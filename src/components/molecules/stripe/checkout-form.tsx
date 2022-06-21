// @packages
import { Form, Alert } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";

// @scripts
import ActionButton from "src/components/atoms/action-button";
import { config } from "src/config";

// @styles
import classes from "./styles.module.scss";

type PaymentInfoProps = {
  cardIsChecked: boolean;
  paymentInfo: any;
  setPaymentInfo: any;
  termsIsChecked: boolean;
};

const CheckoutForm = ({
  cardIsChecked,
  paymentInfo,
  setPaymentInfo,
  termsIsChecked
}: PaymentInfoProps) => {
  const [buyed, setBuyed] = useState(false);
  const [error, setError] = useState(null);

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
              <Alert.Heading>{config.text.stripe.paymentSuccess}</Alert.Heading>
              <p>
                {config.text.stripe.paymentSuccessMessage}
                <br />
                {config.text.stripe.receiveEmail}
              </p>
            </Alert>
          )}
        </>
      ) : (
        <div className="mt-4">
          <p>{config.text.stripe.cardNumber}</p>
          <CardNumberElement className={classes.inputCards} />
          <p>{config.text.stripe.expirationDate}</p>
          <CardExpiryElement className={classes.inputCards} />
          <p>{config.text.stripe.cvc}</p>
          <CardCvcElement className={classes.inputCards} />
          {error && <Alert variant="danger">{error}</Alert>}
          <ActionButton
            label="Save"
            type="submit"
            className={error ? classes.placeOrderButtonError : classes.placeOrderButtonSave}
          />
        </div>
      )}
    </Form>
  );
};

export default CheckoutForm;
