// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from './task1.js';

export async function addUser(firstName, lastName, email) {
    try {
        const url = `${getServerURL()}/users`;
        const nuevoUsuario = {
            first_name: firstName,
            last_name: lastName,
            email: email
        };

        const respuesta = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoUsuario)
        });

        const usuarioCreado = await respuesta.json();
        
        
        const objetoOrdenado = {
            id: usuarioCreado.id,
            first_name: usuarioCreado.first_name,
            last_name: usuarioCreado.last_name,
            email: usuarioCreado.email
        };
        
        const textoJSON = JSON.stringify(objetoOrdenado, null, 2);
        const lineas = textoJSON.split('\n');
        const lineasCorregidas = lineas.map(linea => {
            if (linea.startsWith('    ')) return '  ' + linea.slice(4);
            return linea;
        });

        const resultadoFinal = lineasCorregidas.join('\n')
            .replace(/"/g, "'")
            .replace(/'(\w+)':/g, '\$1:');

        console.log(resultadoFinal);
        return usuarioCreado;
    } catch (error) {
        console.error('Error al añadir el usuario:', error);
    }
}