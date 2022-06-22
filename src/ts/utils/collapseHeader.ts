// For isolated module error with TypeScript
export {}

const collapseHeaderElement =
  document.querySelector<HTMLElement>("#collapseHeader")!
const collapseHeaderBtn =
  document.querySelector<HTMLElement>("#collapseHeaderBtn")!
const header = document.querySelector<HTMLElement>("#header")!
const extendHeader = document.querySelector<HTMLElement>("#extendHeader")!

collapseHeaderBtn.addEventListener("click", () => {
  header.classList.toggle("collapsed")
  header.style.display = "none"
  collapseHeaderElement.classList.toggle("baseMinimalHeader")
  collapseHeaderElement.classList.toggle("collapse__container")
})

extendHeader.addEventListener("click", () => {
  header.classList.add("extended")
  header.classList.toggle("collapsed")
  header.style.display = "flex"
  collapseHeaderElement.classList.toggle("baseMinimalHeader")
  collapseHeaderElement.classList.toggle("collapse__container")
})
