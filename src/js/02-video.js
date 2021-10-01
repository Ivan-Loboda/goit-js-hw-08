// import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";
// console.log(trotle)

const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);

const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
    // console.log(onPlay)
};

iframePlayer.on('timeupdate', throttle(onPlay, 1000));


const playerCurrenTime = localStorage.getItem('videoplayer-current-time');



if (playerCurrenTime) {
    iframePlayer.setCurrentTime(playerCurrenTime);
}
else {
    iframePlayer.setCurrentTime(0);

}


