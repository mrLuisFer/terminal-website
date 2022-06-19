import { CommonEventProps } from "../../types"
import { createFetchHtml } from "./createFetchHtml"
import { getPlatformIcon } from "./getPlatformIcon"
import chromeLogo from "../../../../chrome-logo.svg"

export default function chrome({
  liElement,
  sectionElement,
}: CommonEventProps) {
  const platformArr = navigator.platform
    .toLowerCase()
    .match(/(linux|windows)/i)!
  const platformIcon = getPlatformIcon(platformArr[0])

  const html = createFetchHtml({
    browserLogo: chromeLogo,
    platformIcon,
    platform: navigator.platform,
    browserIcon: '<i class="fa-brands fa-chrome"></i>',
  })

  sectionElement.insertAdjacentHTML("beforeend", html)
  liElement.insertAdjacentElement("afterend", sectionElement)
}
