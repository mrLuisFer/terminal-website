const commandError = (event: string, id: string) => {
  const liElement = document.getElementById(`${id}`)!
  const sectionElement = document.createElement("section")
  sectionElement.classList.add("command__content--error")
  sectionElement.textContent = `Error in ${event}`
  liElement.insertAdjacentElement("afterend", sectionElement)
}

export default commandError
