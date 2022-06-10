import pong from "./pongs"
import commandError from "./commandError"
import clear from "./clear"
import exit from "./exit"
import fetch from "./fetch"

export const events = ({ value, id }: { value: string; id: string }): void => {
  const liElement = document.getElementById(`${id}`)!
  const sectionElement = document.createElement("section")
  sectionElement.classList.add("command__content")

  switch (value) {
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
      fetch({ liElement, sectionElement })
      break
    case "open":
      break
    case "mtrx":
      break
    default:
      commandError({ event: value, liElement, sectionElement })
      break
  }
}
