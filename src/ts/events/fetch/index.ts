import { CommonEventProps, Value } from "../../types"
import chrome from "./chrome"
import firefox from "./firefox"

interface FetchProps extends CommonEventProps {
  event: Value
}

export default function fetch({
  event,
  liElement,
  sectionElement,
}: FetchProps) {
  console.log(event)
  const appCodename = navigator.userAgent.match(
    /(opera|chrome|safari|firefox|msie)/i
  )!
  const browserName: string = appCodename[0].toLowerCase()

  switch (browserName) {
    case "firefox":
      firefox({ sectionElement, liElement })
      break
    case "chrome":
      chrome({ sectionElement, liElement })
      break
    default:
      console.log("Browser doesn't support")
      return
  }
}
