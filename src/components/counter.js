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

export function addEventListeners(id){
    let btnIncrement = document.querySelector(`#incrementBtn-${id}`);
    let btnDecrement = document.querySelector(`#decrementBtn-${id}`);
    //let spanCounter = document.querySelector(`#counter-${id}`);

    btnIncrement.addEventListener(`click`, () => {
        console.log(`incrementé`);
    });

    btnDecrement.addEventListener(`click`,() => {
        console.log(`decremente`);
    });

}

