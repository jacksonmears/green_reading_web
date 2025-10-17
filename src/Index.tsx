// src/pages/Index.tsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import headerImage from "./assets/images/homepage-header-image.png";
import "./css/index.css";
import RatesImage from "./assets/images/RatesBackground.png";
// import actionBoxBackground from "./assets/images/testing.png";
// import {useNavigate} from "react-router-dom";

const TERTIARY_COLOR = "#50C878";
const PRIMARY_COLOR = "#00674F";
const P_FONTSIZE = 15;
const WIDTH_INFO = 500;
const HEIGHT_INFO = 300;

function Index() {
    // const navigate = useNavigate();



    return (
        <div style={styles.rootContainer}>

            <div style={styles.headerContainer}>
                <Header/>

                <div style={styles.titleContainer}>
                    <p style={styles.courseTitle}>Beaver Creek Golf Club</p>
                    <p style={styles.courseTitleDescription}>A timeless dance of turf, light, and sky</p>
                </div>
            </div>




            <div style={styles.actionContainer} >
                <div className="actionBox" style={styles.ratesContainer}>
                    <div style={styles.actionBoxTextContainer}>
                        <p style={{color: "black", fontSize: 20}}>
                            Enjoy a game of golf on a 27-hole bent grass
                            golf course at Beaver Creek Golf Club. Come
                            and try out your golf swing at our great golf
                            course today! Take a look at our
                            daily rates below.
                        </p>
                    </div>
                    <div className="actionButtonOutside" style={styles.actionButtonContainerOutside}>
                        <p style={{color: "black"}}>Rates!</p>
                    </div>

                </div>
                <div className="actionBox" style={styles.passContainer}>
                    <div style={styles.actionBoxTextContainer}>
                        <p style={{color: "white", fontSize: 20}}>
                            Take advantage of our weekday season pass. Unlimited golf Monday - Friday.
                        </p>
                    </div>
                    <div  className="actionBoxButton" style={styles.actionButtonContainer}>
                        <p style={{color: "white"}}>Passes!</p>

                    </div>
                </div>
                <div className="actionBox" style={styles.outingContainer}>
                    <div style={styles.actionBoxTextContainer}>
                        <p style={{color: "black", fontSize: 20}}>
                            Enjoy a professionally organized outing at
                            Beaver Creek Golf Club. With over 30 years
                            of experience, we welcome groups of all sizes
                            for unforgettable events. Let our team handle
                            the details—contact us today to learn more about
                            outing options!
                        </p>
                    </div>
                    <div  className="actionButtonOutside" style={styles.actionButtonContainerOutside}>
                        <p style={{color: "black"}}>Outings!</p>

                    </div>
                </div>
            </div>


            {/*<div style={styles.descriptionContainer}>*/}
            {/*    <p>Long Verse</p>*/}
            {/*    <div style={styles.ratesButtonContainer}></div>*/}
            {/*</div>*/}

            <Footer/>
            <SubFooter/>
        </div>
    );
}

export default Index;

const styles: { [key: string]: React.CSSProperties } = {
    rootContainer: {
        minHeight: "100vh",
        backgroundColor: "white",
    },
    headerContainer: {
        backgroundImage: `url(${headerImage})`,
        backgroundPosition: "bottom center",
        padding: 50,
        borderRadius: 100,
        boxShadow: '0px 0px 50px 20px rgba(0, 0, 0, 0.4)',

    },
    titleContainer: {
        marginTop: 40,
        paddingLeft: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: 600,
    },
    courseTitle: {
        fontFamily: "ICA Rubrik, sans-serif",
        fontWeight: "bold",
        fontSize: P_FONTSIZE * 6,
        color: "transparent",
        WebkitTextStroke: `1px ${PRIMARY_COLOR}`,
        margin: 0,
    },
    courseTitleDescription: {
        fontFamily: "ICA Rubrik, sans-serif",
        fontSize: P_FONTSIZE * 1.5,
        color: "black",
        fontWeight: "bold",
        margin: 0,
        marginTop: "10px",
    },
    actionContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 50,
    },
    ratesContainer: {
        width: WIDTH_INFO,
        height: HEIGHT_INFO,
        backgroundColor: TERTIARY_COLOR,
        borderRadius: 30,
        // boxShadow: '0px 0px 50px 30px rgba(0, 0, 0, 0.4)',
        alignItems: "center",
        justifyItems: "center",
        backgroundImage: `linear-gradient(rgba(80, 200, 120, 0.8), rgba(80, 200, 120, 0.8)), url(${RatesImage})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
    },
    passContainer: {
        width: WIDTH_INFO,
        height: HEIGHT_INFO,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 30,
        // boxShadow: '0px 0px 50px 30px rgba(0, 0, 0, 0.4)',
        marginLeft: 100,
        marginRight: 100,
    },
    outingContainer: {
        width: WIDTH_INFO,
        height: HEIGHT_INFO,
        backgroundColor: TERTIARY_COLOR,
        borderRadius: 30,
        // boxShadow: '0px 0px 50px 30px rgba(0, 0, 0, 0.4)',
    },
    TextContainer: {
        height: HEIGHT_INFO*0.65,
        width: WIDTH_INFO,
        backgroundColor: "red"
    },
    buttonContainer: {
        height: HEIGHT_INFO*0.35,
    },
    actionButtonContainer: {
        padding: 10,
        // backgroundColor: "palegoldenrod",
        // backgroundColor: "rgb(150,150,150)",
        width: 150,
        // height: 40,
        justifySelf: "center",
        justifyItems: "center",
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "white",
        borderStyle: "solid",
        cursor: "pointer",

    },
    actionButtonContainerOutside: {
        padding: 10,
        // backgroundColor: "palegoldenrod",
        // backgroundColor: "rgb(150,150,150)",
        width: 150,
        // height: 40,
        justifySelf: "center",
        justifyItems: "center",
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "black",
        borderStyle: "solid",
        cursor: "pointer",
    },
    actionBoxTextContainer: {
        padding: 40,
        height: 125,

    }
};
