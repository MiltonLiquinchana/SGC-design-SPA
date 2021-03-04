import { sweetAlertLoader } from "../components/sweetAlertLoader.js";
import { sweetAlertMessagePrincipal } from "../components/sweetAlertMessagePrincipal.js";
import { ajax } from "./ajax.js";
import server from "./server.js";

export async function guardarDatosPagoConsumo($frmREPagoAgua) {
    sweetAlertLoader({
        title: "Guardando...",
        text: "Espere mientras se procesa su peticion"
    });
    let data = new FormData($frmREPagoAgua), mensageS = "",
        iconS = "",
        textS = "";
    data.append("accion", "guardarDatosPagoConsumo");
    await ajax({
        url: server.SERVERDATE,
        cbSuccess: (mensage) => {
            if (mensage.message === "Completado") {
                iconS = "success";
                textS = "La accion se a completado con exito";
                document.cookie = "consumo=" + $frmREPagoAgua.querySelectorAll("select")[1].value + ";path=/;";
                $frmREPagoAgua.querySelectorAll("button")[1].removeAttribute("disabled");
            } else if (mensage.message === "Error") {
                iconS = "error";
                textS = "La accion no se a completado con exito";
            }
            mensageS = mensage.message;
            sweetAlertMessagePrincipal({
                showBtn: [true, false],
                sbSucces: (result) => {
                   return false;
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
        methodr: "POST",
        data: data
    });
}