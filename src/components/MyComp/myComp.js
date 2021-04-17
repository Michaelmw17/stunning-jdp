import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const MyComp = () => {
    return<Suspense fallback={
                        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
                            }>
        <img src={process.env.PUBLIC_URL + '/JDP-BRANDING-04.png'}
            alt="Logo" style={{
               display: "absolute",
                background: '#FFF',
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                height: 'auto',
                maxWidth: "100%",
                maxHeight: "60px",
            }}
            max-age="31536000"
        />
    </Suspense>;
};


export default MyComp;