export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (feature, car) => {
    return{
    type: ADD_FEATURE,
    payload: { feature, car }
};
};

export const removeFeature = (feature, car) => {
    return{
    type: REMOVE_FEATURE,
    payload: { feature, car }
};
};


