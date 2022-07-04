import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";

export const MainComponent = () => {

    return (
        <SRLWrapper>
            <div className='mainStyle' style={{width: "100%", display: 'flex', flexWrap: "wrap", height: "100vh"}}>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/img1.jpg').default} alt="images" style={{width: "100%"}} />
                </div>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/img2.jpg').default} alt="images" style={{width: "100%"}} />
                </div>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/img3.jpg').default} alt="images" style={{width: "100%"}} />
                </div>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/img4.jpg').default} alt="images" style={{width: "100%"}} />
                </div>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/img5.jpg').default} alt="images" style={{width: "100%"}} />
                </div>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/img6.jpg').default} alt="images" style={{width: "100%"}} />
                </div>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/tree1.jpg').default} alt="images" style={{width: "100%"}} />
                </div>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/tree2.png').default} alt="images" style={{width: "100%"}} />
                </div>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/tree3.jpg').default}  alt="images" style={{width: "100%"}} />
                </div>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/tree4.jpg').default} alt="images" style={{width: "100%"}} />
                </div>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/tree5.jpg').default} alt="images" style={{width: "100%"}} />
                </div>
                <div style={{width: "25%", margin: 10 }}>
                    <img src={require('./images/tree6.jpg').default} alt="images" style={{width: "100%"}} />
                </div>
            </div>
        </SRLWrapper>
    )
}