import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
@font-face { font-family: Ubuntu; font-display: swap; }

    body,
    html,
    a {
        font-family: 'Ubuntu', sans-serif;
        font-display: swap;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        overflow-x: hidden;
        
    }
.Span {
	color: red[500],
	fontSize: 20, fontSize: 20,
	position: "static"
}
        
    a:hover {
        color: blue;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6
    {
        font-family: 'Poppins', sans-serif;
        color: ;
        padding: 5.5rem  1rem ;
        font-size: 2.975rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
        h1,h2,h3,h4,h5,h6::first-letter {
  text-transform: uppercase;
}
   h6 {
       font-family: 'Poppins', sans-serif;
        color: red;
        font-size: 2.975rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
           color: red;
        }
    p {
		font-weight: 200;
        font-size: 1.525rem;
    }
   
    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: rgb(209, 29, 50);

        :hover {
            color: blue;
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
        padding-top: 2.5rem;
        padding-right: 2rem;
        text-align: center;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: rgb(209, 29, 50);
        
    }
    Span:hover {
        color: #000
    }

`;

export default Styles;
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `