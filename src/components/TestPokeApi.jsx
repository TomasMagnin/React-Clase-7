import React, { useEffect, useState } from 'react';


export default function TestPokeApi() {

     
        // Fetch() Todo lo que coloquemos en el fetch se ejecuta indefinidamente. 
        // Para hacerlo solo por primera vez cuando se monta el componente usamos el useEffect(). 

    /* let arrayDePokes; */                                 // Creamos esta variable para meter el resultado del fetch aca adento.
        
    const [arrayDePokes, setArrayDePokes] = useState([]);    // Declaramos la variable como estado, para que cuando cambie un valor se renderiza el componente, sea observada por React para monitorear cambios.

    useEffect(() => {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0") // Consultamos la appi con el metodo de JS fetch().
            // En fetch siempre se usan dos then, ya que el primer resultado es parcial, y hay que convertirlo a JSON.
            
            .then(res => res.json())                // Convertimo la respuesta a formato JSON.
            .then((resJson) => {                    // Aca tenemos la respuesta convertida a formato JSON
                console.log(resJson);
                /* arrayDePokes = resJson; */       // Esta varible comun no nos sirve, para usar el Hook, en useState.
                setArrayDePokes(resJson.results);
            })                             
            .catch((e) => {                             
                console.log(e);                     // Hacemos un log del error si sale mal.
            })
            .finally(() => {
                console.log("Ya termino todo!");
            });
        }, []);


    // Una vez que se crearon todos los elementos, hay que despertar a React, para que monte la info del fetch y se vea en la pantalla, para ello usamos el HOOK useState. guarda la informacion y la muestra. 
    // Usamos el useState() para que React pueda montar toda la informacion cuando llegue, luego de montar el compomemte.

    



    // Todo lo que queremos en el DOM de react va en el return.
    // Siempre hay que mapear el contenido, antes de colocarlo en el DOM de react e indicarle en que etiquetas va cada conteido..
    // En cada item del array que devuelve el Fetch generamso el contenido dentro del Map, si lo hacemos antes del return al map, hay que crear una variable para asignar el map y colocamos la variable en el return, pero se hace dentro del resturn siempre.   
    // Siempre que se repiten muchos hijos iguales hay que colocarles una key para diferenciarlos, en este caso usamos el identificador pero no es buena practica por que no es unico el identificador, pero deja de aparecer el error en el log.
    return (
    <div>{arrayDePokes.map((item, i) => (              
        <div key={i}>
            <h2>{item.name}</h2>
            <p>url = {item.url}</p>
            
        </div>
    ))}
    </div>
  );
} 



// Detalle para la segunda ENTREGA

  //ItemDatailContainer (genera los datos es el padre contenedor)
  // tiene un useeffect que espera dos segundos hasta que la promesa...
  //... devuelve un producto (item) (objeto) para guardalo en un estado...
  //... luego paso por props el estado al hijo que solo...
  //... se encarga de mostrar: seria el ItemDetail.js