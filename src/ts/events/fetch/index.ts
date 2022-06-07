import { CommonEventProps } from "../../types"
import chrome from "./chrome"
import firefox from "./firefox"

export default function fetch({ liElement, sectionElement }: CommonEventProps) {
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
      console.log(`Browser: ${navigator.userAgent} doesn't support`)
      return
  }
}
