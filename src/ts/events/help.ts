import type {CommonEventProps} from "../types"

const help = ({liElement, sectionElement}: CommonEventProps) => {
  const html = `<ul class="command__list">
    <li>List</li>
    <li>List</li>
  </ul>`

  sectionElement.insertAdjacentHTML("afterbegin", html)
  liElement.insertAdjacentElement("afterend", sectionElement)
}

export default help