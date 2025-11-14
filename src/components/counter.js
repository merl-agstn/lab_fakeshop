//Agrego contador.
export function counter(id){
    let templateCount = `
        <div>
        <div class="d-flex justify-content-center align-items-center gap-3 my-3">
            <button id="decrementBtn-${id}" class="btn btn-gray">-</button>
            <span id="counter-${id}">1</span>
            <button id="incrementBtn-${id}" class="btn btn-gray">+</button>
        </div>
        </div>
    `;

    return templateCount;
}

//Agrego listeners.
export function addEventListeners(id){
    let btnIncrement = document.querySelector(`#incrementBtn-${id}`);
    let btnDecrement = document.querySelector(`#decrementBtn-${id}`);
    let spanCounter = document.querySelector(`#counter-${id}`);
    let b = 1;

    //Sumamos.
    btnIncrement.addEventListener(`click`, () => {
        b++;
        spanCounter.textContent = `${b}`;
    });

    //Restamos.
    btnDecrement.addEventListener(`click`,() => {
        if(b > 1){
            b--;
            spanCounter.textContent = `${b}`;
        }
        spanCounter.textContent = `${b}`;
    });

}

