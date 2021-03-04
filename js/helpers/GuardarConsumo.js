import { sweetAlertLoader } from "../components/sweetAlertLoader.js";
import { sweetAlertMessagePrincipal } from "../components/sweetAlertMessagePrincipal.js";
import { ajax } from "./ajax.js";
import server from "./server.js";

export async function GuardarConsumo($form) {
    sweetAlertLoader({
        title: "Guardando",
        text: "Espere mientras se procesa su peticion"
    });/*en esta peticion no se cierra el alert por que simplemente se tiene que abrir otro y se reemplaza */

    let data = new FormData($form), mensageS = "",
        iconS = "",
        textS = "";
    data.append("accion", "guardarConsumo"); 
    await ajax({
        url:server.SERVERDATE,
        cbSuccess: (mensage)=>{
            if (mensage.message === "Completado") {
                iconS = "success";
                textS = "La accion se a completado con exito";
            } else if (mensage.message === "Error") {
                iconS = "error";
                textS = "La accion no se a completado con exito";
            }
            mensageS = mensage.message;
            sweetAlertMessagePrincipal({
                showBtn: [true, false],
                sbSucces: () => {
                },
                colors: ["#3085d6", "#d33"],
                icon: iconS,
                title: mensageS,
                text: textS,
                textBtn: ["Continuar"],
                timer: "",
                allowoutsideclick: false,
                imageUrl: ""
            });
        },
        methodr:"POST",
        data
    });
   
}