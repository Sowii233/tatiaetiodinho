const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let current = 0;

function esconder() {
    slider.forEach(item => item.classList.remove('on'))
    pause();
}

function mostrar() {
    const atual = slider[current];
    slider[current].classList.add('on')

    if (atual.tagName == 'VIDEO') {
        atual.play().catch(err => {
            console.warn("falha ao reproduzir.", err);
        })
    }
}

function proximo() {
    esconder()
    if (current == slider.length - 1) {
        current = 0;
    }

    else {
        current++;
    }
    mostrar()
}

function anterior() {
    esconder()
    if (current == 0) {
        current = slider.length - 1;
    }

    else {
        current--;
    }
    mostrar()
}

function pause() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    })
}

btnNext.addEventListener('click', proximo)
btnPrev.addEventListener('click', anterior)
