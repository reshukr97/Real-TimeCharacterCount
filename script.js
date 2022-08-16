const textCounterEl = document.getElementById("text-counter");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textCounterEl.addEventListener("keyup" , ()=>{
    updateCounter();
});
updateCounter();
function updateCounter(){
    totalCounterEl.innerText = textCounterEl.value.length;
    remainingCounterEl.innerText = textCounterEl.getAttribute("maxlength") - textCounterEl.value.length;
}