import React from "react";
// import ReactDOM from "react-dom";
import "./styles.css";
import { BlurImageLoader } from "./BlurImageLoader";

// import small from "./assets/light4_.webp";
import large from "./assets/light4.webp";

function App() {
  return (
    <div className="Image">
      <BlurImageLoader
        image={large}
        width={2992}
        height={2134}
        ratio={66.323529411}
      />
    </div>
  );
}
export default App;

// import React, { Suspense } from "react";
//https://images.unsplash.com/photo-1518991791750-044b923256f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=630&q=80
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Logo from "./assets/light3.webp"
// const MyComp = () => {
//     return<Suspense fallback={
//                         <Loader
//         type="Puff"
//         color="#00BFFF"
//         height={100}
//         width={100}
//         timeout={3000} //3 secs
//       />
//                             }>
//         <img src={Logo}
//             alt="DIsplay" style={{
//                 display: "absolute",
//                 background: '#FFF',
//                 marginRight: "auto",
//                 marginTop: "30px",
//                 width: "100%",
//                 height: "auto",
//                 left: '350px',
//                 borderRadius: 20,
//                 filter: "drop-shadow(2.5px 2.5px 5px #000)",
//             }}

//             max-age="31536000"
//         />
//     </Suspense>;
// };


// export default MyComp;