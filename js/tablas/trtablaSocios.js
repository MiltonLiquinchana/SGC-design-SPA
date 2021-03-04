export function trtablaSocios(props) {

    let { pk_comunero, cedula, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, telefono, edad } = props;
    if (props.error) {
        console.log(props);
    } else {
        return `
    <tr>
                <td>${pk_comunero}</td>
                <td>
                    <a class="editar btn btn-warning" role="button" aria-pressed="true"
                        style="width: 30px; height: 30px; padding: 0px; border: 0px; margin: 0px;"> <img
                            src="../../icons/tablas/lapiz.svg" alt="Editar"
                            style="width: 20px; height: 20px; padding: 0px; border: 0px; margin: 0px;" id="btn_editarR">
                    </a>
                    <!--boton eliminar-->
                    <a class="eliminar btn btn-danger" role="button" aria-pressed="true"
                        style="width: 30px; height: 30px; padding: 0px; border: 0px; margin: 0px;" id="btn_eliminarR">
                        <img src="../../icons/tablas/basura.svg" alt="Eliminar"
                            style="width: 20px; height: 20px; padding: 0px; border: 0px; margin: 0px;"> </a>
                </td>
                <td>${cedula}</td>
                <td>${primer_apellido} ${segundo_apellido} ${primer_nombre} ${segundo_nombre}</td>
                <td>${telefono}</td>
                <td>${edad}</td>
            </tr>
    `

    }




}