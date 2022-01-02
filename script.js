var container1Button = document.querySelector('#container1Button');
var container2Button = document.querySelector('#container2Button');
var container3Button = document.querySelector('#container3Button');
var resetButton = document.querySelector('#resetButton');
var container1Count = document.querySelector('#container1Val');
var container1CounterLs = localStorage.getItem('container1Count');
var container2Count = document.querySelector('#container2Val');
var container2CounterLs = localStorage.getItem('container2Count');
var container3Count = document.querySelector('#container3Val');
var container3CounterLs = localStorage.getItem('container3Count');

if (container1CounterLs!=null) {
    container1Count.innerHTML = parseInt(container1CounterLs);
}
if (container2CounterLs != null) {
    container2Count.innerHTML = parseInt(container2CounterLs);
}
if (container3CounterLs != null) {
    container3Count.innerHTML = parseInt(container3CounterLs);
}

var containerValues = document.querySelectorAll('.containerValues');
console.log(containerValues);



container1Button.addEventListener('click', () => {
    container1CounterLs = localStorage.getItem('container1Count');
    var counter = 0;
    if (container1CounterLs==null) {
        counter = 0;
    }
    else {
        counter = parseInt(container1CounterLs);
    }
    counter = counter + 1;
    container1Count.innerHTML = counter;
    localStorage.setItem('container1Count', counter);
    container1Button.classList.add('bounce-4');
    setTimeout(() => {
        container1Button.classList.remove('bounce-4');
    }, 700);
})

container2Button.addEventListener('click', () => {
    container2CounterLs = localStorage.getItem('container2Count');
    var counter = 0;
    if (container2CounterLs==null) {
        counter = 0;
    }
    else {
        counter = parseInt(container2CounterLs);
    }
    counter = counter + 1;
    container2Count.innerHTML = counter;
    localStorage.setItem('container2Count', counter);
    container2Button.classList.add('bounce-4');
    setTimeout(() => {
        container2Button.classList.remove('bounce-4');
    }, 700);
})

container3Button.addEventListener('click', () => {
    container3CounterLs = localStorage.getItem('container3Count');
    var counter = 0;
    if (container3CounterLs == null) {
        counter = 0;
    }
    else {
        counter = parseInt(container3CounterLs);
    }
    counter = counter + 1;
    container3Count.innerHTML = counter;
    localStorage.setItem('container3Count', counter);
    container3Button.classList.add('bounce-4');
    setTimeout(() => {
        container3Button.classList.remove('bounce-4');
    }, 700);
})

resetButton.addEventListener('click', () => {
    localStorage.clear();
    var counts = document.querySelectorAll('.containerValues');
    counts.forEach(element => {
        element.innerHTML = 0;
    });
    resetButton.classList.add('bounce-4');
    setTimeout(() => {
        resetButton.classList.remove('bounce-4');
    }, 700);
})