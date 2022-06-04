import removeAllChildNodes from "../utils/removeAllChildNodes"

const clear = () => {
  const commandList = document.querySelector("#command-list")!
  removeAllChildNodes(commandList)
}

export default clear
