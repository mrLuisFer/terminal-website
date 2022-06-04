import type { TLiHtmlProps } from "../types"

const createLiHtml = ({ value, listElement, id }: TLiHtmlProps) => {
  let li = document.createElement("li")
  let p = document.createElement("p")
  let span = document.createElement("span")
  const liHtml: string = ` <p class="command__user"><span class="success">user</span>@user $</p>`

  li.classList.add("commandList__item")
  li.setAttribute("id", id)
  p.classList.add("command__user")
  span.classList.add("command__cmdValue")

  span.textContent = value
  li.insertAdjacentHTML("beforeend", liHtml)
  li.insertAdjacentElement("beforeend", span)
  listElement !== null && listElement?.appendChild(li)
}

export default createLiHtml
