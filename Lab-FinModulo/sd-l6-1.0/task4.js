// Task 4: delUser(number)
import { getServerURL } from './task1.js';

export async function delUser(id) {
    try {
        const url = `${getServerURL()}/users/${id}`;
        const respuesta = await fetch(url, {
            method: 'DELETE'
        });
        if (respuesta.ok) {
            console.log(`Usuario con ID ${id} eliminado con éxito.`);
        }
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
    }
}