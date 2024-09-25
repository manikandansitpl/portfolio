import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="">manikandansitpl3@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919944026348">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+919944026348">(+91) 9944026348</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
