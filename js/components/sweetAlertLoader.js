import { sweetAlertMessagePrincipal } from "./sweetAlertMessagePrincipal.js";

export function sweetAlertLoader(props){
    let {title,text}=props
    sweetAlertMessagePrincipal({
        showBtn: [false, false],
        sbSucces: "",
        colors: "",
        icon: "",
        title: title,
        text: text,
        textBtn: "",
        timer: "",
        allowoutsideclick: false,
        imageUrl: "../../icons/components/loaderBlack.svg",
        html: ""
    });/*este sweet alert nos sirve para simular la lentitud de una red */
}