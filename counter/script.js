const value = document.getElementById ('value')
const increment = document.getElementById ('increment')
const decrement = document.getElementById ('decrement')
const resetBtn = document.getElementById ('resetBtn')

let count = 0;
// update counter value
function updateCounter() {
    value.textContent = count;
}

//increment
increment.addEventListener ('click', () => {
    count++;
    updateCounter();
})

decrement.addEventListener ('click', () => {
    count--;
    updateCounter();
})

resetBtn.addEventListener ('click', () => {
    count = 0;
    updateCounter();
})