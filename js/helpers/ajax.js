import { sweetAlertLoader } from "../components/sweetAlertLoader.js";
import { sweetAlertMessagePrincipal } from "../components/sweetAlertMessagePrincipal.js";

export async function ajax(props) {/*esta funcion recibira propiedades en un objeto*/
    let { url, cbSuccess, methodr, data } = props;/*destructuramos el objeto*/
    await fetch(url, {
        method: methodr,
        mode: 'cors',
        body: data
    })/*decimos que si en la respuesta hay la propiedad ok entonces(?) convierta en json caso contrario(:) rechase la promesa */
        .then(res =>res.ok ? res.json() : Promise.reject(res))
        /*en caso de que no se rechaze la promesa le enviamos los datos obtenidos 
        a la funcion que recivimos en el props objeto*/
        .then(response => {
            console.log("ajax api:",response);
            cbSuccess(response);
          
        })
        /*esto se ejecuta en caso de que se rechaze la promesa*/
        .catch(error => {
            /*configuramos un mensaje de error predeterminado
          la variable local le decimos que es igual a si el error trae la propiedad estatusText configurada entonces ese seria el error
          else(||) le ponemos un mensaje generico "Ocurrio un error al acceder a la API"*/
            let message = error.statusText || "Ocurrio un error al acceder a la API";
            /*agregamos ese mensaje al elemento donde se cargara las vistas*/
            document.getElementById("contenido").innerHTML = `<div class="error">
            <p>Error ${error.status}: ${message}</p>
            </div>`;
            //sweetAlertMessagePrincipal({
            //    showBtn: [true, false],
            //    sbSucces: "",
            //    colors: ["dc3545", "dc3545"],
            //    icon: "error",
            //    title: "Error",
            //    text: err.status + " " + message,
            //    textBtn: ["Continuar", "Cancelar"],
            //    timer: "",
            //    allowoutsideclick: false,
            //    imageUrl: "",
            //    html: ""
            //});
            swal.close();
            console.error("Error:", error);
            /*este loader estara mostrandoce mientras se procesa la peticion hacique una ves que se carge la respuesta de la api ocultamos este elemento
            este en caso de que sucesa un error al procesar la peticion en caso de funcionar se lo ara en el router*/
            document.querySelector(".loader").style.display = "none";
            /*al finalizar es bueno mostrar por consola el mensaje de error que nos manda fetch*/
          
        });
}