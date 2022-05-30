//1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
//fetch() para hacer una consulta a la api cuando se haga click en el botón, 
//pasando como parametro de la api, el valor del input.
//https://api.nationalize.io/?name=michael

//1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
//a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
//EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
//de MZ.

//1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
//de los p que hayas insertado y que si el usuario hace click en este botón 
//eliminemos el parrafo asociado.


const getDataFromApi = (url) => { //1.2
    return fetch(url)
        .then(response => response.json())
        .then(res => res)
        .catch(error => console.log('Error al recuperar dato de la API',error));
}

const eventButtonDelete = (event) => {
    event.target.parentElement.remove();
    
}

const writeResults = (message) => { //1.3
    const p$$ = document.createElement('p');
    document.body.appendChild(p$$);
    p$$.innerText = message;
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'X';
    p$$.appendChild(buttonDelete);
    buttonDelete.addEventListener('click', eventButtonDelete);
}

const extractData = (person) => {
    let messagePerson = `El nombre ${person.name} tiene un `;
    for( let i = 0; i < person.country.length; i++ ) {
        messagePerson += `${person.country[i].probability.toFixed(2)} % de ser de ${person.country[i].country_id}`;
        if (i < person.country.length - 2){
            messagePerson += `, `;
        }else if (i !== person.country.length - 1){
            messagePerson += ` y `;
        }
    }
    return messagePerson;
}

const init = () =>{
    const baseUrl = 'https://api.nationalize.io/?name=';
    const input = document.querySelector('input');
    const button = document.querySelector('button');  
    button.addEventListener('click', async() => {
        const person = await getDataFromApi(baseUrl + input.value);
        writeResults(extractData(person));
    })  
    
}

init();




