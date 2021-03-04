

export function tablaSocios(props){
    let $table=document.createElement("div");
    $table.id ="tableSocios";
    $table.innerHTML=`
    
    <table id="example" class="table">
        <thead class="theadtbSocios">
            <tr>
                <th class="thtbSocios-id">#</th>
                <th class="thtbSocios-acciones">Acciones</th>
                <th class="thtbSocios-cedula">Cedula</th>
                <th class="thtbSocios-nombre">Nombres y Apellidos</th>
                <th class="thtbSocios-telefono">Telefono</th>
                <th class="thtbSocios-edad">Edad</th>
            </tr>
        </thead>
        <tbody>
            ${props}
        </tbody>
        <caption id="capbtn-agregar">
            <button class="btn btn-primary btnagregar" id="btn_Registrarnuevo">Agregar nuevo
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square-fill" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
                </svg>
            </button>
        </caption>
    </table>
    `;
    return $table;
}