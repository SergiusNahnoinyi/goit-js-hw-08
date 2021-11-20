'use strict';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});
// You can listen for events in the player by attaching a callback using .on():
player.on('timeupdate', function (event) {
  const timeUpdate = {
    seconds: event.seconds,
    percent: event.percent,
    duration: event.duration,
  };
  console.log(timeUpdate);
  localStorage.setItem(LOCALSTORAGE_KEY, timeUpdate.seconds);
});
