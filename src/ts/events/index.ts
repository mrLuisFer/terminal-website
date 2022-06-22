import pong from "./pongs"
import commandError from "./commandError"
import clear from "./clear"
import exit from "./exit"
import fetch from "./fetch"
import open from "./open"
import help from "./help"

// TODO: convert this into an object key-value
export const eventsArray: string[] = [
  "ping",
  "clear",
  "cls",
  "c",
  "exit",
  "fetch",
  "neofetch",
  "open",
  "mtrx",
  "matrix",
  "help",
  "start",
  "ayuda"
]

let errorCount = 0;
export const resetErrorCounter = () => {
  errorCount = 0
}

export const events = ({value, id}: { value: string; id: string }): void => {
  const liElement = document.getElementById(`${id}`)!
  const sectionElement = document.createElement("section")
  sectionElement.classList.add("command__content")
  const events = value.split(" ")

  const atEvents: boolean = eventsArray.includes(value)
  if (!atEvents) {
    errorCount++;
  } else {
    errorCount = 0;
  }

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
    case "help":
      help({liElement, sectionElement})
      break
    case "start":
      help({liElement, sectionElement})
      break
    case "ayuda":
      help({liElement, sectionElement})
      break
    default:
      commandError({event: value, liElement, sectionElement, errorCounter: errorCount})
      break
  }
}
