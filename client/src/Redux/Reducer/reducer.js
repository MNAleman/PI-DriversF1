//importacion de las actions-types
import { GET_DRIVERS, PAGINATION, SEARCH_DRIVER, GET_BY_ID } from "../Actions/actions-types";

//intial state:
let initialState = {
    allDrivers: [],
    allDriversBacUp: [],
    allTeams: [],
    driversFiltered: [],
    currentPage:0
    
};

//definir la funcion rootReducer:

function rootReducer(state = initialState, action) {
    const ITEMS_PER_PAGE = 9;
    switch (action.type) {
        case GET_BY_ID:
            return {
              ...state,
              driverId: action.payload,
            }
        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: [...action.payload].splice(0, ITEMS_PER_PAGE),
                allDriversBacUp: [...action.payload],
            }

            case SEARCH_DRIVER:
                return {
                    ...state,
                    allDrivers: [...action.payload].splice(0, ITEMS_PER_PAGE)
                }
        case PAGINATION:
            const next_page = state.currentPage + 1;
            const prev_page = state.currentPage - 1;
            const firstIndex= action.payload === 'next' ? next_page * ITEMS_PER_PAGE : prev_page * ITEMS_PER_PAGE;



            if(action.payload === 'next' && firstIndex >= state.allDriversBacUp.length) return state;
            if(action.payload === 'prev' && firstIndex < 0) return state;

            return {
                ...state,
                allDrivers:[...state.allDriversBacUp].splice(firstIndex, ITEMS_PER_PAGE),
                currentPage: action.payload === 'next' ? next_page : prev_page
            }

        default: return state
            break;
    }

}

export default rootReducer;