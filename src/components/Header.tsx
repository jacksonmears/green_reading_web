import React from 'react';
import './css/Header.css';
import {StyleSheet} from "@react-pdf/renderer";


// const TERTIARY_COLOR = "#50C878";
// const PRIMARY_COLOR = "#00674F";
const SECONDARY_COLOR = "#000000";
const P_FONTSIZE = 15;
const bookNowButtonPaddingSize = 5;

const Header: React.FC = () => (
    <div style={styles.headerContainer}>



        <div className="box" style={styles.navBarContainer}>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Rates</p></div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Course
                Details</p></div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Pass Programs</p>
            </div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Golf
                Instruction</p></div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Create Event</p></div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>League Info</p></div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Club House</p>
            </div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Contact Us</p>
            </div>
            <div className="classButton" style={styles.bookTimeButtonContainer}><p style={styles.titleText}>Book Now</p>
            </div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Login</p></div>
        </div>
    </div>
);

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        // marginTop: 50
    },
    navBarContainer: {
        marginLeft: 700,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        padding: 10,
        backgroundColor: SECONDARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: PRIMARY_COLOR,

        // borderWidth: 0.05,
        // borderColor: "white",
        // borderStyle: "solid",
        borderRadius: 5,
        boxShadow: 'inset 0 0 30px 15px rgba(250, 250, 250, 0.4)',
        // boxShadow: 'inset 0 0 30px 15px rgba(80, 200, 120, 0.4)',

        // boxShadow: '0px 2px 4px 10px rgba(80, 200, 120, 0.2)',

    },
    bookTimeButtonContainer: {
        borderRadius: '20px',
        paddingLeft: bookNowButtonPaddingSize,
        paddingRight: bookNowButtonPaddingSize,
        paddingTop: bookNowButtonPaddingSize / 2,
        paddingBottom: bookNowButtonPaddingSize / 2,
        marginLeft: '15px',
    },
    titleText: {
        fontFamily: "Cursive, sans-serif",
        fontWeight: "bold",
        fontSize: P_FONTSIZE * 1.3,
    },
    navBarText: {
        color: "white",
        fontSize: P_FONTSIZE,
        fontFamily: "Garamond, sans-serif",
        fontWeight: "bold",
    },
    navBarButtonContainer: {
        paddingTop: '10px',
        paddingBottom: '10px',
        marginLeft: '15px',
    },

});
