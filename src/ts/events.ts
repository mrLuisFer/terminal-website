import pong from './events/pongs';
import commandError from './events/commandError';

export const events = (value: string): void => {
  switch (value) {
    case 'ping':
      pong();
      break;
    default:
      commandError(value);
      break;
  }
};
