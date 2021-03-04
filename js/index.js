import { App } from "./App.js";
import { menuPaginaPrincipal } from "./menu/menuPaginaPrincipal.js";
/*decimos que cuando el dom del documento se haya cargado ejecutaremos la funcion de App */
document.addEventListener("DOMContentLoaded",App);
window.addEventListener("hashchange",()=>{
    App();
    menuPaginaPrincipal();
});