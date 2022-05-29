import './css/normalize.css';
import './css/style.css';
import {events} from './ts/events';

// const app = document.querySelector<HTMLDivElement>('#app')!
const commandList = document.querySelector<HTMLUListElement>('#command-list');
const commandInput = document.querySelector<HTMLInputElement>('#command-input');

let value = '';

commandInput?.addEventListener('change', (ev: any): void => {
  const eventValue: string = ev.target.value;
  value = eventValue;

  if (value.length > 0) {
    events(value);

    let li = document.createElement('li');
    let p = document.createElement('p');
    li.classList.add('commandList__item');
    p.classList.add('command__user');
    p.textContent = 'user@user $';
    li.append(p);
    li.append(value);
    commandList?.appendChild(li);
  }
  ev.target.value = '';
});
