window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 120;
        if (revealTop<windowHeight-revealPoint) {
            reveals[i].classList.add('active');
        }
        else {
            //reveals[i].classList.remove('active');
        }
    }
}

function revealtime() {
    var elements = document.getElementsByClassName('revealtime');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('delayed');
    }
}

setTimeout(() => { revealtime(); }, 600);