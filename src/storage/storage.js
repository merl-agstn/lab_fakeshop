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

//Seteo items en storage.
export function setItemLocalStorage(items){
    localStorage.setItem(stg_key,JSON.stringify(items));
}