import {CommonEventProps} from "../types"

interface OpenProps extends CommonEventProps {
  value: string
}

export default function open({liElement, sectionElement, value}: OpenProps) {
  liElement.insertAdjacentElement("afterend", sectionElement)
  const eventValue: string[] = value.split(" ")
  const httpsRegex = new RegExp('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)')

  let html = ``
  if (eventValue[1] !== undefined) {
    const url: string = eventValue[1]
    if (url.match(httpsRegex)) {
      window.open(url, "_blank")
    } else if (eventValue[1] === "--help" || eventValue[1] === "help") {
      html = `<p class="command__content command__content--info">Help</p>`
      liElement.insertAdjacentHTML("afterend", html)
    } else {
      html = `<p class="command__content command__content--info">url is not valid</p>`
      liElement.insertAdjacentHTML("afterend", html)
    }
  } else {
    html = `<p class="command__content command__content--info">need provide an url</p>`
    liElement.insertAdjacentHTML("afterend", html)
  }
}