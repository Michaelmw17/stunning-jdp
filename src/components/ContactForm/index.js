import { lazy } from "react";
import { Row, Col } from "antd";
import Zoom from "react-reveal/Zoom";
import { withTranslation } from "react-i18next";

import useForm from "./useForm";
import validate from "./validationRules";

import * as S from "./styles";
import emailjs from 'emailjs-com';
const Block = lazy(() => import("../Block"));
const Input = lazy(() => import("../../common/Input"));
const Button = lazy(() => import("../../common/Button"));
const TextArea = lazy(() => import("../../common/TextArea"));
const SimpleSelect = lazy(() => import("../../common/DropDown"));

const Contact = ({ title, content, id, t , e, handleSubmit}) => {
   function sendEmail(e) {
    e.preventDefault();

        emailjs.sendForm(
                "service_a9ktqlp",
                "template_l0mglga",
                e.target,
                "user_yw3a8DYtaKOIm8KcBtk2L"
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
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
          <Col lg={12} md={11} sm={24}>
            
            <Block padding={true} title={title} content={content} />
            <a href={
              `https://www.google.com/maps/search/nit+17+4-6+Chaplin+Drive+Lane+Cove+West+NSW+2066./@-33.8098656,151.1461655,17z/data=!3m1!4b1`}> Unit 17 4-6 Chaplin Drive Lane Cove West NSW 2066
              </a>
        
          </Col>
          <Col lg={12} md={12} sm={24}>
            <S.FormGroup autoComplete="off" onSubmit={sendEmail ||  handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  id="firstName"
                  label="services"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
               
                <ValidationType type="name" />
              </Col>
              
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email "
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <Input
                  placeholder="Your Number"
                  value={values.number || ""}
                  name="number"
                  id="number"
                  onChange={handleChange}
                />
                <ValidationType type="Number" />
              </Col>
              <Col span={24}>
                <SimpleSelect
                  placeholder="menu"
                  value={values.message || ""}
                  name="menu"
                  id="menu"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={values.subject || ""}
                  onChange={handleChange}
                />
                <ValidationType type="subject" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  id="Message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  {t("Submit")}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default withTranslation()(Contact);
