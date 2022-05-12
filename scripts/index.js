const editPopup = document.querySelector(".profile__editBtn");
const closePopup = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const submitPopup=document.querySelector(".popup__submit");
const page = document.querySelector(".page");


editPopup.addEventListener("click", function(event){
event.preventDefault();
popup.classList.toggle("popup_active");
page.style.overflow = 'hidden';
/*let tempJob=profileJob.textContent;
let tempName=profileName.textContent;*/
inputJob.value=tempJob;
inputName.value=tempName;

});

closePopup.addEventListener("click", function(event){
    popup.classList.toggle("popup_active");
    });



submitPopup.addEventListener("click", function(event){
    event.preventDefault();
    let tempJob=inputJob.value;
    let tempName=inputName.value;
    profileJob.textContent=tempJob;
    profileName.textContent=tempName;
    popup.classList.toggle("popup_active");
});