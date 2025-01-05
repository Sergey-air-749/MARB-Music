const audio3 = document.getElementById('playr');
const InputRegT = document.getElementById('timeline');


function BigPlayr() {
    document.getElementById('header').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.getElementById('TextBox').style.display = 'none';
    document.getElementById('footer-min-playr').style.display = 'none';

    document.getElementById('big-playr').style.display = 'flex';
}

function PlayrClose() {
    document.getElementById('header').style.display = 'flex';
    document.getElementById('main').style.display = 'block';
    document.getElementById('TextBox').style.display = 'none';
    document.getElementById('footer-min-playr').style.display = 'flex';

    document.getElementById('big-playr').style.display = 'none';
}

function getAudio() {
    document.getElementById('big-playr').style.backgroundColor = localStorage.getItem('alibom_color');
    document.getElementById('cover-img').src = localStorage.getItem('audio_icon_max');
    document.getElementById('cover-img-Two').src = localStorage.getItem('audio_icon_max');

    document.getElementById('trek_name').innerHTML = localStorage.getItem('audio_name');
    document.getElementById('trek_ispolniteli').innerHTML = localStorage.getItem('audio_after');

}


function povtor() {
    if (audio3.loop == true) {

        document.getElementById('povtor').src = '/img/povtor.svg'
        audio3.loop = false
    } else {

        document.getElementById('povtor').src = '/img/povtor_on.svg'
        audio3.loop = true
    }
}


InputRegT.addEventListener('input', ()=>{
    audio3.currentTime = Math.floor(InputRegT.value)

    //InputReg.max = Math.floor(playr.duration);
});















function updateProgress(e) {
    document.getElementById('activ-time').innerHTML = localStorage.getItem('audio_time');
    document.getElementById('max-time').innerHTML = localStorage.getItem('audio_time_max');

    InputRegT.value = localStorage.getItem('audio_time');
    InputRegT.max =  localStorage.getItem('audio_time_max');
    
}

audio3.addEventListener('timeupdate', updateProgress)

getAudio()