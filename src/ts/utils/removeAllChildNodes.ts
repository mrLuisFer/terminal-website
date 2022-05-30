export default function removeAllChildNodes(parent: Element) {
  /*while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }*/
  parent.replaceChildren();
}
