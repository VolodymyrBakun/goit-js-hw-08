import Player from '@vimeo/player';
import  throttle  from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = "videoplayer-current-time";

iframe.addEventListener('load' , setTime);

function setTime(params) {
    if (localStorage.getItem(TIME_KEY) === null) {
        return
    } else {
        player.setCurrentTime(localStorage.getItem(TIME_KEY))
    }
}

const saveTime = function (data) {
     const currentTime = JSON.stringify(data.seconds);
      localStorage.setItem(TIME_KEY, currentTime)

    }


player.on('timeupdate', throttle (saveTime, 1000));

