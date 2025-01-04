const InputReg_S = document.getElementById('time');
const audio_S = document.getElementById('playr');
const audio_name_S = document.getElementById('audio_name');
const audio_after_S = document.getElementById('audio_after');


// const InputReg = document.getElementById('time');
// const audio = document.getElementById('playr');
// const audio_name = document.getElementById('audio_name');
// const audio_after = document.getElementById('audio_after');





if (localStorage.getItem('playr') == null) {
    document.getElementById('playr_img').src = '/music.marb.com/img/notaudio.svg'
    audio_name.innerHTML = 'Нет данных'
} else {
    document.getElementById('playr').src = localStorage.getItem('playr')
    document.getElementById('playr_img').src = localStorage.getItem('audio_icon');
    audio_name.innerHTML = localStorage.getItem('audio_name')
    audio_after.innerHTML = localStorage.getItem('audio_after')


    // audio_after.duration = localStorage.getItem('audio_time')
    // InputReg.max = localStorage.getItem('audio_time_max')
    // InputReg.value = localStorage.getItem('audio_time')
}








function play() {
    document.getElementById('playr').play();

    Restart()
    updataBigplayr()
    
    // getAudio()

    localStorage.setItem('audio_play', 1)

    document.getElementById('play').style.display = 'block'
    document.getElementById('pause').style.display = 'none'

    document.getElementById('play-max').style.display = 'block'
    document.getElementById('pause-max').style.display = 'none'
}

function pause() {
    document.getElementById('playr').pause();
    
    localStorage.setItem('audio_play', 0)

    document.getElementById('play').style.display = 'none'
    document.getElementById('pause').style.display = 'block'

    document.getElementById('play-max').style.display = 'none'
    document.getElementById('pause-max').style.display = 'block'
}






function updataBigplayr() {
    document.getElementById('big-playr').style.backgroundColor = localStorage.getItem('alibom_color');
    document.getElementById('cover-img').src = localStorage.getItem('audio_icon_max');

    document.getElementById('trek_name').innerHTML = localStorage.getItem('audio_name');
    document.getElementById('trek_ispolniteli').innerHTML = localStorage.getItem('audio_after');
}





// if (localStorage.getItem('audio_name') == null) {
//     document.getElementById('Text-img').src = '/music.marb.com/img/Text_off.svg';
// }



function text() {
    // document.getElementById('header').style.display = 'none';
    // document.getElementById('main').style.display = 'none';
    // document.getElementById('Text').style.display = 'block';

    // playrRestart()

    if (document.getElementById('header').style.display == 'none' && document.getElementById('big-playr').style.display == 'flex') {

        document.getElementById('Text-img').src = '/music.marb.com/img/Text_on.svg';

        document.getElementById('header').style.display = 'none';
        document.getElementById('main').style.display = 'none';

        document.getElementById('TextBox').style.display = 'flex';



        //
        document.getElementById('big-playr').style.display = 'none';

        
        document.getElementById('footer-min-playr').style.display = 'flex';

    } else if (document.getElementById('header').style.display == 'none') {

        document.getElementById('Text-img').src = '/music.marb.com/img/Text.svg';

        document.getElementById('header').style.display = 'flex';
        document.getElementById('main').style.display = 'block';
        document.getElementById('TextBox').style.display = 'none';

        document.getElementById('footer-min-playr').style.display = 'flex';

    } else if (document.getElementById('header').style.display == 'flex') {

        document.getElementById('Text-img').src = '/music.marb.com/img/Text_on.svg';

        document.getElementById('header').style.display = 'none';
        document.getElementById('main').style.display = 'none';

        document.getElementById('TextBox').style.display = 'flex';


        //
        document.getElementById('big-playr').style.display = 'none';

        
        document.getElementById('footer-min-playr').style.display = 'flex';

        // document.getElementById('Text').style.display = 'block';

    }



    
    // if (document.getElementById('header').style.display == 'none' || document.getElementById('main').style.display == 'none' || localStorage.getItem('audio_name') == null) {

    //     document.getElementById('Text-img').src = '/music.marb.com/img/Text.svg';

    //     document.getElementById('header').style.display = 'flex';
    //     document.getElementById('main').style.display = 'block';
    //     document.getElementById('TextBox').style.display = 'none';

    //     document.getElementById('footer-min-playr').style.display = 'flex';

    // } else if (document.getElementById('header').style.display == 'flex') {

    //     document.getElementById('Text-img').src = '/music.marb.com/img/Text_on.svg';

    //     document.getElementById('header').style.display = 'none';
    //     document.getElementById('main').style.display = 'none';
    //     document.getElementById('big-playr').style.display = 'none';

    //     document.getElementById('TextBox').style.display = 'flex';

        
    //     document.getElementById('footer-min-playr').style.display = 'flex';

    //     // document.getElementById('Text').style.display = 'block';

    // }
}






// function playr() {
//     if (document.getElementById('header').style.display == 'none' || document.getElementById('main').style.display == 'none' || localStorage.getItem('audio_name') == null) {

//         document.getElementById('header').style.display = 'flex';
//         document.getElementById('main').style.display = 'block';
//         document.getElementById('TextBox').style.display = 'none';

//         // document.getElementById('Text').style.display = 'none';

//     } else if (document.getElementById('header').style.display == 'flex') {

//         document.getElementById('header').style.display = 'none';
//         document.getElementById('main').style.display = 'none';
//         document.getElementById('TextBox').style.display = 'none';

//         document.getElementById('playr-box').style.display = 'flex';
//         document.getElementById('footer-min-playr').style.display = 'none';

//         // document.getElementById('Text').style.display = 'block';

//     }
// }





function share_audio() {
    const shareData = {
        title: "MARB Music",
        url: localStorage.getItem('audio_namehare'),
    };

    navigator.share(shareData);
}


function playrRestart() {
    document.getElementById('cover-orign').src = localStorage.getItem('audio_icon_max');
    // document.getElementById('cover-blur').src = localStorage.getItem('audio_icon_max');

    document.getElementById('audio_name_playr').innerHTML = localStorage.getItem('audio_name')
    document.getElementById('audio_after_playr').innerHTML = localStorage.getItem('audio_after')
    document.getElementById('playr-box').style.backgroundColor = localStorage.getItem('alibom_color');
}

function closePlayr() {
    
    document.getElementById('header').style.display = 'flex';

    document.getElementById('main').style.display = 'block';
    document.getElementById('TextBox').style.display = 'none';

    document.getElementById('playr-box').style.display = 'none';
    document.getElementById('footer-min-playr').style.display = 'flex';

}

// playrRestart()



function updateProgress(e) {

    if (localStorage.getItem('audio_time') == null || '0' || NaN) {

        localStorage.setItem('audio_time', Math.floor(InputReg.value))
        localStorage.setItem('audio_time_max', Math.floor(InputReg.max))

        document.getElementById('time_line').innerHTML = Math.floor(audio.currentTime) + '/' + Math.floor(audio.duration);

        InputReg.value = audio.currentTime
        InputReg.max = Math.floor(audio.duration)

    } else {

    }

}

audio.addEventListener('timeupdate', updateProgress)
