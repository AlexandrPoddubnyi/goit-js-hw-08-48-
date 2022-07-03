import Player from '@vimeo/player';

const iframe = document.querySelector('vimeo-player');
const player = new Player(iframe);

// player.on('timeupdate', onPlay);

// function onPlay({ second }) {
//    const seconds = second
//   localStorage.setItem('videoplayer-current-time', seconds)
// }

const onPlay = function (data) {
    const seconds = data.value
    localStorage.setItem('videoplayer-current-time', seconds)
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);


// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// })
