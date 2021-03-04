export function Options(tipo) {
    let { pk_tipousuario, tipo_usuario } = tipo;
    return `<option value = "${pk_tipousuario}" >
     ${tipo_usuario}
     </option >`;
}