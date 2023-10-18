

/* 
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB,
titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

  - Todos los datos del objeto son obligatorios.

  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.

  - Valida que el título no rebase los 100 caracteres.

  - Valida que el director no rebase los 50 caracteres.

  - Valida que el año de estreno sea un número entero de 4 dígitos.

  - Valida que el país o paises sea introducidos en forma de arreglo.

  - Valida que los géneros sean introducidos en forma de arreglo.

  - Valida que los géneros introducidos esten dentro de los géneros aceptados*.

  - Crea un método estático que devuelva los géneros aceptados*.

  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.

  - Crea un método que devuelva toda la ficha técnica de la película.

  - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica 
  de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, 
History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */



//peliculas
const peliculas = [
  {
    id:"as1234567",
    title:"lat-man",
    director:"Lautaro Toledo",
    añoDeEstreno:2010,
    paisDeOrigen:["Argentina"],
    generos:["Action"],
    clasificacion:10,
  },
  {
    id:"LA1234567",
    title:"lorenzozo",
    director:"Lore peñalver",
    añoDeEstreno:2000,
    paisDeOrigen:["Argentina"],
    generos:["Action","Adult"],
    clasificacion:1,
  },
  {
    id:"JP1234567",
    title:"supermario",
    director:"Facundo",
    añoDeEstreno:2100,
    paisDeOrigen:["Argentina"],
    generos:["Action"],
    clasificacion:0,
  }
]
//paises
const paises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia ","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia", "Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá ","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia ","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia" ,"Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India ","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania ","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein", "Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia ","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega", "Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda ","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal", "Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza ","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía"," Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"]
//generos
const generosAceptados = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film" ,"Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]; 
class Pelicula {
  constructor(id,title,director,añoDeEstreno,paisDeOrigen,generos,clasificacion){
  
    this.id = id;
    this.title = title;
    this.directo = director;
    this.añoDeEstreno = añoDeEstreno;
    this.paisDeOrigen = paisDeOrigen;
    this.generos = generos;
    this.clasificacion = clasificacion;
    
    
  }
}; 

class Peliculas {
  constructor(nombre,siguientePelicula){
      this.nombre = nombre;
      this.siguientePelicula = null;
  }


  createMovies(id,title,director,añoDeEstreno,paisDeOrigen,generos,clasificacion){
    const newNode = new Pelicula(id,title,director,añoDeEstreno,paisDeOrigen,generos,clasificacion);

//validaciones

    if (!id ||!title ||!director ||!añoDeEstreno ||!paisDeOrigen ||!generos ||clasificacion == undefined || clasificacion == null) {
      return console.error("ingrese todos los parametros pedidios");
    }
    //id
    if (!id.length == 9) {
      return console.error("id = a 9 caracteres");
    }else if (id) {
      let idItemns = id.toString();
      let item1 = idItemns.slice(0,2);
      let item2 = idItemns.slice(2,9);
      console.log(idItemns);
      if (/[0-9-_´,.:;&%#!]/.test(item1)) {
        return console.log("id invalido, tu id necesita contener dos letras al principio y terminar con 7 numeros")
      }else if (/[a-zA-Z-_´,.:;&%#!]/.test(item2)) {
        return console.log("id invalido, tu id necesita contener dos letras al principio y terminar con 7 numeros")
      }
    }

    //title
    if (title.length >= 100) {
      return console.log("tu titulo no puede sobrepasar los 100 caracteres");
    }

    //director
    if (typeof director !== "string") {
      return console.log("no puedes colocar numeros en un nombre");
    }else if (director.length >= 50) {
      return console.log("el nombre del director no puede sobrepasar los 50 caracteres");
    }

    //añoDeEstreno
    if (typeof añoDeEstreno !== "number") {
      return console.log("porfavor coloque el año solamente en numeros");
    }
    if (añoDeEstreno) {
      let verific = añoDeEstreno.toString();
      if (verific.length < 4 || verific.length > 4) {
        return console.log("El año de extreno debe contener un total de 4 caracteres.");
      } 
      if (/[a-zA-Z.]/.test(verific)) {
        return console.log("Porfavor solamente numeros enteros");
      }
    }
    //paisdeorigen
    if (Array.isArray(paisDeOrigen)) {
      for (let i = 0; i < paisDeOrigen.length; i++) {
        const element = paisDeOrigen[i];
        if (!paises.includes(element)) {
          return console.log("porfavor introdusca un pais existente");
        }
      }
    }else {
      return console.log("porfavor introdusca el pais en un array");
    }

    //generos
    if (Array.isArray(generos)) {
      for (let i = 0; i < generos.length; i++) {
        const element = generos[i];
        if (!generosAceptados.includes(element)) {
          return console.log("porfavor introdusca un genero Aceptado");
        }
      }
    }else{
      return console.log("porfavor introdusca el genero en un array");
    }

    //clasificacion
    if (typeof clasificacion !== "number") {
      return console.log("Tu calificacion tine que ser numeros");
    }else if (clasificacion < 0 || clasificacion > 10) {
      return console.log("Tu calificacion tiene que ser entre 0 y 10");
    }
    
    
    
    if (this.nombre === undefined) {
      this.nombre = newNode;
      this.siguientePelicula = {siguientePelicula: this.siguientePelicula};

    }else {
      this.siguientePelicula = {nombre:newNode, siguientePelicula: {...this.siguientePelicula}};
    }
    return this
  }

  generosAceptados(){
    return console.log(generosAceptados);
  };

  StructuraDePelicula(){
    return console.log(Pelicula);
  }

  arrayDePeiculas(array) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      this.createMovies(element.id,element.title,element.director,element.añoDeEstreno,element.paisDeOrigen,element.generos,element.clasificacion);
    }
  }
} 
let PeliculaList = new Peliculas();

/* PeliculaList.createMovies("la1237867","25lqaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaujtaro","25laujtaro","25laujtaro","25laujtaro","25laujtaro","25laujtaro");  
PeliculaList.createMovies("la1237z67","25laujtaro","25laujtaro","2004","25laujtaro","acc","25laujtaro");  
PeliculaList.createMovies("ab1237167","25laujtaro","25laujtaro", 2225,["Argentina"],["Action","Adult"],"25laujtaro");  
PeliculaList.createMovies("ab1237167","25laujtaro","25laujtaro", 2225,"Argentina","Action","25laujtaro");
 */  
PeliculaList.createMovies("ab1237167","25laujtaro","25laujtaro", 2225,["Argentina"],["Action","Adult"],1.5);   

PeliculaList.arrayDePeiculas(peliculas);



console.log(PeliculaList);