'use strict';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
// You can listen for events in the player by attaching a callback using .on():
player.on('timeupdate', function (event) {
  console.log(event.seconds);
  console.log(event.percent);
  console.log(event.duration);
});
