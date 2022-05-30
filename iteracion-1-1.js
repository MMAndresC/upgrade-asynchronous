//Iteración #1: Fetch

//1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
//hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
//console.log(). Para ello, es necesario que crees un .html y un .js.

const obtainDataFromApi = async() => {
    return fetch ('https://api.agify.io?name=michael')
        .then ((response) => response.json())
        .then((person)=> person)
        .catch(error => console.log('No se ha podido recuperar el dato de la API',error));
}

const init = async() => {
    const data = await obtainDataFromApi();
    console.log(data);
}

init();
