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
  },
  underhaw: {
    text: 'Underhaw',
    result: stances.roofGuard,
  },
  zornhaw: {
    text: 'Zornhaw',
    result: stances.tailGuard,
  },
  punta: {
    text: 'Stechen',
    result: stances.longpointGuard,
  },
  mittelhaw: {
    text: 'Mittelhaw',
    result: stances.plowGuard,
  },
  zwerhaw: {
    text: 'Zwerhaw',
    result: stances.oxGuard,
  },
};

export { stances, strikes };
