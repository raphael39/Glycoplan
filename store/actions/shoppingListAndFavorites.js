export const ADD_ITEM_TOLIST = 'ADD_ITEM_TOLIST';
export const DELETE_ITEM_FROMLIST = 'DELETE_ITEM_FROMLIST';
export const FILTER_RECOMMENDATIONS = 'FILTER_RECOMMENDATIONS';

export const addItemToList = (Grocery) => {
    return { type: ADD_ITEM_TOLIST, ItemTitle: Grocery.title, colorCode: Grocery.color};
};

export const deleteItemFromList = (id) => {
    return { type: DELETE_ITEM_FROMLIST, ItemID: id};
}

export const filterRecommendations = (title) => {
    return { type: FILTER_RECOMMENDATIONS, itemTitle: title}
}

