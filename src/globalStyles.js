import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`

    body,
    html,
    a {
        font-family: 'Ubuntu', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }
.Span {
	color: red[500],
	fontSize: 20, fontSize: 20,
	position: "static"
}
        
    a:hover {
        color: #000;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Ubuntu', sans-serif;
        color: #00008b;
        font-size: 2.575rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    p {
        color: #687864;
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: rgb(255,130,92);
    }
    body, html {
	 height: 100%;
	 width: 100%;
	 display: flex;
	 flex-direction: column;
	 overflow-x: hidden;
	 
}
 body {
	 background: #8FC1E3;
	 transition: all 0.14s ease-in;

	 font-family: Poppins;
}
 body.active {
	 background: #f4f6f7;
}
 .container {
	 margin: auto;
	 width: 214px;
   margin-top: 90px;
}
 .enter-btn {
	 margin: auto;
	 color: #fff;
	 cursor: pointer;
	 height: 70px;
	 text-align: center;
	 user-select: none;
}
/* 
 .enter-btn:hover {
	 background: #57cc90;
}
 .enter-btn:active {
	 transition: background 0.14s ease-in;
}
 .active .enter-btn {
	 background: #57cc90;
}
 .active .enter-btn:active {
	 box-shadow: inset 0px 6px 8px -1px #3fb678;
} */
 #on {
	 transform: translate(50%, 50%) scale(0);
	 opacity: 0;
}
 .active #on {
	 opacity: 1;
	 transform: translate(0) scale(1);
	 transition: all 0.14s ease-in;
}
 .fancy-bulb {
	 position: relative;
}
 .streaks, .streaks:after, .streaks:before {
	 position: absolute;
	 background: #fcd23a;
	 border-radius: 5.5px;
	 height: 11px;
}
 .streaks:after, .streaks:before {
	 content: "";
	 display: block;
}
 .streaks:before {
	 bottom: 65px;
}
 .streaks:after {
	 top: 65px;
}
 .left-streaks {
	 right: 217px;
	 top: 89.5px;
}
 .active .left-streaks {
	 animation: move-left 0.38s ease-out, width-to-zero 0.38s ease-out;
	 animation-delay: 0.14s;
}
 .left-streaks:before, .left-streaks:after {
	 left: 15px;
}
 .active .left-streaks:before {
	 animation: width-to-zero 0.38s ease-out, move-up 0.38s ease-out;
	 animation-delay: 0.14s;
}
 .active .left-streaks:after {
	 animation: width-to-zero 0.38s ease-out, move-down 0.38s ease-out;
	 animation-delay: 0.14s;
}
 .right-streaks {
	 left: 217px;
	 top: 89.5px;
}
 .active .right-streaks {
	 animation: move-right 0.38s ease-out, width-to-zero 0.38s ease-out;
	 animation-delay: 0.14s;
}
 .right-streaks:before, .right-streaks:after {
	 right: 15px;
}
 .active .right-streaks:before {
	 animation: width-to-zero 0.38s ease-out, move-up 0.38s ease-out;
	 animation-delay: 0.14s;
}
 .active .right-streaks:after {
	 animation: width-to-zero 0.38s ease-out, move-down 0.38s ease-out;
	 animation-delay: 0.14s;
}
 .left-streaks:before, .right-streaks:after {
	 transform: rotate(34deg);
}
 .left-streaks:after, .right-streaks:before {
	 transform: rotate(- 34deg);
}
 @keyframes move-left {
	 0% {
		 transform: none;
	}
	 65% {
		 transform: translateX(-80px);
	}
	 100% {
		 transform: translateX(-80px);
	}
}
 @keyframes move-right {
	 0% {
		 transform: none;
	}
	 65% {
		 transform: translateX(80px);
	}
	 100% {
		 transform: translateX(80px);
	}
}
 @keyframes width-to-zero {
	 0% {
		 width: 50px;
	}
	 100% {
		 width: 11px;
	}
}
 @keyframes move-up {
	 100% {
		 bottom: 100.75px;
	}
}
 @keyframes move-down {
	 100% {
		 top: 100.75px;
	}
}
 /*  SECTIONS  */
.section {
	clear: both;
	padding: 0px;
	margin: 0px;
}

/*  COLUMN SETUP  */
.col {
	display: block;
	float:left;
	margin: 1% 0 1% 1.6%;
}
.col:first-child { margin-left: 0; }

/*  GROUPING  */
.group:before,
.group:after { content:""; display:table; }
.group:after { clear:both;}
.group { zoom:1; /* For IE 6/7 */ }
/*  GRID OF TWO  */
.span_2_of_2 {
	width: 100%;
}
.span_1_of_2 {
	width: 100%;
}


/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */

@media only screen and (max-width: 480px) {
	.col { 
		margin: 1% 0 1% 0%;
	}
}

@media only screen and (max-width: 480px) {
	.span_2_of_2, .span_1_of_2 { width: 100%; }
}
    
`;

export default Styles;
