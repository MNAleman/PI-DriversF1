import axios from "axios";


//importa las actions types
import { GET_DRIVERS, SEARCH_DRIVER, PAGINATION, RESET, GET_BY_ID } from "./actions-types";


//Paginado: 9 drivers por pagina
//actions creators

export function getById (id){
    return async function (dispatch){
        try{
            const response = await axios.get(`http://localhost:3001/drivers/${id}`);
            const driverId = response.data;
            dispatch({
                type: GET_BY_ID,
                payload: driverId
            });
        }catch(error){
            alert(error.response.data.error)
        }
        }
    }

export function postDriver(state) {
    return async function (dispatch) {
        try {
            await axios.post("http://localhost:3001/drivers", state)

        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function getDriver() {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/drivers")
            dispatch({
                type: GET_DRIVERS,
                payload: response.data
            })

        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function changePage(order){
    return async function (dispatch){
        try{
            dispatch({
                type: PAGINATION,
                payload: order
            })
        }catch(error){
            alert(error.response.data.error)
        }
    }
}

export function searchDriver(driver) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/drivers?name=${driver}`)
            dispatch({
                type: SEARCH_DRIVER,
                payload: response.data
            })

        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function restart(){ // order <= podere que seleccione en el select
    return async function(dispatch){
        try {
        dispatch(
            {type:RESET}
        )
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}