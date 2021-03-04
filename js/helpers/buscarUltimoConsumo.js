import { sweetAlertLoader } from "../components/sweetAlertLoader.js";
import { sweetAlertMessagePrincipal } from "../components/sweetAlertMessagePrincipal.js";
import { ajax } from "./ajax.js";
import server from "./server.js";

export async function buscarUltimoConsumo($select, $input) {
    let data = new FormData();
    data.append("accion", "buscarUltimoConsumo");
    data.append("pk_medidor", $select[0].value);
    sweetAlertLoader({
        title: "Cargando...",
        text: "Espere mientras se cargan los datos su peticion"
    });/*en esta peticion no se cierra el alert por que simplemente se tiene que abrir otro y se reemplaza */

    await ajax({
        url: server.SERVERDATE,
        cbSuccess: (consumo) => {
            consumo.error ? $input[4].value = "0" : $input[4].value = consumo.lectura_anterior
            $input[5].removeAttribute("disabled");
            $input[5].addEventListener("blur", calcular);
            
        },
        methodr: "POST",
        data: data
    });
    swal.close();/*con esto hacemos de cerrar el sweet alert */
    function calcular() {
        let textS, sb, showBTS;
        const valor4 = parseInt($input[4].value);
        const valor5 = parseInt($input[5].value);
        if ($input[5].value === "") {
            textS = "El valor ingresado no es valido";
            showBTS = [true, false];
            sb = function (result) {
                $input[6].value = "";
                $select[1].innerHTML = '';
                $select[1].innerHTML = `<option selected disabled value>Selecione un tipo de consumo</option>`;
                $input[9].value="";
            };
        } else {
            if (valor5 < valor4) {
                textS = "La lectura actual no puede ser menor a la lectura anterior";
                showBTS = [true, false];
                sb = function (result) {
                    $input[6].value = "";
                    $select[1].innerHTML = '';
                    $select[1].innerHTML = `<option selected disabled value>Selecione un tipo de consumo</option>`;
                    $input[9].value = "";
                };

            } else if (valor5 === valor4) {
                textS = "La lectura actual y la lectura anterior son iguales";
                showBTS = [true, true];
                sb = function (result) {
                    if (result.isConfirmed) {
                        listarTipoConsumo();
                    } else {
                        $input[6].value = "";
                        $select[1].innerHTML = '';
                        $select[1].innerHTML = `<option selected disabled value>Selecione un tipo de consumo</option>  `;
                        $input[9].value = "";
                    }
                }
            } else if (valor5 > valor4) {
                listarTipoConsumo();
            }
        }
        if ($input[5].value === "" || valor5 < valor4 || valor5 === valor4) {
            sweetAlertMessagePrincipal({
                showBtn: showBTS,
                sbSucces: (result) => {
                    sb(result);
                },
                colors: ["#3085d6", "#d33"],
                icon: "warning",
                title: "Advertencia",
                text: textS,
                textBtn: ["Continuar", "Cancelar"],
                timer: "",
                allowoutsideclick: false,
                imageUrl: "",
                html: ""
            });
        }

    }
   async function listarTipoConsumo() {
       sweetAlertLoader({
           title: "Cargando...",
           text: "Espere mientras se cargan los datos su peticion"
       });/*en esta peticion no se cierra el alert por que simplemente se tiene que abrir otro y se reemplaza */

        $input[6].value = $input[5].value - $input[4].value;
        data = new FormData();
        data.append("accion", "ListarTipoConsumo");
        data.append("valor", $input[6].value);
        await ajax({
            url: server.SERVERDATE,
            cbSuccess: (TipoConsumo) => {
                $select[1].innerHTML = '';
                $select[1].innerHTML = `<option disabled value>Selecione un tipo de consumo</option>  `;
                $select[1].innerHTML += `<option value="${TipoConsumo.pk_tipoconsumo}">${TipoConsumo.tipoConsumo}</option> `;
                $select[1].value=TipoConsumo.pk_tipoconsumo;
                $input[9].value = TipoConsumo.totalPagar;
            },
            methodr: "POST",
            data: data
        });
       swal.close();/*con esto hacemos de cerrar el sweet alert */
    }
}