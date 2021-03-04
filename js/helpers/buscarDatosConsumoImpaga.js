import { sweetAlertLoader } from "../components/sweetAlertLoader.js";
import { ajax } from "./ajax.js";
import server from "./server.js";

export async function buscarDatosConsumoImpaga($select,$input) {
    sweetAlertLoader({
        title: "Cargando...",
        text: "Espere mientras se cargan los datos su peticion"
    });/*en esta peticion no se cierra el alert por que simplemente se tiene que abrir otro y se reemplaza */
    let data = new FormData();
    data.append("accion", "buscarDatosConsumoImpaga");
    data.append("fkconsumo", $select[1].value);
    await ajax({
        url: server.SERVERDATE,
        cbSuccess: (consumo) => {
            $input[4].value = consumo.consumo_mcubico;
            $input[5].value = consumo.tipo_consumo;
            $input[6].value = consumo.fecha_lectura;
            $input[7].value = consumo.fecha_limite_pago;
            $input[9].value = consumo.subtotal;
            $input[10].value = consumo.tipo_multa;
            $input[11].value = consumo.valor_multa;
            $input[12].value = calculardiasRetraso(consumo.fecha_limite_pago);/*hay que calcular*/
            $input[13].value = consumo.valor_multa * calculardiasRetraso(consumo.fecha_limite_pago);/*hay que calcular*/
            $input[14].value = consumo.tarifa_ambiente;
            $input[15].value = consumo.alcantarillado;
            $input[16].value = (parseFloat(consumo.subtotal) + parseFloat($input[12].value) + parseFloat($input[13].value) + parseFloat($input[14].value)).toFixed(2);/*calculamos el total a pagar*/
        },
        methodr: "POST",
        data: data
    });
    swal.close();
    function calculardiasRetraso(fechainicial) {
        let fechaini = new Date(fechainicial),
         fechaactual = new Date(),
         dias;
        if (fechaactual > fechaini) {
            var transcurso = fechaactual.getTime() - fechaini.getTime();
            dias = parseInt(transcurso / (1000 * 60 * 60 * 24));
            //        console.log(parseInt(transcurso / (1000 * 60 * 60 * 24)));//es lo mismo que hacer abajo por separado
        } else if (fechaactual <= fechaini) {
            dias = 0;
            //        console.log("no hay dias de retraso");
        }
        return dias;
    }
}