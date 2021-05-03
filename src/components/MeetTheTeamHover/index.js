import React, { Component , Suspense } from 'react'
import { Row, Col } from "antd";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from './assets/Person.webp';
import Loader from "react-loader-spinner";
import './stylesMeet.css'

// const logo = lazy(() => import("../assets/images_auto_x2.png"));

export default class MeetTeam extends Component {
    render() {
        return (<>
        <h1> Meet the Team</h1>
            <Row align="middle">
                <Col  lg={8} md={12} sm={12} xs={24}>
                    <div className="container">
                        <div className="card">
                        <div className="imgBx">
                        <Suspense fallback={<div>
                    <Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                 <img src={logo} alt="Logo" className="img-responsive"
                height="400" width="940"/>
                            {/* <img src={image} alt="img" height="440" width="645" /> */}
                        </Suspense>
                        </div>
                        <div className="content">
                            <div className="contentBx">
                            <h3>Joe Panetta<br /><div className="noStyle">Electrician</div>
                            <br />
                            <a href='https://www.facebook.com/'>
                            <FacebookIcon/>
                            </a>
                            
                            <a href='https://www.facebook.com/'>
                            <InstagramIcon/>
                            </a>
                            <a href='https://www.facebook.com/'>
                            <LinkedInIcon/>
                           </a>
                            </h3>
                        </div>
                        </div>
                        </div>
                    </div>
            </Col>
                <Col  lg={8} md={12} sm={12} xs={24}>
                     <div className="container">
                        <div className="card">
                        <div className="imgBx">
                        <Suspense fallback={<div>
                    <Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                  {/* <img
            src="https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          /> */}
        <img src={logo} alt="Logo" className="img-responsive"
          height="400" width="940"
          
           />
                            {/* <img src={image} alt="img" height="440" width="645" /> */}
                        </Suspense>
                        </div>
                        <div className="content">
                            <div className="contentBx">
                            <h3>Dominic Panetta<br /><div className="noStyle">Electrician</div>
                            <br />
                            <a href='https://www.facebook.com/'>
                            <FacebookIcon/>
                            </a>
                            
                            <a href='https://www.facebook.com/'>
                            <InstagramIcon/>
                            </a>
                            <a href='https://www.facebook.com/'>
                            <LinkedInIcon/>
                           </a>
                            </h3>
                           
                        </div>
                        </div>
                        </div>
                    </div>
            </Col>
                <Col  lg={8} md={24} sm={24} xs={24}>
                     <div className="container">
                        <div className="card">
                       <div className="imgBx">
                        <Suspense fallback={<div>
                    <Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                  {/* <img
            src="https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          /> */}
          <img src={logo} alt="Logo" className="img-responsive"
          height="400" width="940"
          
           />
                            {/* <img src={image} alt="img" height="440" width="645" /> */}
                        </Suspense>
                        </div>
                        <div className="content">
                            <div className="contentBx">
                            <h3>Anna Panetta <br /><div className="noStyle">Electrician</div>
                            <br />
                            <a href='https://www.facebook.com/'>
                            <FacebookIcon/>
                            </a>
                            
                            <a href='https://www.facebook.com/'>
                            <InstagramIcon/>
                            </a>
                            <a href='https://www.facebook.com/'>
                            <LinkedInIcon/>
                           </a>
                            </h3>
                           
                        </div>
                        </div>
                        </div>
                    </div>
            </Col>
            </Row>
            <Row >
                <Col  lg={12} md={12} sm={12} xs={24}>
                     <div className="container">
                        <div className="card">
                         <div className="imgBx">
                        <Suspense fallback={<div>
                    <Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                  {/* <img
            src="https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          /> */}
         <img src={logo} alt="Logo" className="img-responsive"
          height="400" width="940"
          
           />
                            {/* <img src={image} alt="img" height="440" width="645" /> */}
                        </Suspense>
                        </div>
                        <div className="content">
                            <div className="contentBx">
                            <h3>Jayden Panetta <br /><div className="noStyle">Electrician</div>
                            <br />
                            <a href='https://www.facebook.com/'>
                            <FacebookIcon/>
                            </a>
                            
                            <a href='https://www.facebook.com/'>
                            <InstagramIcon/>
                            </a>
                            <a href='https://www.facebook.com/'>
                            <LinkedInIcon/>
                           </a>
                            </h3>
                           
                        </div>
                        </div>
                        </div>
                    </div>
            </Col>
                <Col  lg={12} md={12} sm={12} xs={24}>
                     <div className="container">
                        <div className="card">
                         <div className="imgBx">
                        <Suspense fallback={<div>
                    <Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                  {/* <img
            src="https://images.pexels.com/photos/3379933/pexels-photo-3379933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          /> */}
          <img src={logo} alt="Logo" className="img-responsive"
          height="400" width="940" 
          
           />
                            {/* <img src={image} alt="img" height="440" width="645" /> */}
                        </Suspense>
                        </div>
                        <div className="content">
                            <div className="contentBx">
                            <h3>Paris Panetta <br />
                            <div className="noStyle">Electrician</div>
                            <br />
                            <a href='https://www.facebook.com/'>
                            <FacebookIcon/>
                            </a>
                            
                            <a href='https://www.facebook.com/'>
                            <InstagramIcon/>
                            </a>
                            <a href='https://www.facebook.com/'>
                            <LinkedInIcon/>
                           </a>
                            </h3>
                           
                        </div>
                        </div>
                        </div>
                    </div>
            </Col>

            </Row>
            </>
        )
    }
}
