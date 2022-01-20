/// <reference path="./typings/globals/jquery/index.d.ts" />
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
var lang = localStorage.getItem('lang');
var langButton = document.querySelector('#langButton');
var resetTodayButton = document.querySelector('#resetTodayButton');

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

if (allContainersCountLs != null) {
    allContainersCount = parseInt(allContainersCountLs);
    
}
var containerValues = document.querySelectorAll('.containerValues');
var containerDivs = document.querySelectorAll('.containerDivs');

containerDivs[0].querySelector('h2').innerHTML = GlassOfWater.name + ' (' + GlassOfWater.capacity + ml + ')';
containerDivs[1].querySelector('h2').innerHTML = smallBottle.name + ' (' + smallBottle.capacity + ml + ')';
containerDivs[2].querySelector('h2').innerHTML = bigBottle.name + ' (' + bigBottle.capacity + ml + ')';

localStorage.setItem('container1Name', GlassOfWater.name);
localStorage.setItem('container2Name', smallBottle.name);
localStorage.setItem('container3Name', bigBottle.name);

localStorage.setItem('container1Capacity', GlassOfWater.capacity);
localStorage.setItem('container2Capacity', smallBottle.capacity);
localStorage.setItem('container3Capacity', bigBottle.capacity);
if (allContainersCountLs==null) {
    localStorage.setItem('allContainersCount', containerDivs.length);
}
if (lang==null) {
    localStorage.setItem('lang', 'PL');
}

langButton.addEventListener('click', () => {
    if (lang == 'EN') {
        document.querySelector('#langButtondiv').classList.remove('EN');
        document.querySelector('#langButtondiv').classList.add('PL');
        lang = 'PL';
        localStorage.setItem('lang', lang);
        document.querySelector('.c1 h2').innerHTML = GlassOfWater.name + ' (' + GlassOfWater.capacity + ml + ')';
        document.querySelector('.c2 h2').innerHTML = smallBottle.name + ' (' + smallBottle.capacity + ml + ')';
        document.querySelector('.c3 h2').innerHTML = bigBottle.name + ' (' + bigBottle.capacity + ml + ')';
        document.querySelector('#addOwnContainerButton').innerHTML = 'Dodaj własne naczynie';
        document.querySelector('#infodiv h4').innerHTML = 'Ile wody wypiłeś/aś?';
        document.querySelector('h1').innerHTML = 'Kalkulator Wody';
        var pfromownContainerdiv = document.querySelectorAll('#ownContainerdiv p');
        pfromownContainerdiv[0].innerHTML = 'Dodaj własne naczynie';
        pfromownContainerdiv[1].innerHTML = 'Nazwa naczynia:<input id="inputv1">';
        pfromownContainerdiv[2].innerHTML = 'Pojemność naczynia:<input id="inputv2">(ml)';
        document.querySelector('#ownContainerdiv button').innerHTML = 'Dodaj';
        document.querySelector('#resetTodayButton').innerHTML = 'Resetuj Dzień';
        document.querySelector('#resetButton').innerHTML = 'Resetuj Wszystko';
    }
    else {
        document.querySelector('#langButtondiv').classList.remove('PL');
        document.querySelector('#langButtondiv').classList.add('EN');
        lang = 'EN';
        localStorage.setItem('lang', lang);
        document.querySelector('.c1 h2').innerHTML = 'Glass of Water' +  ' (' + GlassOfWater.capacity + ml + ')';
        document.querySelector('.c2 h2').innerHTML = 'Small Bottle' + ' (' + smallBottle.capacity + ml + ')';
        document.querySelector('.c3 h2').innerHTML = 'Big Bottle' + ' (' + bigBottle.capacity + ml + ')';
        document.querySelector('#addOwnContainerButton').innerHTML = 'Add own container';
        document.querySelector('#infodiv h4').innerHTML = 'How much water did you drink?';
        document.querySelector('h1').innerHTML = 'Water Calculator';
        var pfromownContainerdiv = document.querySelectorAll('#ownContainerdiv p');
        pfromownContainerdiv[0].innerHTML = 'Add own Container';
        pfromownContainerdiv[1].innerHTML = 'Container name:<input id="inputv1">';
        pfromownContainerdiv[2].innerHTML = 'Container capacity:<input id="inputv2">(ml)';
        document.querySelector('#ownContainerdiv button').innerHTML = 'Add';
        document.querySelector('#resetTodayButton').innerHTML = 'Reset Today';
        document.querySelector('#resetButton').innerHTML = 'Reset All';
    }
})

if (lang=='PL') {
    document.querySelector('#langButtondiv').classList.add('PL');
    document.querySelector('.c1 h2').innerHTML = GlassOfWater.name + ' (' + GlassOfWater.capacity + ml + ')';
    document.querySelector('.c2 h2').innerHTML = smallBottle.name + ' (' + smallBottle.capacity + ml + ')';
    document.querySelector('.c3 h2').innerHTML = bigBottle.name + ' (' + bigBottle.capacity + ml + ')';
    document.querySelector('#addOwnContainerButton').innerHTML = 'Dodaj własne naczynie';
    document.querySelector('#infodiv h4').innerHTML = 'Ile wody wypiłeś/aś?';
    document.querySelector('h1').innerHTML = 'Kalkulator Wody';
    var pfromownContainerdiv = document.querySelectorAll('#ownContainerdiv p');
    pfromownContainerdiv[0].innerHTML = 'Dodaj własne naczynie';
    pfromownContainerdiv[1].innerHTML = 'Nazwa naczynia:<input id="inputv1">';
    pfromownContainerdiv[2].innerHTML = 'Pojemność naczynia:<input id="inputv2">(ml)';
    document.querySelector('#ownContainerdiv button').innerHTML = 'Dodaj';
    document.querySelector('#resetTodayButton').innerHTML = 'Resetuj Dzień';
    document.querySelector('#resetButton').innerHTML = 'Resetuj Wszystko';
}

if (lang=='EN') {
    document.querySelector('#langButtondiv').classList.add('EN');
    document.querySelector('.c1 h2').innerHTML = 'Glass of Water' +  ' (' + GlassOfWater.capacity + ml + ')';
    document.querySelector('.c2 h2').innerHTML = 'Small Bottle' + ' (' + smallBottle.capacity + ml + ')';
    document.querySelector('.c3 h2').innerHTML = 'Big Bottle' + ' (' + bigBottle.capacity + ml + ')';
    document.querySelector('#addOwnContainerButton').innerHTML = 'Add own container';
    document.querySelector('#infodiv h4').innerHTML = 'How much water did you drink?';
    document.querySelector('h1').innerHTML = 'Water Calculator';
    var pfromownContainerdiv = document.querySelectorAll('#ownContainerdiv p');
    pfromownContainerdiv[0].innerHTML = 'Add own Container';
    pfromownContainerdiv[1].innerHTML = 'Container name:<input id="inputv1">';
    pfromownContainerdiv[2].innerHTML = 'Container capacity:<input id="inputv2">(ml)';
    document.querySelector('#ownContainerdiv button').innerHTML = 'Add';
    document.querySelector('#resetTodayButton').innerHTML = 'Reset Today';
    document.querySelector('#resetButton').innerHTML = 'Reset All';
}

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

isResetButtonClicked = 0;
resetButton.addEventListener('click', () => {
    if (isResetButtonClicked==1) {
        localStorage.clear();
        var animdiv = $("#animdiv");
        animdiv.animate({ opacity: '0'}, "medium");
        var allContainers = document.getElementsByClassName('containerDivs').length;
        var counts = document.querySelectorAll('.containerValues');
        counts.forEach(element => {
            element.innerHTML = 0;
        });
        allWater.innerHTML = 0;
        localStorage.setItem('container1Name', GlassOfWater.name);
        localStorage.setItem('container2Name', smallBottle.name);
        localStorage.setItem('container3Name', bigBottle.name);

        localStorage.setItem('container1Capacity', GlassOfWater.capacity);
        localStorage.setItem('container2Capacity', smallBottle.capacity);
        localStorage.setItem('container3Capacity', bigBottle.capacity);
        localStorage.setItem('lang', 'PL');
        localStorage.setItem('allContainersCount', 3);
        if (allContainersCountLs==null) {
            localStorage.setItem('allContainersCount', containerDivs.length);
        }
        if (allContainersCountLs==null) {
            localStorage.setItem('allContainersCount', containerDivs.length);
        }

        setTimeout(() => {
            if (allContainers>3) {
                var elements = document.querySelectorAll('.containerDivs');
                for (let j = 0; j < elements.length; j++) {
                    if (elements[j].classList.contains('defaultContainerdiv')==false) {
                        elements[j].parentNode.removeChild(elements[j]);
                    }
                    
                }
            }
        }, 400);
        
        setTimeout(() => {
            animdiv.animate({ opacity: '1'}, "medium");
            isResetButtonClicked = 0;

            if (lang=='EN') {
                resetButton.innerHTML = 'Reset All';
                document.getElementById('resetButton').style.width = '80px';
            }
            else {
                resetButton.innerHTML = 'Resetuj Wszystko';
                document.getElementById('resetButton').style.width = '145px';

            }

        }, 700);
    }
    else {
        if (lang=='EN') {
            resetButton.innerHTML = 'Are you sure?';
            document.getElementById('resetButton').style.width = '120px';
        }
        else {
            resetButton.innerHTML = 'Na Pewno?';
            document.getElementById('resetButton').style.width = '100px';
        }
        
        isResetButtonClicked = 1;
        setTimeout(() => {
            isResetButtonClicked = 0;
            if (lang=='EN') {
                resetButton.innerHTML = 'Reset All';
                document.getElementById('resetButton').style.width = '80px';
            }
            else {
                resetButton.innerHTML = 'Resetuj Wszystko';
                document.getElementById('resetButton').style.width = '145px';
            }
        }, 1700);
    }

    
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
            closeButton.classList.add('btn-grad');
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
    clone.classList.remove('defaultContainerdiv');
    clone.classList.add('c' + thisContainerNumber);

    document.querySelector('.containerDivs:last-child h2').innerHTML = createdContainer.name + ' (' + createdContainer.capacity + ml + ')';
    document.querySelector('.containerDivs:last-child button').id = 'container' + thisContainerNumber + 'Button';
    document.querySelector('.containerDivs:last-child h3').id = 'container' + thisContainerNumber + 'Val';
    var createdAddingButton = document.querySelector('.containerDivs:last-child button');
    allContainersCount = document.getElementsByClassName('containerDivs').length;
    var newContainerCountLs = localStorage.setItem('container' + thisContainerNumber + 'Count', 0);
    var newContainerCount = document.querySelector('#container' + thisContainerNumber + 'Val');
    localStorage.setItem('container' + thisContainerNumber + 'Name', createdContainer.name);
    localStorage.setItem('container' + thisContainerNumber + 'Capacity', createdContainer.capacity);
    localStorage.setItem('allContainersCount', allContainersCount);
    createdAddingButton.addEventListener('click', () => {
        newContainerCountLs = localStorage.getItem('container' + thisContainerNumber + 'Count');
        var counter = 0;
        var tempAllWater = parseFloat(allWater.innerHTML);
        if (newContainerCountLs == null) {
            counter = 0;
        }
        else {
            counter = parseInt(newContainerCountLs);
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

resetTodayButton.addEventListener('click', () => {
    var animdiv = $("#animdiv");
    animdiv.animate({ opacity: '0' }, "medium");
    setTimeout(() => {
        var containers = document.querySelectorAll('.containerDivs');
        for (let i = 0; i < containers.length; i++) {
            var temp = i + 1;
            localStorage.setItem('container' + temp + 'Count', 0);
            var thisContainerCount = document.querySelector('#container' + temp + 'Val');
            thisContainerCount.innerHTML = 0;
        }
        localStorage.setItem('allWater', 0);
        document.querySelector('#allWater').innerHTML = 0;
        animdiv.animate({ opacity: '1' }, "medium");
    }, 500);
})

function render() {
    var allContainers = allContainersCountLs;
    for (let i = 3; i < allContainers; i++) {
        const element = allContainers[i];
        biggeri = i + 1;
        
        var containerName = localStorage.getItem('container' + biggeri + 'Name');
        var containerCapacity = localStorage.getItem('container' + biggeri + 'Capacity');
        var containerCount = localStorage.getItem('container' + biggeri + 'Count');

        var original = document.getElementsByClassName('c3');
        original = original[0];
        var clone = original.cloneNode(true);
        //original.parentNode.appendChild(clone);
        document.querySelector('#maindiv').appendChild(clone);
        clone.classList.remove('c3');
        clone.classList.remove('defaultContainerdiv');
        clone.classList.add('c' + biggeri);

        document.querySelector('.containerDivs:last-child h2').innerHTML = containerName + ' (' + containerCapacity + ml + ')';
        document.querySelector('.containerDivs:last-child button').id = 'container' + biggeri + 'Button';
        document.querySelector('.containerDivs:last-child h3').id = 'container' + biggeri + 'Val';
        var createdAddingButton = document.querySelector('.containerDivs:last-child button');
        document.querySelector('.containerDivs:last-child h3').innerHTML = containerCount;
        var newContainerCount = document.querySelector('#container' + biggeri + 'Val');

        createdAddingButton.addEventListener('click', () => {
            newContainerCountLs = localStorage.getItem('container' + biggeri + 'Count');
            var counter = 0;
            var tempAllWater = parseFloat(allWater.innerHTML);
            if (newContainerCountLs == null) {
                counter = 0;
            }
            else {
                counter = parseInt(newContainerCountLs);
            }
            counter = counter + 1;
            newContainerCount.innerHTML = counter;
            localStorage.setItem('container' + biggeri + 'Count', counter);
            tempAllWater += containerCapacity / 1000;
            allWater.innerHTML = tempAllWater;
            localStorage.setItem('allWater', tempAllWater);
            createdAddingButton.classList.add('bounce-4');
            setTimeout(() => {
                createdAddingButton.classList.remove('bounce-4');
            }, 700);
        })
    }

}

render();
