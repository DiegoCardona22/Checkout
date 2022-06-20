// @packages
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// @scripts
import CheckoutForm from "./checkout-form";

type StripeProps = {
  cardIsChecked: boolean;
  paymentInfo: any;
  setPaymentInfo: any;
  termsIsChecked: boolean;
};

const StripeComponent = ({
  cardIsChecked,
  paymentInfo,
  setPaymentInfo,
  termsIsChecked
} : StripeProps) => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE || "");
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        paymentInfo={paymentInfo}
        setPaymentInfo={setPaymentInfo}
        cardIsChecked={cardIsChecked}
        termsIsChecked={termsIsChecked}
      />
    </Elements>
  );
}

export default StripeComponent;
