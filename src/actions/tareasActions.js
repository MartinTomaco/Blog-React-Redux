import axios from 'axios';
import { TRAER_TODAS, CARGANDO, ERROR } from '../types/tareasTypes';

export const  traerTodas = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    });
    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos'); // tarea: To Do

        // respuesta es un arreglo de objetos no separados por usuario
        // quiero crear un nuevo objeto separado por las tareas de cada usuario
        const tareas = {};
        respuesta.data.map( (tar) => (
            tareas[tar.userId] = {
                ...tareas[tar.userId],
                [tar.id]: {
                    ...tar
                }
            }
        ));

        dispatch({
            type: TRAER_TODAS,
            payload: tareas,
    
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: `Informacion de tareas no disponible.`,
        })
    }

}