const btnContainer = document.querySelector('.button__container');
let choiceBtnS = btnContainer.querySelectorAll(".btn");
const submitBtn = document.querySelector(".btn--ctn");

choiceBtnS.forEach(btn => {
    btn.addEventListener('click' , function(e){
        choiceBtnS.forEach(btns => {
            if(e.currentTarget === btns){
                e.currentTarget.classList.add("btn--current")
            }else{
                btns.classList.remove("btn--current")
            }
        })
       
    })

})

submitBtn.addEventListener('click' , function(e){
    e.preventDefault();
    const currentRating = document.querySelector(".btn--current");
    const currentRatingNumber = currentRating.dataset.id;

    const updateRating = document.querySelector("#rating");
    // updateRating.textContent  = updateRating;
    updateRating.innerHTML = currentRatingNumber;
    
    const container = document.querySelector(".container");
    
    container.classList.add("is-displayed")
    
})