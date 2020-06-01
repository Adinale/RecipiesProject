import React, { useState } from 'react';
import store from '../store/store';
import { addRecipe } from '../actions/recipies';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

const AddRecipies = (props) => {
    const [recipe, setRecipy] = useState({ name: '', time: '03:30' })

    const handleChange = (event) => {
        const newObject = { ...recipe, name: event.target.value };
        setRecipy(newObject);
    }
    let history = useHistory();
    const onSubmit = () => {
        Axios.post('http://localhost:3000/addRecipe', recipe).then(result => {
            history.push("/Main")
            store.dispatch(addRecipe(result.data));
        });
    }

    return (
        <div>
            <TextField value={recipe.name} onChange={handleChange} />
            <button onClick={onSubmit}>אישור</button>
        </div>
    );
};

export default AddRecipies;