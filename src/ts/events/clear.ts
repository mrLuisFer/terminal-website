import removeAllChildNodes from "../utils/removeAllChildNodes"

const heroMsg = document.querySelector<HTMLElement>("#heroMsg")!
const clear = () => {
  heroMsg.style.display = "none"
  const commandList = document.querySelector("#command-list")!
  removeAllChildNodes(commandList)
}

export default clear
