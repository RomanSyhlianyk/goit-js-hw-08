import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';
const playerEl = document.querySelector('#vimeo-player');
const VAULT_KEY = 'videoplayer-current-time';
const player = new Player(playerEl);

// player.on(
//   'timeupdate',
//   _throttle(e =>
//     localStorage.setItem(VAULT_KEY, JSON.stringify(e.seconds), 1000)
//   )
// );
const onPlay = function (data) {``
  localStorage.setItem(VAULT_KEY, data.seconds);
};
player.on('timeupdate', _throttle(onPlay, 1000));


player.setCurrentTime(localStorage.getItem(VAULT_KEY));
