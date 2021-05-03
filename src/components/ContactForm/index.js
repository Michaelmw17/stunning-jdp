import { lazy, Suspense } from "react";
import { Row, Col } from "antd";
import Zoom from "react-reveal/Zoom";
import { withTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
import Loader from "react-loader-spinner";
import useForm from "./useForm";
import validate from "./validationRules";
import loadable from '@loadable/component'

import InputLabel from '@material-ui/core/InputLabel';

import './stylesForm.css'
import * as S from "./styles";

const OtherComponent = loadable(() => import('../../pages/First'))

const Block = lazy(() => import("../Block"));
const Button = lazy(() => import("../../common/Button"));
const TextArea = lazy(() => import("../../common/TextArea"));
const SimpleSelect = lazy(() => import("../../common/DropDown"));

// const GoogleMap = lazy(() => import('../../pages/First'), {
//   fallback: <div><Loader
//     type="Rings"
//     color="#00BFFF"
//     timeout={9000}
//     height={80} width={80} /></div>
// })

const Contact = ({ title, content, id, t , e, handleSubmit}) => {
   function sendEmail(e) {
    e.preventDefault({passive: true});

        emailjs.sendForm(
                "service_a9ktqlp",
                "template_l0mglga",
                e.target,
                "user_yw3a8DYtaKOIm8KcBtk2L"
        )
        .then((result) => {
            if(alert(result.text )) {}
            else window.location.reload()
        }, (error) => {
            alert(error.text);
        });
    }
  const { values, errors, handleChange } = useForm(validate);

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <Zoom cascade>
        <S.Span>{ErrorMessage}</S.Span>
      </Zoom>
    ) : (
      <S.Span />
    );
  };

  return (
    <S.ContactContainer id={id} >
    
      <S.Contact>
        <Row type="flex" justify="space-between" align="middle">

          <Col lg={12} md={12} sm={24}>
          <Block padding={true} title={title} content={content} />
              <Col>
              <div className="formText">
                  <a href="tel:02-9419-7947">
                    Ph: (02) 9419 7947 
                    </a>
                </div> 
              <div className="formText">
                <a href={
                  `https://www.google.com/maps/search/nit+17+4-6+Chaplin+Drive+Lane+Cove+West+NSW+2066./@-33.8098656,151.1461655,17z/data=!3m1!4b1`}> Unit 17, 4-6 Chaplin Drive Lane Cove West NSW 2066
                  </a>
              </div>
                </Col>
            <S.FormGroup autoComplete="off" onSubmit={sendEmail ||  handleSubmit}  onsubmit="return false">
              <Col span={24}>
                  <InputLabel shrink id="nameLabel">
                    Full Name  *
                  </InputLabel>
                <input minLength="1"  required="required" 
                  type="text"
                  name="name"
                  id="firstName"
                  label="services"
                  placeholder="Name *"
                  value={values.name || ""}
                  onChange={handleChange}
                />
              
                <ValidationType type="name" />
              </Col>
              
              <Col span={24}>
              <InputLabel shrink id="EmailLabel">
                    Email *
                  </InputLabel>
                <input id="input" type="email"
                  name="email" required="required"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder="JohnSmith@email.com *" />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
              <InputLabel shrink id="phoneLabel">
                    Phone Number *
                  </InputLabel>
                <input
                  placeholder="Phone Number*"
                  value={values.number || ""}
                  name="number"
                  required="required"
                  id="number"
                  onChange={handleChange}
                />
                <ValidationType type="Number" />
              </Col>
              <Col span={24}>
              <InputLabel shrink id="suburbLabel">
                    Your Suburb *
                  </InputLabel>
                <input
                  placeholder="Suburb Name*"
                  value={values.suburb || ""}
                  name="suburb"
                  required="required"
                  id="suburb"
                  onChange={handleChange}
                />
                <ValidationType type="Suburb" />
              </Col>
              <Col span={24}>
                <SimpleSelect
                  placeholder="menu"
                  value={values.message || ""}
                  name="menu"
                  required="required"
                  id="menu"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <Col span={24}>
               <InputLabel shrink id="subjectLabel">
                    Your Subject *
                  </InputLabel>
                <input
                required="required" 
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject *"
                  title="Subject *"
                  value={values.subject || ""}
                  onChange={handleChange}
                />
                <ValidationType type="subject" />
              </Col>
              <Col span={24}>
              <InputLabel shrink id="MessageLabel">
                    Your Message *
                  </InputLabel>
                <TextArea
                  placeholder="Message"
                  value={values.message || ""}
                  name="message"
                  id="Message"
                  minLength="5" 
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit" >
                  {t("Submit")}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
          <Col lg={12} md={11} sm={24}>
                    <Suspense fallback={<div>
                    <Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                  {/* <GoogleMap defer/> */}
                  <OtherComponent/>
                </Suspense>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};


export default withTranslation()(Contact);
