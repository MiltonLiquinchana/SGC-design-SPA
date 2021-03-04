export function Loader() {
    const $loader = document.createElement("img");
    $loader.src = "../../icons/components/loader.svg";
    $loader.alt = "Cargando...";
    $loader.classList.add("loader");
    return $loader;
}