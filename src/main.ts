import "./scss/style.scss"
import { events } from "./ts/events"
import createLiHtml from "./ts/utils/createLiHtml"
import { nanoid } from "nanoid"
import clear from "./ts/events/clear"
import "./ts/utils/collapseHeader"

const commandList = document.querySelector<HTMLUListElement>("#command-list")!
const commandInput = document.querySelector<HTMLInputElement>("#command-input")!
const clearIcon = document.querySelector<HTMLElement>("#clearIcon")!
const terminalSection = document.querySelector<HTMLElement>("#terminal")!
const headerMenuIcon = document.querySelector<HTMLElement>("#headerMenuIcon")!
const headerMenu = document.querySelector<HTMLElement>("#headerMenu")!
window.addEventListener("load", () => {
  const windowWidth: number = window.innerWidth
  commandInput.maxLength = windowWidth > 500 ? 50 : 20
})

document.addEventListener("click", (e: any) => {
  const isMenuClicked = headerMenu.contains(e.target)
  const isMenuIconClicked = headerMenuIcon.contains(e.target)
  if (!isMenuClicked && !isMenuIconClicked) {
    headerMenu.classList.add("hidden")
    headerMenuIcon.classList.remove("isMenuIconClicked")
  }
})

terminalSection.addEventListener("click", () => {
  commandInput.focus()
})

headerMenuIcon.addEventListener("click", () => {
  headerMenu.classList.toggle("hidden")
  headerMenuIcon.classList.toggle("menuIconClicked")
})

let value = ""
commandInput?.addEventListener("change", (ev: any): void => {
  const eventValue: string = ev.target.value
  value = eventValue.toLowerCase()
  const elementId = nanoid(10)

  if (value.length > 0) {
    createLiHtml({ value, listElement: commandList, id: elementId })
    events({ value, id: elementId })
  }
  ev.target.value = ""
})

clearIcon?.addEventListener("click", () => {
  clear()
})

