// Task 2: listUsers()
import { getServerURL } from './task1.js';

export async function listUsers() {
    try {
        const url = `${getServerURL()}/users`;
        const respuesta = await fetch(url);
        const usuarios = await respuesta.json();
        
        const textoJSON = JSON.stringify(usuarios, null, 2);
        const lineas = textoJSON.split('\n');
        
        //Sangrías y espacios corregidos
        const lineasCorregidas = lineas.map(linea => {
            
            if (linea.startsWith('  {') || linea.startsWith('  }') || linea.startsWith('  },')) {
                return linea.slice(2);
            }
            
            if (linea.startsWith('    ')) {
                return '  ' + linea.slice(4);
            }
            return linea;
        });

        const resultadoFinal = lineasCorregidas.join('\n')
            .replace(/"/g, "'")           
            .replace(/'(\w+)':/g, '\$1:');

        console.log(resultadoFinal);
    } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
    }
}