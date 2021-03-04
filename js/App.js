import { Loader } from "./components/Loader.js";
import { Message } from "./components/Message.js";
//import { sweetAlertLoader } from "./components/sweetAlertLoader.js";
import { menuPaginaPrincipal } from "./menu/menuPaginaPrincipal.js";
import { Router } from "./Router.js";

export function App(){
    /*esta funcion se ejecuta cuando el dom del documento se haya cargado completamente */
/*recordar cuando se hace referencia a un elemento de dom
 hay que anteponer el signo de dolar $ */
    const $root = document.getElementById("contenido");
    $root.innerHTML=null;//primero limpiamos lo que tenga en su interior
    $root.appendChild(Loader());//agregamos el Loader
    menuPaginaPrincipal();
    $root.appendChild(Message())
    Router();
   
}