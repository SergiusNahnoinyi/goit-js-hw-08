'use strict';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const timeWatched = localStorage.getItem(LOCALSTORAGE_KEY);

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

player
  .setCurrentTime(timeWatched)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        'the time was less than 0 or greater than the video’s duration';
        break;

      default:
        'some other error occurred';
        break;
    }
  });
