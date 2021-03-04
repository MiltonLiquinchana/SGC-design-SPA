export function mostrarsweetAlertLoader(props){
    let{title,text}=props,sweet=document.querySelector(".swal2-container");
    sweet.querySelector(".swal2-title").textContent=title;
    sweet.style.display = "flex";
}