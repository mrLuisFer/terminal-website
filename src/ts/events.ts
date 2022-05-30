import pong from './events/pongs';
import commandError from './events/commandError';
import clear from './events/clear';

export const events = (value: string): void => {
  switch (value) {
    case 'ping':
      pong();
      break;
    case 'clear':
      clear();
      break;
    case 'cls':
      clear();
      break;
    default:
      commandError(value);
      break;
  }
};
