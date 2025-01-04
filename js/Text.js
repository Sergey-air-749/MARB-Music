document.getElementById('text').innerHTML = '⬤ ⬤ ⬤ ⬤'
const audio2 = document.getElementById('playr');


document.getElementById('TextBox').style.backgroundColor = localStorage.getItem('alibom_color');
document.getElementById('music_name').innerHTML = localStorage.getItem('audio_after') + ' • ' + localStorage.getItem('audio_name') ;
document.getElementById('alibom_img').src = localStorage.getItem('audio_icon_max');

let content = ''

async function getResponse() {
    let response = await fetch('/music.marb.com/Text/' + localStorage.getItem('audio_name') + '.json')
    content = await response.json()

    document.getElementById('full-Text').value = JSON.stringify(content);

    console.table(content)
    // console.table(content[8])
}

function RESstatus() {
    fetch('/music.marb.com/Text/' + localStorage.getItem('audio_name') + '.json').then(response => {

        if (response.status == 200) {
            console.log(response.status)
        } else {
            document.getElementById('text').innerHTML = 'Не удалось найти текст'
        }

    });
}


function closeText() {

    document.getElementById('Text-img').src = '/music.marb.com/img/Text.svg';

    document.getElementById('header').style.display = 'flex';
    document.getElementById('main').style.display = 'block';
    document.getElementById('TextBox').style.display = 'none';
}



// function init() {
//     set = 0;
//     setInterval(tick, 1000);
// }

// function tick() {
//     if (localStorage.getItem('audio_play') == 1) {

//         set += 1
//         console.log(content[set])
//         console.log(set)
        
//         if (content[set] != undefined) {
//             document.getElementById('text').innerHTML = content[set]
//         }

//     }
// }

// init()


function Restart() {

    RESstatus()
    getResponse()

    document.getElementById('text').innerHTML = '⬤ ⬤ ⬤ ⬤'


    document.getElementById('TextBox').style.backgroundColor = localStorage.getItem('alibom_color');
    document.getElementById('music_name').innerHTML = localStorage.getItem('audio_after') + ' • ' + localStorage.getItem('audio_name') ;
    document.getElementById('alibom_img').src = localStorage.getItem('audio_icon_max');

    audio2.addEventListener('timeupdate', updateProgress)
}

function updateProgress(e) {

    if (localStorage.getItem('audio_time') != null || '0' || NaN) {

        if (localStorage.getItem('audio_play') == 1) {

            let time = localStorage.getItem('audio_time');

            // console.log(content[time])
            // console.log(time)
            
            if (content[time] != undefined) {
                document.getElementById('text').innerHTML = content[time]
            }

            if (localStorage.getItem('audio_time') == localStorage.getItem('audio_time_max')) {
                document.getElementById('text').innerHTML = '';
            }
    
        }

    } else {

    }

}

audio2.addEventListener('timeupdate', updateProgress)

RESstatus()
getResponse()
