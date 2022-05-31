import "./scss/normalize.scss";
import "./scss/style.scss";
import { events } from "./ts/events";
import createLiHtml from "./ts/utils/createLiHtml";

// const app = document.querySelector<HTMLDivElement>('#app')!
const commandList = document.querySelector<HTMLUListElement>("#command-list")!;
const commandInput =
  document.querySelector<HTMLInputElement>("#command-input")!;

window.addEventListener("load", () => {
  const windowWidth: number = window.innerWidth;
  commandInput.maxLength = windowWidth > 500 ? 50 : 20;
});

let value = "";
commandInput?.addEventListener("change", (ev: any): void => {
  const eventValue: string = ev.target.value;
  value = eventValue;

  if (value.length > 0) {
    events(value);
    createLiHtml({ value, listElement: commandList });
  }
  ev.target.value = "";
});
