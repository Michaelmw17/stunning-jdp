import React, { lazy} from "react";
import ContactContent from "../../content/ContactContent.json";


const ContactFrom = lazy(() => import("../../components/ContactForm"));
// const ContentBlock = lazy(() => import("../../components/ContentBlock"));

// import styled from "styled-components";
// import '../App.css'
function Contact() {
  return (
    <div>
          <section>
              <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
     
      </section>
    </div>
  );
}

// const Wrapper = styled.div`
//   min-height: calc(100vh - 50px);
//   background-color: #00d38a;
//   padding: 20px;

//   span {
//     color: #fff;
//     font-size: 40px;
//   }

//   section {
//     color: #fff;
//   }
// `;

export default Contact;
