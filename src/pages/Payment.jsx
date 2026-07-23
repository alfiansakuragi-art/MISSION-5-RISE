import Header from "../component/BaseComponent/Header";
import CourseBox from "../component/Payment/CourseBox";
import PaymentMethod from "../component/Payment/PaymentMethod";
import "../styles/payment/payment.css"
function Payment() {
  return (
    <>
      <Header />
      <div className="payment_wrapper">
        <PaymentMethod />
        <CourseBox />
      </div>
    </>
  );
}

export default Payment;
