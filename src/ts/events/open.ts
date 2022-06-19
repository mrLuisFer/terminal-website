import {CommonEventProps} from "../types"

interface OpenProps extends CommonEventProps {
  value: string
}

export default function open({liElement, sectionElement, value}: OpenProps) {
  liElement.insertAdjacentElement("afterend", sectionElement)
  const eventValue: string[] = value.split(" ")
  const regex = new RegExp('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)')

  if (eventValue[1] !== undefined) {
    const url: string = eventValue[1]
    if (url.match(regex)) {
      window.open(url, "_blank")
    } else if (eventValue[1] === "--help" || eventValue[1] === "help") {
      console.log("help parameter")
    } else {
      console.log("url is not valid")
    }
  } else {
    console.log("need provide an url")
  }
}