import type { TLiHtmlProps } from "../types"

const createLiHtml = ({ value, listElement, id }: TLiHtmlProps) => {
  let li = document.createElement("li")
  let p = document.createElement("p")
  li.classList.add("commandList__item")
  li.setAttribute("id", id)
  p.classList.add("command__user")
  p.textContent = "user@user $"
  li.append(p)
  li.append(value)
  listElement !== null && listElement?.appendChild(li)
}

export default createLiHtml
