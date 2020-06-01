export const addRecipe = (resultObj) => {
    return {
        type: 'ADD_RECIPE',
        recipe: resultObj
    };
};

export const initialRecipies = (resultArray) => {
    return {
        type: 'INITIAL_RECIPIES',
        recipies: resultArray
    };
};
