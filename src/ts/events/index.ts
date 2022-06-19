import pong from "./pongs"
import commandError from "./commandError"
import clear from "./clear"
import exit from "./exit"
import fetch from "./fetch"
import open from "./open"

export const events = ({value, id}: { value: string; id: string }): void => {
  const liElement = document.getElementById(`${id}`)!
  const sectionElement = document.createElement("section")
  sectionElement.classList.add("command__content")
  const events = value.split(" ")

  switch (events[0]) {
    case "ping":
      pong()
      break
    case "clear":
      clear()
      break
    case "cls":
      clear()
      break
    case "c":
      clear()
      break
    case "exit":
      exit({liElement, sectionElement})
      break
    case "fetch":
      fetch({liElement, sectionElement})
      break
    case "neofetch":
      fetch({liElement, sectionElement})
      break
    case "open":
      open({liElement, sectionElement, value})
      break
    case "mtrx":
      break
    case "matrix":
      break
    default:
      commandError({event: value, liElement, sectionElement})
      break
  }
}
