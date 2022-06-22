import type { CommonEventProps } from "../types"
import { resetErrorCounter } from "../events"

interface ErrorEventProps extends CommonEventProps {
  event: string
  errorCounter: number
}

const commandError = ({
  event,
  liElement,
  sectionElement,
  errorCounter,
}: ErrorEventProps) => {
  sectionElement.classList.add("command__content--error")
  sectionElement.textContent = `Error in ${event}: Command not found...`
  liElement.insertAdjacentElement("afterend", sectionElement)
  if (errorCounter >= 4) {
    const suggestionHtml = `
      <p>Do you want to make a suggestion to add the <span>${event}</span> command?</p>
      <a href="https://github.com/mrLuisFer/terminal-website/issues" class="command__content--link" target="_blank" rel="noreferrer noopener">Github/mrLuisFer/terminal-website/issues</a>  
    `
    sectionElement.insertAdjacentHTML("beforeend", suggestionHtml)
    resetErrorCounter()
  }
}

export default commandError
