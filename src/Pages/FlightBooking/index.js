import Navbar from "../../Component/home_component/navbar";
import BookingPage1 from "../../Component/FlightBooking/BookingPage1";
import Form from "../../Component/FlightBooking/Form";
import Footer from "../../Component/home_component/footer";

export default function FlightBooking() {
  return (
    <div>
      <Navbar />
      <BookingPage1 />
      <Form />
      <Footer />
    </div>
  );
}
