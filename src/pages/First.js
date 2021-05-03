import React, {useState} from 'react'
import Href from './Services/Href'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {
  GoogleMap,
  LoadScript,
  OverlayView,
  Marker
} from "@react-google-maps/api";
const testData = {
  text: "  Unit 17 4-6 Chaplin Drive Lane Cove West NSW 2066, JPD Electrical",
  link: "https://www.google.com/maps/search/nit+17+4-6+Chaplin+Drive+Lane+Cove+West+NSW+2066./@-33.8098656,151.1461655,17z/data=!3m1!4b1"
};
const containerStyle = {
  height: `80vh`,
              width: '70%',
              marginLeft: '10px',
              marginRight: '40px',
              marginTop: '20px',
              maxWidth: '1480px',
              minWidth: '210px',
              borderRadius: '14px'
};

const center = {
   lat: -33.8097541497481,
  lng:  151.14841320640292
};

function MyComponent() {
  const [isOpened, setOpened] = useState(false);
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCYg2DU2RP6gSzXZRrXMAqt5Xhym4a0UrA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
          >
              <Marker
          title='JPD Electrical'
          position={center}
          onClick={() => {
            setOpened(!isOpened);
          }}
        />
        {isOpened && (
          <OverlayView
            position={center}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={(width, height) => ({
              x: -(width / 2),
              y: -(height / 2)
            })}
          >
             <div style={{ background: `white`, border: `1px solid #ccc`, padding: 5 }}>
              <p>Address</p>
              <ul className='list-unstyled'>
                      <li>
                          <Href
                          text={testData.text}
                          url={testData.link}
                          />
                </li>
              </ul>
      </div>
          </OverlayView>
        )}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
export default React.memo(MyComponent)
// import React, { useState } from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   OverlayView,
//   Marker
// } from "@react-google-maps/api";

// // import Href from "../LocationInfo/Href";
// const exampleMapStyles = [
//     {
//         featureType: "poi",
//         elementType: "geometry",
//         stylers: [
//             {
//                 color: "black",
//             },
//         ],
//     },
//     {
//         featureType: "poi",
//         elementType: "labels.text",
//         stylers: [
//             {
//                 visibility: "off",
//             },
//         ],
//     },
//     {
//         featureType: "water",
//         elementType: "labels.text.fill",
//         stylers: [
//             {
//                 color: "#9e9e9e",
//             },
//         ],
//     },
// ];

// const center = {
//   lat: -33.8097541497481,
//   lng: 151.14841320640292
// };

// function First(props) {
//   const [isOpened, setOpened] = useState(false);
// // const testData = {
// //   text: "  495 Friday Hut Road, Possum Creek",
// //   link: "https://www.google.com/maps/place/495+Friday+Hut+Rd,+Possum+Creek+NSW+2479/data=!4m2!3m1!1s0x6b9088b3f117865d:0x538c627863a29552?sa=X&ved=2ahUKEwjC2YHPpaPvAhXtzjgGHWruCisQ8gEwAHoECAQQAQ"
// // };
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCYg2DU2RP6gSzXZRrXMAqt5Xhym4a0UrA"
//       >
//         <GoogleMap
//         center={center}
//         defaultOptions={{
//                 styles: exampleMapStyles,
//             }}
//         mapContainerStyle={{
//               height: `80vh`,
//               width: '70%',
//               marginLeft: '10px',
//               marginRight: '40px',
//               marginTop: '20px',
//               maxWidth: '1480px',
//               minWidth: '210px',
//               borderRadius: '14px'
//         }}
//         zoom={15}
//           >
//         <Marker
//           title='Possum'
//           position={center}
//           onClick={() => {
//             setOpened(!isOpened);
//           }}
//         />
//         {isOpened && (
//           <OverlayView
//             position={center}
//             mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//             getPixelPositionOffset={(width, height) => ({
//               x: -(width / 2),
//               y: -(height / 2)
//             })}
//           >
//              <div style={{ background: `white`, border: `1px solid #ccc`, padding: 5 }}>
//               <p>Address</p>
//               <ul className='list-unstyled'>
//                       <li>
//                           {/* <Href
//                           text={testData.text}
//                           url={testData.link}
//                           /> */}
//                 </li>
//               </ul>
//       </div>
//           </OverlayView>
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// }
// export default First;
