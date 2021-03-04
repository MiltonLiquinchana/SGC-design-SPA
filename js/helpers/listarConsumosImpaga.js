import { sweetAlertLoader } from "../components/sweetAlertLoader.js";
import { sweetAlertMessagePrincipal } from "../components/sweetAlertMessagePrincipal.js";
import { ajax } from "./ajax.js";
import server from "./server.js";

export async function listarConsumosImpaga($select){
    sweetAlertLoader({
        title: "Cargando...",
        text: "Espere mientras se cargan los datos su peticion"
    });/*en esta peticion no se cierra el alert por que simplemente se tiene que abrir otro y se reemplaza */

    let data = new FormData();
    data.append("accion", "ListConsumoImpaga");
    data.append("fk_medidor", $select[0].value);
    await ajax({
        url: server.SERVERDATE,
        cbSuccess: (consumos) => {
            if (consumos[0].error){
                sweetAlertMessagePrincipal({
                    showBtn: [true, false],
                    sbSucces: (result) => {
                        return false;
                    },
                    colors: ["#3085d6", "#d33"],
                    icon: "success",
                    title: "Registros no encontrados",
                    text: "A la actualidad no tiene deudas",
                    textBtn: ["Continuar"],
                    timer: "5000",
                    allowoutsideclick: false,
                    imageUrl: ""
                });
                $select[1].innerHTML = '';
                $select[1].innerHTML = `<option disabled selected value>Seleccione un consumo</option>`
            }else{
                $select[1].innerHTML = '';
                $select[1].innerHTML = `<option disabled selected value>Seleccione un consumo</option>`
                for (let consumo of consumos) {
                    const event = new Date(consumo.fecha_lectura),
                        options = { month: 'long' };
                    let anio = event.getFullYear(),
                        option = document.createElement("option");
                    option.value = consumo.pk_consumo;
                    option.textContent = convfirstLetterMayus(event.toLocaleDateString(undefined, options).toLowerCase()) + " " + anio;
                    $select[1].appendChild(option);
                };
                swal.close();/*con esto hacemos de cerrar el sweet alert */
            }
            
        },
        methodr: "POST",
        data: data
    });
    
    function convfirstLetterMayus(string) {
        /*extrams la primera letra de la cadena y la convertimos a mayuscula, seguido
         * con slice tomamos el valor de la cadena empezando desde el indece  1*/
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}