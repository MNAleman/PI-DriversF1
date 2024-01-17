//importa las actions types
import axios from "axios";

//actions creators

export function postDriver(state) {
    return async function(dispatch) {
       await axios.post("http://localhost:3001/drivers", state)
    }
}