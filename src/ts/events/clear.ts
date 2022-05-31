import removeAllChildNodes from "../utils/removeAllChildNodes"

const clear = () => {
  console.log("clear event")
  const commandList = document.querySelector("#command-list")!
  removeAllChildNodes(commandList)
}

export default clear
