import type { CommonEventProps } from "../types"
import { eventsArray } from "../events"

const help = ({ liElement, sectionElement }: CommonEventProps) => {
  const html = `<ul class="command__list">
      <p>You can use the following commands:</p>
      <p>Write the command and you can add <span>"--help"</span> to know more</p>
      ${eventsArray.map((event) => `<li>${event}</li>`).join("")}
    </ul>`
  sectionElement.insertAdjacentHTML("afterbegin", html)
  liElement.insertAdjacentElement("afterend", sectionElement)
}

export default help
