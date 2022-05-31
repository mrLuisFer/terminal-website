import pong from "./pongs"
import commandError from "./commandError"
import clear from "./clear"

export const events = ({ value, id }: { value: string; id: string }): void => {
  switch (value) {
    case "ping":
      pong()
      break
    case "clear":
      clear()
      break
    case "cls":
      clear()
      break
    default:
      commandError(value, id)
      break
  }
}
