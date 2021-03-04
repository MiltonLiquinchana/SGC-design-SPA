import { sweetAlertLoader } from "../components/sweetAlertLoader.js";
import { sweetAlertMessagePrincipal } from "../components/sweetAlertMessagePrincipal.js";
import { ajax } from "./ajax.js";
import server from "./server.js";

export async function search_dataPersonConsumos($input, $select) {
    sweetAlertLoader({
        title: "Cargando...",
        text: "Espere mientras se cargan los datos"
    });/*en esta peticion no se cierra el alert por que simplemente se tiene que abrir otro y se reemplaza */

    let data = new FormData();
    data.append("accion", "buscarSocioConsumo");
    data.append("dato", $input[0].value);
    await ajax({
        url: server.SERVERDATE,
        cbSuccess: (comunero) => {
            if (comunero[0].error) {
                sweetAlertMessagePrincipal({
                    showBtn: [true, false],
                    sbSucces: () => {
                        return false;
                    },
                    colors: ["#3085d6", "#d33"],
                    icon: "info",
                    title: "Registro no encontrado",
                    text: "",
                    textBtn: ["Continuar"],
                    timer: "",
                    allowoutsideclick: false,
                    imageUrl: "",
                    html: '1.-Intente por el numero de cedula <br>' +
                        '2.-Verifique el criterio de busqueda <br>' +
                        '3.-Verifique que la persona se encuentre registrada <br>' +
                        '4.-Verifique que la persona tenga minimo un medidor'
                });
                console.log("no se a podido encontrar los datos necesarios");
            } else {
                //primero agregamos lo obtenido en la posicion 0 a el formulario
                $input[2].value = comunero[0].cedula;
                $input[3].value = comunero[0].primer_nombre + " " + comunero[0].segundo_nombre + " " + comunero[0].primer_apellido + " " + comunero[0].segundo_apellido;
                comunero.splice(0, 1);//eliminamos un elemento comensando desde la posicion 0(posicion, numero de elementos)
                $select[0].innerHTML = '';
                $select[0].innerHTML = `<option selected disabled>Seleccione un medidor</option>`;
                for (let medidor of comunero) {
                    let option = document.createElement("option");
                    option.value = medidor.pk_medidor;
                    option.textContent = medidor.numero_medidor;
                    $select[0].appendChild(option);
                };
                swal.close();
            }
        },
        methodr: "POST",
        data: data
    });
  
}