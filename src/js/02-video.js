import Player from '@vimeo/player';
import throttle from "lodash.throttle"

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
// let second = 0;


const timeUpdating = function (data) {
    console.log(data);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

player.on('timeupdate', throttle(timeUpdating, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);


const currentTimeInSeconds = JSON.parse(currentTime)?.seconds || 0;
console.log(currentTimeInSeconds)


// player.getCurrentTime(second);

player.setCurrentTime(currentTimeInSeconds);