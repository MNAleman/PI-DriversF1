//importacion de las actions-types

//intial state:
let initialState = {
    allDrivers: [],
    allTeams: [],
};

//definir la funcion rootReducer:

function rootReducer(state = initialState, actions) {
    switch (actions.type) {
        case "GET_DRIVERS":
            return {
                ...state,
                allDrivers: actions.payload
            }
        case "GET_TEAMS":
            return {
                ...state,
                allTeams: actions.payload
            }
        default:
            return state
    }

}

export default rootReducer;