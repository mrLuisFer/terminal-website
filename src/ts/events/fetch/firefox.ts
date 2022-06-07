import { CommonEventProps } from "../../types"
import firefoxLogo from "../../../../firefox-logo.svg"
import { getPlatformIcon } from "./getPlatformIcon"
import { createFetchHtml } from "./createFetchHtml"

export default function firefox({
  liElement,
  sectionElement,
}: CommonEventProps) {
  console.log(navigator)

  const platformArr = navigator.oscpu.toLowerCase().match(/(linux|windows)/i)!
  const platformIcon = getPlatformIcon(platformArr[0])

  const html = createFetchHtml({
    browserLogo: firefoxLogo,
    platformIcon,
    platform: navigator.oscpu,
    browserIcon: '<i class="fa-brands fa-firefox-browser"></i>',
  })

  sectionElement.insertAdjacentHTML("beforeend", html)
  liElement.insertAdjacentElement("afterend", sectionElement)
}
