import { sweetAlertMessagePrincipal } from "../components/sweetAlertMessagePrincipal.js";
import { ajax } from "./ajax.js";
import server from "./server.js";
import { App } from "../App.js";
import { sweetAlertLoader } from "../components/sweetAlertLoader.js";

export async function GuardarActualizar(accion, frm, id_comunero) {
    sweetAlertLoader({
        title:accion,
        text:"Espere mientras se procesa su peticion"
    });
    let data = new FormData(frm), mensageS = "",
        iconS = "",
        textS = "";
    data.append("accion", accion);
    data.append("pk_comuner", id_comunero);
    await ajax({
        url: server.SERVERDATE,
        cbSuccess: (mensage) => {
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
                sbSucces: (result) => {
                    if (result.isConfirmed) {
                        App();/*cuando se aga click en continuar se volvera a ejecutar app*/
                    }
                },
                colors: ["#3085d6", "#d33"],
                icon: iconS,
                title: mensageS,
                text: textS,
                textBtn: ["Continuar"],
                timer: "",
                allowoutsideclick: false, 
                imageUrl:""
            });
        },
        methodr: "POST",
        data: data
    });
    $("#staticBackdrop").modal("hide");/*ocultamos el modal */
}