import React from 'react';
import './css/Header.css';
import { StyleSheet } from '@react-pdf/renderer'



const Header: React.FC = () => (
    <div style={styles.SubFooterContainer}>
        <p style={styles.contactLinks}>Facebook</p>
        <p style={styles.contactLinks}>Twitter</p>
        <p style={styles.contactLinks}>Instagram</p>

    </div>
);

export default Header;

const styles = StyleSheet.create({
    SubFooterContainer: {
        display: 'flex',
        flexDirection: 'row',
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        width: '100%',
        backgroundColor: "grey",
        height: '50px',
        alignContent: 'center',
        justifyContent: 'center',
    },
    contactLinks: {
        marginLeft: '10px',
        marginRight: '10px',

    }

});
