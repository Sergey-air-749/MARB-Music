const InputReg = document.getElementById('time');
const audio = document.getElementById('playr');
const audio_name = document.getElementById('audio_name');
const audio_after = document.getElementById('audio_after');


let icon = '/img/100x100 (1).jpg';
let icon_max = '/img/m1000x1000.jpg';
audio_after.innerHTML = '3TERNITY'
let alibom_name = 'SYSTEM 3RASE'


// function play() {
//     document.getElementById('playr').play();

//     document.getElementById('play').style.display = 'block'
//     document.getElementById('pause').style.display = 'none'
// }

// function pause() {
//     document.getElementById('playr').pause();

//     document.getElementById('play').style.display = 'none'
//     document.getElementById('pause').style.display = 'block'
// }

// function pause() {
//     if (document.getElementById('playr').paused != true) {
//         document.getElementById('playr').play();
//     } else {
//         document.getElementById('playr').pause();
//     }
// }


function share() {

    const shareData = {
        title: "MARB Music",
        text: "",
        url: location.href,
    };

    navigator.share(shareData);
}


function color() {
    localStorage.setItem('alibom_color', 'rgb(153, 106, 229)')
}



function music_1() {
    document.getElementById('playr').src = '/music/3TERNITY/МЫСЛИ.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'МЫСЛИ (Intro)'
    audio_after.innerHTML = '3TERNITY, LXNER'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_icon_max', icon_max)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)
    localStorage.setItem('alibom_name', alibom_name)

    color()
    play()
}

function music_2() {
    document.getElementById('playr').src = '/music/3TERNITY/ФИТИЛЬ.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'ФИТИЛЬ'
    audio_after.innerHTML = '3TERNITY, OG Buda'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_icon_max', icon_max)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)
    localStorage.setItem('alibom_name', alibom_name)

    color()
    play()
}

function music_3() {
    document.getElementById('playr').src = '/music/3TERNITY/КРИК.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'КРИК'
    audio_after.innerHTML = '3TERNITY'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_icon_max', icon_max)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)
    localStorage.setItem('alibom_name', alibom_name)

    color()
    play()
}


function music_4() {
    document.getElementById('playr').src = '/music/3TERNITY/ОГОНЬ И ВОДА.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'ОГОНЬ И ВОДА'
    audio_after.innerHTML = '3TERNITY'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_icon_max', icon_max)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)
    localStorage.setItem('alibom_name', alibom_name)

    color()
    play()
}

function music_5() {
    document.getElementById('playr').src = '/music/3TERNITY/МАГИЯ.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'МАГИЯ'
    audio_after.innerHTML = '3TERNITY'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_icon_max', icon_max)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)
    localStorage.setItem('alibom_name', alibom_name)

    color()
    play()
}

function music_6() {
    document.getElementById('playr').src = '/music/3TERNITY/Кипит кровь.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Кипит кровь'
    audio_after.innerHTML = '3TERNITY, May Wave$'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_icon_max', icon_max)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)
    localStorage.setItem('alibom_name', alibom_name)

    color()
    play()
}




InputReg.addEventListener('input', ()=>{
    audio.currentTime = Math.floor(InputReg.value)

    //InputReg.max = Math.floor(playr.duration);
});

function debug() {
    console.log(audio.currentTime)
    console.log(audio.duration)
}

// function updateProgress(e) {
//     InputReg.value = audio.currentTime
//     InputReg.max = Math.floor(audio.duration)

//     // if (localStorage.getItem('audio_time') == null || 0) {

//     // } else {
//     //     localStorage.setItem('audio_time', InputReg.value)
//     //     localStorage.setItem('audio_time_max', InputReg.max)
//     // }
// }



