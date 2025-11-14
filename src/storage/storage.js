const stg_key = "id";

//Inicializo localstorage.
export function initLocalStorage(){
    if(!localStorage.getItem(stg_key)){
        localStorage.setItem(stg_key, JSON.stringify([]));
    }
}
//Traigo items al storage.
export function getLocalStorage(){
    return JSON.parse(localStorage.getItem(stg_key)) || [];
}
//Guardo en storage
export function saveLocalStorage(item){
    let cart = getLocalStorage();
    cart.push(item);
    localStorage.setItem(stg_key,JSON.stringify(cart));
}