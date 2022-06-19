import "./scss/style.scss"
import {events} from "./ts/events"
import createLiHtml from "./ts/utils/createLiHtml"
import {nanoid} from "nanoid"
import clear from "./ts/events/clear"

const commandList = document.querySelector<HTMLUListElement>("#command-list")!
const commandInput = document.querySelector<HTMLInputElement>("#command-input")!
const clearIcon = document.querySelector<HTMLElement>("#clearIcon")!

window.addEventListener("load", () => {
  const windowWidth: number = window.innerWidth
  commandInput.maxLength = windowWidth > 500 ? 50 : 20
})

let value = ""
commandInput?.addEventListener("change", (ev: any): void => {
  const eventValue: string = ev.target.value
  value = eventValue.toLowerCase()
  const elementId = nanoid(10)

  if (value.length > 0) {
    createLiHtml({value, listElement: commandList, id: elementId})
    events({value, id: elementId})
  }
  ev.target.value = ""
})

clearIcon?.addEventListener("click", () => {
  clear()
})
