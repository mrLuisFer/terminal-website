import type { CommonEventProps } from "../types"
import { eventsObj } from "../events"

const help = ({ liElement, sectionElement }: CommonEventProps) => {
  const className = "command__helpItem"
  const baseHtml = `
    <p class="${className}">You can use the following commands:</p>
    <p class="${className}">Write the command and you can add <span>"--help"</span> to know more</p>
  `
  sectionElement.insertAdjacentHTML("afterbegin", baseHtml)

  for (let [_key, value] of Object.entries(eventsObj)) {
    const html = `<p class="${className}">${value.name} - ${value.description}</p>`
    sectionElement.insertAdjacentHTML("beforeend", html)
    liElement.insertAdjacentElement("afterend", sectionElement)
  }
}

export default help
