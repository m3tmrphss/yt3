let  adaptiveContainer = document.querySelector(`#adaptive-container`);
let adaptiveLink = document.querySelector(`.header__adaptive-link`);
adaptiveLink.addEventListener(`click`, function(){
    adaptiveContainer.classList.toggle(`active`)
})