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
var allWater = document.querySelector('#allWater');
var allWaterLs = localStorage.getItem('allWater');
var addOwnContainerButton = document.querySelector('#addOwnContainerButton');
var confirmOwnContainerButton = document.querySelector('#confirmOwnContainerButton');
var allContainersCount = document.getElementsByClassName('containerDivs').length;
var allContainersCountLs = localStorage.getItem('allContainersCount');

if (container1CounterLs!=null) {
    container1Count.innerHTML = parseInt(container1CounterLs);
}
if (container2CounterLs != null) {
    container2Count.innerHTML = parseInt(container2CounterLs);
}
if (container3CounterLs != null) {
    container3Count.innerHTML = parseInt(container3CounterLs);
}
if (allWaterLs != null) {
    allWater.innerHTML = parseFloat(allWaterLs);
}

var containerValues = document.querySelectorAll('.containerValues');
var containerDivs = document.querySelectorAll('.containerDivs');

containerDivs[0].querySelector('h2').innerHTML = GlassOfWater.name + ' (' + GlassOfWater.capacity + ml + ')';
containerDivs[1].querySelector('h2').innerHTML = smallBottle.name + ' (' + smallBottle.capacity + ml + ')';
containerDivs[2].querySelector('h2').innerHTML = bigBottle.name + ' (' + bigBottle.capacity + ml + ')';

container1Button.addEventListener('click', () => {
    container1CounterLs = localStorage.getItem('container1Count');
    var counter = 0;
    var tempAllWater = parseFloat(allWater.innerHTML);
    if (container1CounterLs==null) {
        counter = 0;
    }
    else {
        counter = parseInt(container1CounterLs);
    }
    counter = counter + 1;
    container1Count.innerHTML = counter;
    localStorage.setItem('container1Count', counter);
    tempAllWater += GlassOfWater.capacity/1000;
    allWater.innerHTML = tempAllWater;
    localStorage.setItem('allWater', tempAllWater);
    container1Button.classList.add('bounce-4');
    setTimeout(() => {
        container1Button.classList.remove('bounce-4');
    }, 700);
})

container2Button.addEventListener('click', () => {
    container2CounterLs = localStorage.getItem('container2Count');
    var counter = 0;
    var tempAllWater = parseFloat(allWater.innerHTML);
    if (container2CounterLs==null) {
        counter = 0;
    }
    else {
        counter = parseInt(container2CounterLs);
    }
    counter = counter + 1;
    container2Count.innerHTML = counter;
    localStorage.setItem('container2Count', counter);
    tempAllWater += smallBottle.capacity / 1000;
    allWater.innerHTML = tempAllWater;
    localStorage.setItem('allWater', tempAllWater);
    container2Button.classList.add('bounce-4');
    setTimeout(() => {
        container2Button.classList.remove('bounce-4');
    }, 700);
})

container3Button.addEventListener('click', () => {
    container3CounterLs = localStorage.getItem('container3Count');
    var counter = 0;
    var tempAllWater = parseFloat(allWater.innerHTML);
    if (container3CounterLs == null) {
        counter = 0;
    }
    else {
        counter = parseInt(container3CounterLs);
    }
    counter = counter + 1;
    container3Count.innerHTML = counter;
    localStorage.setItem('container3Count', counter);
    tempAllWater += bigBottle.capacity / 1000;
    allWater.innerHTML = tempAllWater;
    localStorage.setItem('allWater', tempAllWater);
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
    allWater.innerHTML = 0;
    resetButton.classList.add('bounce-4');
    setTimeout(() => {
        resetButton.classList.remove('bounce-4');
    }, 700);
})

addOwnContainerButton.addEventListener('click', () => {
    if (document.querySelector('#ownContainerdiv').classList.contains('hidden')) {
        addOwnContainerButton.classList.add('bounce-4');
        setTimeout(() => {
            addOwnContainerButton.classList.remove('bounce-4');
            document.querySelector('#ownContainerdiv').classList.remove('hidden');
            document.querySelector('#maindiv').classList.add('hidden');
            var closeButton = document.createElement('button');
            closeButton.innerHTML = 'X';
            document.querySelector('#infodiv').appendChild(closeButton);
            closeButton.classList.add('closeOwnContainerMenuButton');
            closeButton.addEventListener('click', () => {
                closeButton.classList.add('bounce-4');
                setTimeout(() => {
                    document.querySelector('#ownContainerdiv').classList.add('hidden');
                    document.querySelector('#maindiv').classList.remove('hidden');
                    closeButton.classList.remove('bounce-4');
                    document.querySelector('#infodiv').removeChild(closeButton);
                }, 670);
            })
        }, 670);
    }
})

confirmOwnContainerButton.addEventListener('click', () => {
    var containerNameInput = document.querySelector('#inputv1').value;
    var containerCapacityInput = document.querySelector('#inputv2').value;
    var createdContainer = new WaterContainer(containerNameInput, containerCapacityInput);
    var closeButton = document.querySelector('#infodiv button')
    allContainersCount = allContainersCount + 1;
    var thisContainerNumber = allContainersCount;
    var original = document.getElementsByClassName('c3');
    original = original[0];
    var clone = original.cloneNode(true);
    //original.parentNode.appendChild(clone);
    document.querySelector('#maindiv').appendChild(clone);
    clone.classList.remove('c3');
    clone.classList.add('c' + thisContainerNumber);

    document.querySelector('.containerDivs:last-child h2').innerHTML = createdContainer.name + ' (' + createdContainer.capacity + ml + ')';
    document.querySelector('.containerDivs:last-child button').id = 'container' + thisContainerNumber + 'Button';
    document.querySelector('.containerDivs:last-child h3').id = 'container' + thisContainerNumber + 'Val';
    var createdAddingButton = document.querySelector('.containerDivs:last-child button');
    allContainersCount = document.getElementsByClassName('containerDivs').length;
    var newContainerLs = localStorage.setItem('container' + thisContainerNumber + 'Count', 0);
    var newContainerCount = document.querySelector('#container' + thisContainerNumber + 'Val');

    createdAddingButton.addEventListener('click', () => {
        newContainerLs = localStorage.getItem('container' + thisContainerNumber + 'Count');
        var counter = 0;
        var tempAllWater = parseFloat(allWater.innerHTML);
        if (newContainerLs == null) {
            counter = 0;
        }
        else {
            counter = parseInt(newContainerLs);
        }
        counter = counter + 1;
        newContainerCount.innerHTML = counter;
        localStorage.setItem('container' + thisContainerNumber + 'Count', counter);
        tempAllWater += createdContainer.capacity / 1000;
        allWater.innerHTML = tempAllWater;
        localStorage.setItem('allWater', tempAllWater);
        createdAddingButton.classList.add('bounce-4');
        setTimeout(() => {
            createdAddingButton.classList.remove('bounce-4');
        }, 700);
    })

    confirmOwnContainerButton.classList.add('bounce-4');
    setTimeout(() => {
        document.querySelector('#ownContainerdiv').classList.add('hidden');
        document.querySelector('#maindiv').classList.remove('hidden');
        confirmOwnContainerButton.classList.remove('bounce-4');
        document.querySelector('#infodiv').removeChild(closeButton);
    }, 670);

})
//TODO: nastpeny commit: repaired not working buttons in new containers