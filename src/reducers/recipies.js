const recipiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      let oldRecipies = state.recipies || [];
      const newRecipies = [...oldRecipies, action.recipe];
      return { ...state, recipies: newRecipies };
    case 'INITIAL_RECIPIES':
      return { ...state, recipies: action.recipies };

  }
};


export default recipiesReducer;
