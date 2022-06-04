import type { CommonEventProps } from "../types"

const exit = ({ liElement, sectionElement }: CommonEventProps) => {
  const html = `<p class="text">You cannot <span class="error">exit</span> closing the tab with <span class="info">JavaScript</span> for some reason.<br/>
    But you can open another tab clicking the button.</p>
    <a href="https://www.google.com/" class="exitLink" rel="noopener noreferrer" target="_blank" >Open another tab</a>
    `
  sectionElement.insertAdjacentHTML("afterbegin", html)
  liElement.insertAdjacentElement("afterend", sectionElement)
}

export default exit
