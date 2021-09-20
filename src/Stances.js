import foolsGuard from './images/guards/fools-guard.png';
import highGuard from './images/guards/high-guard.png';
import longpointGuard from './images/guards/longpoint-guard.png';
import oxGuard from './images/guards/ox-guard.png';
import plowGuard from './images/guards/plow-guard.png';
import roofGuard from './images/guards/roof-guard.png';
import tailGuard from './images/guards/tail-guard.png';
const stances = {
  oxGuard: {
    image: oxGuard,
    choices: ['zornhaw', 'mittelhaw', 'zwerhaw'],
  },
  roofGuard: {
    image: roofGuard,
    choices: ['oberhaw', 'zornhaw'],
  },
  foolsGuard: {
    image: foolsGuard,
    choices: ['underhaw', 'mittelhaw'],
  },
  highGuard: {
    image: highGuard,
    choices: ['oberhaw', 'zornhaw'],
  },
  longpointGuard: {
    image: longpointGuard,
    choices: ['punta', 'mittelhaw', 'zwerhaw'],
  },
  plowGuard: {
    image: plowGuard,
    choices: ['punta', 'mittelhaw', 'zwerhaw'],
  },
  tailGuard: {
    image: tailGuard,
    choices: ['underhaw', 'mittelhaw'],
  },
};

const strikes = {
  oberhaw: {
    text: 'Oberhaw',
    result: stances.foolsGuard,
    damage: 10,
  },
  underhaw: {
    text: 'Underhaw',
    result: stances.roofGuard,
    damage: 8,
  },
  zornhaw: {
    text: 'Zornhaw',
    result: stances.tailGuard,
    damage: 6,
  },
  punta: {
    text: 'Stechen',
    result: stances.longpointGuard,
    damage: 5,
  },
  mittelhaw: {
    text: 'Mittelhaw',
    result: stances.plowGuard,
    damage: 8,
  },
  zwerhaw: {
    text: 'Zwerhaw',
    result: stances.oxGuard,
    damage: 3,
  },
};

export { stances, strikes };
