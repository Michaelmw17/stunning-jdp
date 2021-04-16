import React, { lazy} from "react";
import ContactContent from "../../content/ContactContent.json";
import '../../globalStyles';

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
// import styled from "styled-components";


function Contact() {
  return (
    <Container>
    <div>
          <section>
              <ContactFrom
            title={ContactContent.title}
            content={ContactContent.text}
            
            id="contact"
      />
     
      </section>
      </div>
      </Container>
  );
}


export default Contact;
