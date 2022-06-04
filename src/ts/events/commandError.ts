import type { CommonEventProps } from "../types"

interface ErrorEventProps extends CommonEventProps {
  event: string
}

const commandError = ({
  event,
  liElement,
  sectionElement,
}: ErrorEventProps) => {
  sectionElement.classList.add("command__content--error")
  sectionElement.textContent = `Error in ${event}`
  liElement.insertAdjacentElement("afterend", sectionElement)
}

export default commandError
