export function sweetAlertMessagePrincipal(props) {
    /*
    colors: tiene un arreglo con los colores para el boton confirmar, y otro para el boton cancelar
    showBtn: el mismo orden confirmar y cancelar
    */
    let { showBtn, sbSucces, colors, icon, title, text, textBtn, timer, allowoutsideclick, imageUrl, html } = props;
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showConfirmButton: showBtn[0],
        showCancelButton: showBtn[1],
        confirmButtonColor: colors[0],
        cancelButtonColor: colors[1],
        confirmButtonText: textBtn[0],
        cancelButtonText: textBtn[1],
        timer: timer,
        //heightAuto: false
        /*este establece si el heigth debe o no ser auto esto soluciona el problema del sweet
        sin tener que poner yo el style 100% !important, por el momento estara comentado */
        allowOutsideClick: allowoutsideclick,
        allowEscapeKey: false,
        imageUrl: imageUrl,
        html: html
    }).then((result) => {
        if (result.isConfirmed) {
            sbSucces(result);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            sbSucces(result);
        }
    })
    /*asemos que cuando se muestre el sweetalert nos ponga en heigth de 100% !important
    para que nos anule es estilo de height automatico que nos pone el sweet */
    document.querySelector("body").style = "height: 100% !important";

}