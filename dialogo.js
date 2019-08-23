var turno = parseInt(Math.random() * (0,4));
var turno2 = parseInt(Math.random() * (0,4));


window.addEventListener("load", function () {    
    grupo1.personas[turno].hablar();
});


class Grupo {
    constructor(personas) {
        this.personas = personas
    }
}


class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    

    hablar() {
        let counter = 0;


            
        if (grupo1.personas[turno] !== grupo1.personas[turno2]) { 
                console.log("Hola soy " + grupo1.personas[turno].nombre + " cómo te llamas tú?");
           
                setTimeout( () => {
                    console.log("Hola mucho gusto conocerlos, soy " + grupo1.personas[turno2].nombre);
                },1000)
            }

            
          
        }

      
            
        }


const persona1 = new Persona("Santiago", "Valle");
const persona2 = new Persona("Manuel", "Martinez");
const persona3 = new Persona("Orlyn", "Rosales");
const persona4 = new Persona("Alejandro", "Velásquez");


const grupo1 = new Grupo([persona1, persona2, persona3, persona4]);

