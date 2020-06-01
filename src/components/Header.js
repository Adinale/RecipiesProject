import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Main from './Main';
import RecipiesList from './recipiesList';
import AddRecipies from './addRecipies';
import About from './About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const styles = {
    buttonNav: {
        color: 'secondary',
        size: 'large',
    },
    headerStyle: {
        backgroundColor: 'black',
        display: 'flex',
    }
};
const Header = (props) => {
    return (
        <div style={styles.headerStyle}>
            <div id="logo">
                logoo
            </div>
            <div id="menu_header">
                {/* <Router> */}
                <Link to='/Main'><Button style={styles.buttonNav}>ראשי</Button></Link>
                <Link to='/recipiesList'><button color="white">מתכונים</button></Link>
                <Link to='/addRecipies'> <Button color="primary" size="large">הוספת מתכון</Button></Link>
                <Link to='/About'><Button color="primary" size="large"> מי אני</Button></Link>


                {/* </Router> */}
            </div>

        </div >
    );
};
export default withStyles(styles)(Header);