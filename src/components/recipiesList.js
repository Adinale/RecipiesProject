import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import store from '../store/store';
import { initialRecipies } from '../actions/recipies';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const RecipiesList = (props) => {
    useEffect(() => {
        axios.get('http://localhost:3000/RecipiesList').then(response => {
            console.log(response);
            store.dispatch(initialRecipies(response.data));
        })
    }, []);

    return (
        <div>
            <Link to='/Main'><Button style={styles.buttonNav}>ראשי</Button></Link>
            {props.myRecipies.map(recipe => {
                return <div style={styles.itemWrapper} key={recipe._id}>{recipe.name}</div>
            })}
        </div>
    );
};

const styles = {
    itemWrapper: {
        width: 50,
        cursor: 'pointer',
        padding: 15,
        marginTop: 10,
        border: '1px solid black'
    },
    title: {

    }
}
//.then(response => this.setState({ movies: response.data.data }))

const mapStateToProps = (state) => {
    return {
        myRecipies: state ? state.recipies : []
    };
};

export default connect(mapStateToProps)(RecipiesList);