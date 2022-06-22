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
  "ayuda",
]

export const eventsObj = {
  ping: {
    name: "ping",
    description: "Pong!",
  },
  clear: {
    name: "clear",
    description: "Clear the screen",
  },
  cls: {
    name: "cls",
    description: "Clear the screen",
  },
  c: {
    name: "c",
    description: "Clear the screen",
  },
  exit: {
    name: "exit",
    description: "Exit the program",
  },
  fetch: {
    name: "fetch",
    description: "Fetch a random image",
  },
  neofetch: {
    name: "neofetch",
    description: "Fetch information about the browser",
  },
  open: {
    name: "open",
    description: "Open a website",
  },
  mtrx: {
    name: "mtrx",
    description: "Create a matrix effect",
  },
  matrix: {
    name: "matrix",
    description: "Create a matrix effect",
  },
  help: {
    name: "help",
    description: "Show this help",
  },

  ayuda: {
    name: "ayuda",
    description: "Show this help",
  },
}

let errorCount = 0
export const resetErrorCounter = () => {
  errorCount = 0
}

export const events = ({ value, id }: { value: string; id: string }): void => {
  const liElement = document.getElementById(`${id}`)!
  const sectionElement = document.createElement("section")
  sectionElement.classList.add("command__content")
  const events = value.split(" ")

  const atEvents: boolean = eventsArray.includes(value)
  if (!atEvents) {
    errorCount++
  } else {
    errorCount = 0
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
      exit({ liElement, sectionElement })
      break
    case "fetch":
      break
    case "neofetch":
      fetch({ liElement, sectionElement })
      break
    case "open":
      open({ liElement, sectionElement, value })
      break
    case "mtrx":
      break
    case "matrix":
      break
    case "help":
      help({ liElement, sectionElement })
      break
    case "ayuda":
      help({ liElement, sectionElement })
      break
    default:
      commandError({
        event: value,
        liElement,
        sectionElement,
        errorCounter: errorCount,
      })
      break
  }
}
